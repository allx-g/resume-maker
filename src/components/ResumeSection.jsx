import { useState } from "react";

function ResumeSection({ general, education, experience }) {
	function renderDateLine(startDate, endDate) {
		if (startDate && endDate) {
			return (
				<span>
					{startDate}—{endDate}
				</span>
			);
		} else if (startDate) {
			return <span>{startDate}—Present</span>;
		} else if (endDate) {
			return <span>n/a—{endDate}</span>;
		} else {
			return <span></span>;
		}
	}
	const educationList = education.map(
		({ type, school, startDate, endDate }) => (
			<li className="view-list">
				<div className="heading-date-line">
					<h4>{type}</h4>
					{renderDateLine(startDate, endDate)}
				</div>
				<p>{school}</p>
			</li>
		)
	);

	const experienceList = experience.map(
		({ role, company, endDate, startDate, type }) => (
			<li className="view-list">
				<div className="heading-date-line">
					<h4>{role}</h4>
					{renderDateLine(startDate, endDate)}
				</div>
				<p>{company}</p>
				<p>{type}</p>
			</li>
		)
	);
	return (
		<section className="resume">
			<div className="created-resume-container">
				<section className="general-info">
					<h4>{general.name}</h4>
					<address>
						{general.phone} | {general.email}
					</address>
				</section>
				<section className="info-list-container">
					<h3>Education</h3>
					<ul className="info-list">{educationList}</ul>
				</section>
				<section className="info-list-container">
					<h3>Experience</h3>
					<ul className="info-list">{experienceList}</ul>
				</section>
			</div>
		</section>
	);
}

export default ResumeSection;
