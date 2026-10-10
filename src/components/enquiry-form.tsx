"use client";

import Link from "next/link";
import { useEffect, useRef, useState } from "react";
import { Icon } from "./ui";

type Mode = "application" | "visit" | "contact";
type Details = {
	parent: string;
	email: string;
	phone: string;
	student: string;
	year: string;
	current: string;
	visit: string;
	topic: string;
	message: string;
	consent: boolean;
};
const emptyDetails: Details = {
	parent: "",
	email: "",
	phone: "",
	student: "",
	year: "JSS1",
	current: "",
	visit: "Personal campus visit",
	topic: "Admissions",
	message: "",
	consent: false,
};
export function EnquiryForm({ mode = "application" }: { mode?: Mode }) {
	const [details, setDetails] = useState<Details>(emptyDetails);
	const [step, setStep] = useState(0);
	const [ready, setReady] = useState(false);
	const [visited, setVisited] = useState(false);
	const heading = useRef<HTMLHeadingElement>(null);
	const steps =
		mode === "contact"
			? ["Your enquiry", "Review details"]
			: [
					"Your family",
					mode === "visit" ? "Your visit" : "The student",
					"Review details",
				];
	const lastStep = steps.length - 1;
	function update(field: keyof Details, value: string | boolean) {
		setDetails((previous) => ({ ...previous, [field]: value }));
	}
	// biome-ignore lint/correctness/useExhaustiveDependencies: Focus follows changes to the rendered step and completion view.
	useEffect(() => {
		if (visited) heading.current?.focus();
	}, [step, ready, visited]);
	function download() {
		const text = `KINGSBRIDGE COLLEGE — PORTFOLIO DEMO\n${mode.toUpperCase()} ENQUIRY SUMMARY\n\nNot submitted. This is an illustrative document, not an application or visit confirmation.\n\nParent / guardian: ${details.parent}\nEmail: ${details.email}\nPhone: ${details.phone || "Not provided"}\n${mode !== "contact" ? `Student first name: ${details.student}\nEntry year: ${details.year}\nCurrent school: ${details.current || "Not provided"}\n` : `Topic: ${details.topic}\n`}${mode === "visit" ? `Visit preference: ${details.visit}\n` : ""}\nNotes: ${details.message || "None"}\n\nNo information has been sent or stored by a server.\n`;
		const url = URL.createObjectURL(
			new Blob([text], { type: "text/plain;charset=utf-8" }),
		);
		const anchor = document.createElement("a");
		anchor.href = url;
		anchor.download = `kingsbridge-${mode}-enquiry.txt`;
		anchor.click();
		setTimeout(() => URL.revokeObjectURL(url), 1000);
	}
	if (ready)
		return (
			<div className="enquiry-form form-success">
				<span className="success-icon">
					<Icon name="check" />
				</span>
				<p className="eyebrow">All set to review</p>
				<h2 ref={heading} tabIndex={-1}>
					Your demo enquiry is ready.
				</h2>
				<p>
					You’ve completed the {mode === "application" ? "admissions" : mode}{" "}
					experience. Download a copy of your details to see how an enquiry
					summary would look.
				</p>
				<div className="demo-note">
					<strong>Nothing has been submitted.</strong>
					<p>
						No information was sent to a school or saved on a server. This does
						not reserve a visit or create an application.
					</p>
				</div>
				<button
					type="button"
					className="button button-primary"
					onClick={download}
				>
					Download your summary <Icon name="download" />
				</button>
				<button
					type="button"
					className="text-button"
					onClick={() => {
						setReady(false);
						setStep(0);
						setDetails(emptyDetails);
					}}
				>
					Start a new demo enquiry
				</button>
			</div>
		);
	return (
		<form
			className="enquiry-form"
			onSubmit={(event) => {
				event.preventDefault();
				setVisited(true);
				if (step < lastStep) setStep(step + 1);
				else setReady(true);
			}}
		>
			<fieldset className="form-steps">
				<legend className="sr-only">Enquiry progress</legend>
				{steps.map((name, index) => (
					<span
						key={name}
						className={
							step === index
								? "step-current"
								: step > index
									? "step-complete"
									: ""
						}
						aria-current={step === index ? "step" : undefined}
					>
						<i>{step > index ? <Icon name="check" /> : index + 1}</i>
						<span>{name}</span>
					</span>
				))}
			</fieldset>
			<div className="form-step-heading">
				<p className="eyebrow">
					Step {step + 1} of {steps.length}
				</p>
				<h2 ref={heading} tabIndex={-1}>
					{step === lastStep
						? "Everything look right?"
						: step === 0
							? "Let’s start with you."
							: mode === "visit"
								? "Make the visit your own."
								: "A little about the student."}
				</h2>
				<p>
					{step === lastStep
						? "Review your details before creating your downloadable demo summary."
						: "Please use invented details to explore this portfolio experience."}
				</p>
			</div>
			{step === 0 && (
				<div className="field-grid">
					<label className="field full">
						Parent or guardian name <span>*</span>
						<input
							required
							autoComplete="off"
							value={details.parent}
							onChange={(event) => update("parent", event.target.value)}
							maxLength={100}
							placeholder="e.g. Alex Morgan"
						/>
					</label>
					<label className="field">
						Email address <span>*</span>
						<input
							required
							type="email"
							autoComplete="off"
							value={details.email}
							onChange={(event) => update("email", event.target.value)}
							maxLength={150}
							placeholder="alex@example.com"
						/>
					</label>
					<label className="field">
						Phone number <small>Optional</small>
						<input
							type="tel"
							autoComplete="off"
							value={details.phone}
							onChange={(event) => update("phone", event.target.value)}
							maxLength={30}
							placeholder="Your preferred contact number"
						/>
					</label>
					{mode === "contact" && (
						<>
							<label className="field full">
								What can we help with?
								<select
									value={details.topic}
									onChange={(event) => update("topic", event.target.value)}
								>
									<option>Admissions</option>
									<option>Curriculum & learning</option>
									<option>School life</option>
									<option>Family support</option>
									<option>General enquiry</option>
								</select>
							</label>
							<label className="field full">
								Your message <span>*</span>
								<textarea
									required
									value={details.message}
									onChange={(event) => update("message", event.target.value)}
									maxLength={2000}
									rows={5}
									placeholder="Tell us what you would like to know…"
								/>
							</label>
						</>
					)}
				</div>
			)}
			{step === 1 && mode !== "contact" && (
				<div className="field-grid">
					<label className="field">
						Student first name <span>*</span>
						<input
							required
							value={details.student}
							onChange={(event) => update("student", event.target.value)}
							maxLength={80}
							placeholder="e.g. Jordan"
						/>
					</label>
					<label className="field">
						Proposed entry class
						<select
							value={details.year}
							onChange={(event) => update("year", event.target.value)}
						>
							{["JSS1", "JSS2", "JSS3", "SS1", "SS2", "SS3"].map((year) => (
								<option key={year}>{year}</option>
							))}
						</select>
					</label>
					{mode === "application" ? (
						<label className="field full">
							Current school <small>Optional</small>
							<input
								value={details.current}
								onChange={(event) => update("current", event.target.value)}
								maxLength={150}
								placeholder="Name of current school"
							/>
						</label>
					) : (
						<label className="field full">
							Preferred type of visit
							<select
								value={details.visit}
								onChange={(event) => update("visit", event.target.value)}
							>
								<option>Personal campus visit</option>
								<option>Saturday open morning</option>
								<option>Online admissions conversation</option>
							</select>
						</label>
					)}
					<label className="field full">
						Anything you would like us to know?<small>Optional</small>
						<textarea
							value={details.message}
							onChange={(event) => update("message", event.target.value)}
							maxLength={2000}
							rows={4}
							placeholder="Your interests, questions or visit preferences. Please don’t include sensitive information."
						/>
					</label>
					{details.year === "SS3" && (
						<p className="field-note full">
							In a real admissions process, final-year transfers would need an
							individual review of examination registration and curriculum
							compatibility.
						</p>
					)}
				</div>
			)}
			{step === lastStep && (
				<>
					<dl className="review-details">
						<div>
							<dt>Parent or guardian</dt>
							<dd>{details.parent}</dd>
						</div>
						<div>
							<dt>Email</dt>
							<dd>{details.email}</dd>
						</div>
						<div>
							<dt>Phone</dt>
							<dd>{details.phone || "Not provided"}</dd>
						</div>
						{mode !== "contact" && (
							<>
								<div>
									<dt>Student</dt>
									<dd>{details.student}</dd>
								</div>
								<div>
									<dt>Entry class</dt>
									<dd>{details.year}</dd>
								</div>
							</>
						)}
						{mode === "visit" && (
							<div>
								<dt>Visit preference</dt>
								<dd>{details.visit}</dd>
							</div>
						)}
						{mode === "contact" && (
							<div>
								<dt>Topic</dt>
								<dd>{details.topic}</dd>
							</div>
						)}
						{mode === "application" && (
							<div>
								<dt>Current school</dt>
								<dd>{details.current || "Not provided"}</dd>
							</div>
						)}
						<div>
							<dt>Your notes</dt>
							<dd>{details.message || "None"}</dd>
						</div>
					</dl>
					<label className="consent-field">
						<input
							type="checkbox"
							required
							checked={details.consent}
							onChange={(event) => update("consent", event.target.checked)}
						/>
						<span>
							I understand this is a portfolio demo and these details will only
							be used to create a summary in my browser.{" "}
							<Link href="/policies">Read the privacy note.</Link>
						</span>
					</label>
				</>
			)}
			<div className="form-actions">
				{step > 0 && (
					<button
						type="button"
						className="text-button"
						onClick={() => {
							setVisited(true);
							setStep(step - 1);
						}}
					>
						Back
					</button>
				)}
				<button type="submit" className="button button-primary">
					{step === lastStep ? "Create demo summary" : "Continue"}
					<Icon />
				</button>
			</div>
			<p className="small-copy">
				Your details stay in memory while you complete this form. Refreshing the
				page clears them. No uploads or payments are collected.
			</p>
		</form>
	);
}
