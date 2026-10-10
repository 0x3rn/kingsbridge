"use client";
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
};
type Errors = Partial<Record<keyof Details, string>>;
const emptyDetails: Details = {
	parent: "",
	email: "",
	phone: "",
	student: "",
	year: "JSS1",
	current: "",
	visit: "Personal school visit",
	topic: "Admissions",
	message: "",
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
			? ["Your Enquiry", "Review Your Details"]
			: [
					"Parent or Guardian Details",
					mode === "visit" ? "Visit Details" : "Student Details",
					mode === "visit" ? "Review Your Request" : "Review Your Details",
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
			if (!details.parent.trim()) next.parent = "Please enter your name.";
			if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(details.email))
				next.email = "Please enter a valid email address.";
			if (mode === "contact" && !details.message.trim())
				next.message = "Please enter your message.";
		} else if (step !== lastStep && !details.student.trim())
			next.student = "Please enter the student’s first name.";
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
		const text = `KINGSBRIDGE COLLEGE — PORTFOLIO PREVIEW\n${mode === "visit" ? "VISIT REQUEST" : "ENQUIRY"} SUMMARY\n\nNo application or message was sent. No visit was booked or place reserved.\n\nParent / guardian: ${details.parent}\nEmail: ${details.email}\nPhone: ${details.phone || "Not provided"}\n${mode !== "contact" ? `Student first name: ${details.student}\nEntry class: ${details.year}\n` : `Topic: ${details.topic}\n`}${mode === "application" ? `Current school: ${details.current || "Not provided"}\n` : ""}${mode === "visit" ? `Visit preference: ${details.visit}\n` : ""}\nNotes: ${details.message || "None"}\n\nThis file is saved only on your device.\n`;
		const url = URL.createObjectURL(
			new Blob([text], { type: "text/plain;charset=utf-8" }),
		);
		const anchor = document.createElement("a");
		anchor.href = url;
		anchor.download = `kingsbridge-${mode}-summary.txt`;
		anchor.click();
		setTimeout(() => URL.revokeObjectURL(url), 1000);
	}
	const completionTitle =
		mode === "visit"
			? "Your visit request summary is ready."
			: "Your enquiry summary is ready.";
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
						? "Download your request details below. This preview has not sent the request or booked an appointment."
						: mode === "contact"
							? "Download a copy below. This preview has not sent your message."
							: "You can download a copy for your records. This preview has not sent your enquiry to the school."}
				</p>
				<button
					type="button"
					className="button button-primary"
					onClick={download}
				>
					{mode === "visit"
						? "Download Visit Request"
						: "Download Enquiry Summary"}{" "}
					<Icon name="download" />
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
					Start a New Enquiry
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
					{steps[step]}
				</h2>
				<p>
					{step === lastStep
						? mode === "visit"
							? "Check the information below before saving your visit request."
							: "Check the information below before saving your enquiry summary."
						: step === 0
							? "Provide your contact details. Phone number is optional."
							: "Tell us about your child and the proposed class."}
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
						Full name <small>Required</small>
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
										"School Fees",
										"Academic Programme",
										"School Visits",
										"Parents’ Information",
										"General Enquiry",
									].map((topic) => (
										<option key={topic}>{topic}</option>
									))}
								</select>
							</label>
							<label className="field full" htmlFor={`${mode}-message`}>
								Your message <small>Required</small>
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
									Please do not include medical records or other sensitive
									documents in this form.
								</small>
							</label>
						</>
					)}
				</div>
			)}
			{step === 1 && mode !== "contact" && (
				<div className="field-grid">
					<label className="field" htmlFor={`${mode}-student`}>
						Student’s first name <small>Required</small>
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
						Proposed class
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
							Preferred visit type
							<select
								{...inputProps("visit")}
								value={details.visit}
								onChange={(event) => update("visit", event.target.value)}
							>
								{[
									"Personal school visit",
									"Open day",
									"Online admissions discussion",
								].map((visit) => (
									<option key={visit}>{visit}</option>
								))}
							</select>
						</label>
					)}
					<label className="field full" htmlFor={`${mode}-message`}>
						{mode === "visit"
							? "Questions for the visit"
							: "Questions or additional information"}
						<small>Optional</small>
						<textarea
							{...inputProps("message")}
							value={details.message}
							onChange={(event) => update("message", event.target.value)}
							maxLength={2000}
							rows={4}
						/>
						<small>
							Please do not include medical records or other sensitive documents
							in this form.
						</small>
					</label>
					{details.year === "SS3" && (
						<p className="field-note full">
							Admission into a final-year class requires individual
							consideration.
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
							{mode === "contact" ? "Edit Details" : "Edit Details"}
						</button>
						{mode !== "contact" && (
							<button
								type="button"
								className="text-button"
								onClick={() => navigate(1)}
							>
								{mode === "visit"
									? "Edit Visit Details"
									: "Edit Student Details"}
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
							[
								"Questions or additional information",
								details.message || "None",
							],
						].map(([label, value]) => (
							<div key={label}>
								<dt>{label}</dt>
								<dd>{value}</dd>
							</div>
						))}
					</dl>
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
						? mode === "visit"
							? "Save Visit Request"
							: "Save Enquiry Summary"
						: step === 0 && mode !== "contact"
							? "Continue"
							: "Review Enquiry"}
					<Icon />
				</button>
			</div>
		</form>
	);
}
