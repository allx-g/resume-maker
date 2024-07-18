import { useState } from "react";

function Experience({ data, experience, setData, index }) {
	const [editMode, setEditMode] = useState(false);
	const [type, setType] = useState(experience.type);
	const [role, setRole] = useState(experience.role);
	const [company, setCompany] = useState(experience.company);
	const [startDate, setStartDate] = useState(experience.startDate);
	const [endDate, setEndDate] = useState(experience.endDate);

	const handleClick = (status) => () => {
		setEditMode(status);
		if (!status) {
			const newExperience = { type, role, company, startDate, endDate };
			const newExperienceList = data.experience;
			newExperienceList[index] = newExperience;
			const newData = {
				...data,
				experience: newExperienceList,
			};
			setData(newData);
		}
	};

	const handleTypeChange = (event) => {
		const newType = event.target.value;
		setType(newType);
	};

	const handleRoleChange = (event) => {
		const newRole = event.target.value;
		setRole(newRole);
	};

	const handleCompanyChange = (event) => {
		const newCompany = event.target.value;
		setCompany(newCompany);
	};

	const handleStartDateChange = (event) => {
		const newStartDate = event.target.value;
		setStartDate(newStartDate);
	};

	const handleEndDateChange = (event) => {
		const newEndDate = event.target.value;
		setEndDate(newEndDate);
	};

	const handleDelete = () => {
		const newExperienceList = data.experience.filter(
			(experience, i) => index != i
		);
		const newData = {
			...data,
			experience: newExperienceList,
		};
		setData(newData);
	};

	if (editMode) {
		return (
			<div className="edit">
				<p>
					<strong>Enter experience details</strong>
				</p>
				<ul className="inputs-list">
					<li>
						<label htmlFor="role">Role name/title</label>
						<input
							type="text"
							value={role}
							onChange={handleRoleChange}
							placeholder="Role title"
							id="role"
						/>
					</li>
					<li>
						<label htmlFor="company">Company name</label>
						<input
							type="text"
							value={company}
							onChange={handleCompanyChange}
							placeholder="Company name"
							id="company"
						/>
					</li>
					<li>
						<label htmlFor="type">Type of role</label>
						<input
							type="text"
							value={type}
							onChange={handleTypeChange}
							placeholder="Job type (e.g. part-time)"
							id="type"
						/>
					</li>
					<li>
						<label htmlFor="start-date">Start date</label>
						<input
							type="text"
							value={startDate}
							onChange={handleStartDateChange}
							placeholder="Start date at company"
							id="start-date"
						/>
					</li>
					<li>
						<label htmlFor="end-date">End date</label>
						<input
							type="text"
							value={endDate}
							onChange={handleEndDateChange}
							placeholder="End date at company"
							id="end-date"
						/>
					</li>
				</ul>
				<button
					className="confirm-type"
					type="button"
					onClick={handleClick(false)}
				>
					Confirm
				</button>
				<button type="button" onClick={handleDelete}>
					Delete
				</button>
			</div>
		);
	} else {
		return (
			<div className="view">
				<h3>{role}</h3>
				<p>{company}</p>
				<p>{type}</p>
				<p>
					{startDate} -- {endDate}
				</p>
				<button type="button" onClick={handleClick(true)}>
					Edit
				</button>
			</div>
		);
	}
}

export default Experience;
