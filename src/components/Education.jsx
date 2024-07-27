import { useState } from "react";

function Education({ data, education, setData, index }) {
	const [editMode, setEditMode] = useState(false);
	const [type, setType] = useState(education.type);
	const [school, setSchool] = useState(education.school);
	const [startDate, setStartDate] = useState(education.startDate);
	const [endDate, setEndDate] = useState(education.endDate);

	const handleClick = (status) => () => {
		setEditMode(status);
		if (!status) {
			const newEducation = {
				type,
				school,
				startDate,
				endDate,
			};
			const newEducationList = data.education;
			newEducationList[index] = newEducation;
			const newData = {
				...data,
				education: newEducationList,
			};
			setData(newData);
		}
	};

	const handleTypeChange = (event) => {
		const newType = event.target.value;
		setType(newType);
	};

	const handleSchoolChange = (event) => {
		const newSchool = event.target.value;
		setSchool(newSchool);
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
		const newEducationList = data.education.filter(
			(education, i) => index != i
		);
		const newData = {
			...data,
			education: newEducationList,
		};
		setData(newData);
	};

	if (editMode) {
		return (
			<div className="info-card edit">
				<p>
					<strong>Enter education details</strong>
				</p>
				<ul className="inputs-list">
					<li>
						<label htmlFor="type">Type of school</label>
						<input
							type="text"
							value={type}
							onChange={handleTypeChange}
							placeholder="e.g. College"
							id="type"
						/>
					</li>
					<li>
						<label htmlFor="school">School name</label>
						<input
							type="text"
							value={school}
							onChange={handleSchoolChange}
							placeholder="Name"
							id="school"
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
							src="/check-1.png"
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
							src="/trash-bin.png"
							alt="Delete"
						/>
					</button>
				</div>
			</div>
		);
	} else {
		return (
			<div className="info-card view">
				<h3>{type}</h3>
				<p>{school}</p>
				<p>
					{startDate}—{endDate}
				</p>
				<button
					className="action-type edit-type"
					type="button"
					onClick={handleClick(true)}
				>
					<img className="icon-image" src="/pencil.png" alt="Edit" />
				</button>
			</div>
		);
	}
}

export default Education;
