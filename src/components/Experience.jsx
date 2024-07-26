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
			<div className="info-card edit">
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
							placeholder="e.g. Manager"
							id="role"
						/>
					</li>
					<li>
						<label htmlFor="company">Company name</label>
						<input
							type="text"
							value={company}
							onChange={handleCompanyChange}
							placeholder="Name"
							id="company"
						/>
					</li>
					<li>
						<label htmlFor="type">Type of role</label>
						<input
							type="text"
							value={type}
							onChange={handleTypeChange}
							placeholder="e.g. Part Time"
							id="type"
						/>
					</li>
					<li>
						<label htmlFor="start-date">Start year</label>
						<input
							type="text"
							value={startDate}
							onChange={handleStartDateChange}
							placeholder="Year"
							id="start-date"
						/>
					</li>
					<li>
						<label htmlFor="end-date">End year</label>
						<input
							type="text"
							value={endDate}
							onChange={handleEndDateChange}
							placeholder="Year"
							id="end-date"
						/>
					</li>
				</ul>
				<div className="action-buttons-list">
					<button
						className="action-type confirm-type"
						type="button"
						onClick={handleClick(false)}
					>
						<img
							className="icon-image"
							src="../src/assets/check-1.png"
							alt="Confirm"
						/>
					</button>
					<button
						className="action-type delete-type"
						type="button"
						onClick={handleDelete}
					>
						<img
							className="icon-image"
							src="../src/assets/trash-bin.png"
							alt="Delete"
						/>
					</button>
				</div>
			</div>
		);
	} else {
		return (
			<div className="info-card view">
				<h3>{role}</h3>
				<p>{company}</p>
				<p>{type}</p>
				<p>
					{startDate}&mdash;{endDate}
				</p>
				<button
					className="action-type edit-type"
					type="button"
					onClick={handleClick(true)}
				>
					<img
						className="icon-image"
						src="../src/assets/pencil.png"
						alt="Edit"
					/>
				</button>
			</div>
		);
	}
}

export default Experience;
