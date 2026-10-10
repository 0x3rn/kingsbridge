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
type Errors = Partial<Record<keyof Details, string>>;
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
	const [errors, setErrors] = useState<Errors>({});
	const [validationAttempt, setValidationAttempt] = useState(0);
	const heading = useRef<HTMLHeadingElement>(null);
	const form = useRef<HTMLFormElement>(null);
	const steps =
		mode === "contact"
			? ["Your example enquiry", "Review enquiry"]
			: [
					mode === "visit" ? "Family details" : "Parent or guardian details",
					mode === "visit" ? "Visit preferences" : "Student and entry class",
					"Review details",
				];
	const lastStep = steps.length - 1;
	// biome-ignore lint/correctness/useExhaustiveDependencies: Focus follows navigation and completion, not typing.
	useEffect(() => {
		if (visited) heading.current?.focus();
	}, [step, ready, visited]);
	// biome-ignore lint/correctness/useExhaustiveDependencies: Focus invalid fields only on submission, not while correcting them.
	useEffect(() => {
		if (Object.keys(errors).length)
			form.current
				?.querySelector<HTMLElement>('[aria-invalid="true"]')
				?.focus();
	}, [validationAttempt]);
	function update(field: keyof Details, value: string | boolean) {
		setDetails((previous) => ({ ...previous, [field]: value }));
		if (errors[field])
			setErrors((previous) => {
				const next = { ...previous };
				delete next[field];
				return next;
			});
	}
	function navigate(next: number) {
		setErrors({});
		setVisited(true);
		setStep(next);
	}
	function validate() {
		const next: Errors = {};
		if (step === 0) {
			if (!details.parent.trim())
				next.parent = "Enter an example parent or guardian name.";
			if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(details.email))
				next.email =
					"Enter a valid example email address, such as parent@example.com.";
			if (mode === "contact" && !details.message.trim())
				next.message = "Add an example question or message.";
		} else if (step !== lastStep && !details.student.trim())
			next.student = "Enter an example student first name.";
		if (step === lastStep && !details.consent)
			next.consent = "Confirm that you understand this is a demo.";
		setErrors(next);
		if (Object.keys(next).length)
			setValidationAttempt((previous) => previous + 1);
		return Object.keys(next).length === 0;
	}
	// Omit form names so a native submission cannot serialize demo details before hydration.
	function inputProps(field: keyof Details) {
		return {
			id: `${mode}-${field}`,
			"aria-invalid": errors[field] ? true : undefined,
			"aria-describedby": errors[field] ? `${mode}-${field}-error` : undefined,
		};
	}
	function error(field: keyof Details) {
		return errors[field] ? (
			<span className="field-error" id={`${mode}-${field}-error`}>
				{errors[field]}
			</span>
		) : null;
	}
	function download() {
		const text = `KINGSBRIDGE COLLEGE — PORTFOLIO DEMO\n${mode.toUpperCase()} ENQUIRY SUMMARY\n\nNo application or message was sent. No visit was booked or place reserved.\n\nParent / guardian: ${details.parent}\nEmail: ${details.email}\nPhone: ${details.phone || "Not provided"}\n${mode !== "contact" ? `Student first name: ${details.student}\nEntry class: ${details.year}\n` : `Topic: ${details.topic}\n`}${mode === "application" ? `Current school: ${details.current || "Not provided"}\n` : ""}${mode === "visit" ? `Visit preference: ${details.visit}\n` : ""}\nNotes: ${details.message || "None"}\n\nThis file is saved only on your device.\n`;
		const url = URL.createObjectURL(
			new Blob([text], { type: "text/plain;charset=utf-8" }),
		);
		const anchor = document.createElement("a");
		anchor.href = url;
		anchor.download = `kingsbridge-${mode}-demo-summary.txt`;
		anchor.click();
		setTimeout(() => URL.revokeObjectURL(url), 1000);
	}
	const completionTitle =
		mode === "visit"
			? "Your demo visit summary is ready"
			: mode === "contact"
				? "Your demo enquiry summary is ready"
				: "Your demo summary is ready";
	if (ready)
		return (
			<div className="enquiry-form form-success">
				<span className="success-icon">
					<Icon name="check" />
				</span>
				<h2 ref={heading} tabIndex={-1}>
					{completionTitle}
				</h2>
				<p>
					{mode === "visit"
						? "This summary was created in your browser. No appointment has been booked."
						: mode === "contact"
							? "Your message has not been sent and no reply will be issued."
							: "This summary was created in your browser. No school has received it and no place has been reserved."}
				</p>
				<button
					type="button"
					className="button button-primary"
					onClick={download}
				>
					Download demo{" "}
					{mode === "application"
						? ""
						: mode === "visit"
							? "visit "
							: "enquiry "}
					summary (.txt) <Icon name="download" />
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
				<p className="small-copy">A downloaded file stays on your device.</p>
			</div>
		);
	return (
		<form
			ref={form}
			className="enquiry-form"
			noValidate
			onSubmit={(event) => {
				event.preventDefault();
				if (!validate()) return;
				setVisited(true);
				if (step < lastStep) navigate(step + 1);
				else setReady(true);
			}}
		>
			<ol className="form-progress" aria-label="Enquiry progress">
				{steps.map((name, index) => (
					<li
						key={name}
						aria-current={step === index ? "step" : undefined}
						className={step === index ? "step-current" : ""}
					>
						<span>{index + 1}</span>
						{name}
					</li>
				))}
			</ol>
			<div className="form-step-heading">
				<p className="eyebrow">
					{step + 1} of {steps.length}
				</p>
				<h2 ref={heading} tabIndex={-1}>
					{step === lastStep
						? mode === "application"
							? "Review your demo enquiry"
							: mode === "visit"
								? "Review your visit enquiry"
								: "Review your enquiry"
						: steps[step]}
				</h2>
				<p>
					{step === lastStep
						? "Check your example details before creating a local summary. Nothing will be sent."
						: step === 0
							? "Use an example name and email address. Phone number is optional."
							: "Add an example first name and choose the proposed class."}
				</p>
			</div>
			{Object.keys(errors).length > 0 && (
				<p role="alert" className="error-summary">
					Check the highlighted fields before continuing.
				</p>
			)}
			{step === 0 && (
				<div className="field-grid">
					<label className="field full" htmlFor={`${mode}-parent`}>
						Parent or guardian name <small>Required</small>
						<input
							{...inputProps("parent")}
							required
							autoComplete="off"
							value={details.parent}
							onChange={(event) => update("parent", event.target.value)}
							maxLength={100}
							placeholder="Alex Morgan"
						/>
						{error("parent")}
					</label>
					<label className="field" htmlFor={`${mode}-email`}>
						Email address <small>Required</small>
						<input
							{...inputProps("email")}
							required
							type="email"
							autoComplete="off"
							value={details.email}
							onChange={(event) => update("email", event.target.value)}
							maxLength={150}
							placeholder="parent@example.com"
						/>
						{error("email")}
					</label>
					<label className="field" htmlFor={`${mode}-phone`}>
						Phone number <small>Optional</small>
						<input
							{...inputProps("phone")}
							type="tel"
							autoComplete="off"
							value={details.phone}
							onChange={(event) => update("phone", event.target.value)}
							maxLength={30}
						/>
					</label>
					{mode === "contact" && (
						<>
							<label className="field full" htmlFor={`${mode}-topic`}>
								Enquiry topic
								<select
									{...inputProps("topic")}
									value={details.topic}
									onChange={(event) => update("topic", event.target.value)}
								>
									{[
										"Admissions",
										"Curriculum and learning",
										"School life",
										"Family information",
										"General enquiry",
									].map((topic) => (
										<option key={topic}>{topic}</option>
									))}
								</select>
							</label>
							<label className="field full" htmlFor={`${mode}-message`}>
								Example message <small>Required</small>
								<textarea
									{...inputProps("message")}
									required
									value={details.message}
									onChange={(event) => update("message", event.target.value)}
									maxLength={2000}
									rows={4}
								/>
								{error("message")}
								<small>
									Use invented information. Do not include private student
									records or sensitive details.
								</small>
							</label>
						</>
					)}
				</div>
			)}
			{step === 1 && mode !== "contact" && (
				<div className="field-grid">
					<label className="field" htmlFor={`${mode}-student`}>
						Student first name <small>Required</small>
						<input
							{...inputProps("student")}
							required
							value={details.student}
							onChange={(event) => update("student", event.target.value)}
							maxLength={80}
							placeholder="Jordan"
						/>
						{error("student")}
					</label>
					<label className="field" htmlFor={`${mode}-year`}>
						Proposed entry class
						<select
							{...inputProps("year")}
							value={details.year}
							onChange={(event) => update("year", event.target.value)}
						>
							{["JSS1", "JSS2", "JSS3", "SS1", "SS2", "SS3"].map((year) => (
								<option key={year}>{year}</option>
							))}
						</select>
					</label>
					{mode === "application" ? (
						<label className="field full" htmlFor={`${mode}-current`}>
							Current school <small>Optional</small>
							<input
								{...inputProps("current")}
								value={details.current}
								onChange={(event) => update("current", event.target.value)}
								maxLength={150}
							/>
						</label>
					) : (
						<label className="field full" htmlFor={`${mode}-visit`}>
							Preferred type of visit
							<select
								{...inputProps("visit")}
								value={details.visit}
								onChange={(event) => update("visit", event.target.value)}
							>
								{[
									"Personal campus visit",
									"Open morning",
									"Online conversation",
								].map((visit) => (
									<option key={visit}>{visit}</option>
								))}
							</select>
						</label>
					)}
					<label className="field full" htmlFor={`${mode}-message`}>
						{mode === "visit"
							? "Questions for the visit"
							: "Questions or notes"}
						<small>Optional</small>
						<textarea
							{...inputProps("message")}
							value={details.message}
							onChange={(event) => update("message", event.target.value)}
							maxLength={2000}
							rows={4}
						/>
						<small>
							Use invented information. Do not include health details or private
							records.
						</small>
					</label>
					{details.year === "SS3" && (
						<p className="field-note full">
							Final-year entry requires individual review in the school model.
						</p>
					)}
				</div>
			)}
			{step === lastStep && (
				<>
					<div className="review-edit">
						<button
							type="button"
							className="text-button"
							onClick={() => navigate(0)}
						>
							{mode === "contact"
								? "Edit enquiry details"
								: "Edit family details"}
						</button>
						{mode !== "contact" && (
							<button
								type="button"
								className="text-button"
								onClick={() => navigate(1)}
							>
								{mode === "visit"
									? "Edit visit preferences"
									: "Edit student details"}
							</button>
						)}
					</div>
					<dl className="review-details">
						{[
							["Parent or guardian", details.parent],
							["Email", details.email],
							["Phone", details.phone || "Not provided"],
							...(mode !== "contact"
								? [
										["Student", details.student],
										["Entry class", details.year],
									]
								: [["Topic", details.topic]]),
							...(mode === "visit"
								? [["Visit preference", details.visit]]
								: []),
							...(mode === "application"
								? [["Current school", details.current || "Not provided"]]
								: []),
							["Questions or notes", details.message || "None"],
						].map(([label, value]) => (
							<div key={label}>
								<dt>{label}</dt>
								<dd>{value}</dd>
							</div>
						))}
					</dl>
					<label className="consent-field">
						<input
							{...inputProps("consent")}
							type="checkbox"
							required
							checked={details.consent}
							onChange={(event) => update("consent", event.target.checked)}
						/>
						<span>
							I understand that this demo creates a summary in my browser and
							does not{" "}
							{mode === "application"
								? "send an application"
								: mode === "visit"
									? "book an appointment"
									: "send a message"}
							. <Link href="/policies">Read the privacy note.</Link>
						</span>
					</label>
					{error("consent")}
				</>
			)}
			<div className="form-actions">
				{step > 0 && (
					<button
						type="button"
						className="text-button"
						onClick={() => navigate(step - 1)}
					>
						Back
					</button>
				)}
				<button type="submit" className="button button-primary">
					{step === lastStep
						? "Create demo summary"
						: mode === "contact"
							? "Review enquiry"
							: step === 0
								? mode === "visit"
									? "Continue to visit preferences"
									: "Continue to student details"
								: "Review details"}
					<Icon />
				</button>
			</div>
			<p className="small-copy">
				Details are held temporarily while you complete the form. Refreshing
				clears them. A downloaded file stays on your device.
			</p>
		</form>
	);
}
