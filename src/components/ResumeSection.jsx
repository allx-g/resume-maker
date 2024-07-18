import { useState } from "react";

function ResumeSection({ general, education, experience }) {
	const handleCounterClick = () => {
		const newClicks = clicks + 1;
		setClicks(newClicks);
	};

	const educationList = education.map(
		({ type, school, startDate, endDate }) => (
			<li>
				<div className="heading-date-line">
					<h4>{type}</h4>
					<span>
						{startDate}--{endDate}
					</span>
				</div>
				<p>{school}</p>
			</li>
		)
	);

	const experienceList = experience.map(
		({ role, company, endDate, startDate, type }) => (
			<li key={company + role}>
				<div className="heading-date-line">
					<h4>{role}</h4>
					<span>
						{startDate}---{endDate}
					</span>
				</div>
				<p>{company}</p>
				<p>{type}</p>
			</li>
		)
	);
	return (
		<section className="resume">
			<h2>Your resume</h2>
			<div className="resume-display">
				<section className="general-info">
					<h4>{general.name}</h4>
					<address>
						{general.phone} | {general.email}
					</address>
				</section>
				<section className="education-info">
					<h3>Education</h3>
					<ul className="education-list">{educationList}</ul>
				</section>
				<section className="education-info">
					<h3>Experience</h3>
					<ul className="experience-list">{experienceList}</ul>
				</section>
			</div>
		</section>
	);
}

export default ResumeSection;
