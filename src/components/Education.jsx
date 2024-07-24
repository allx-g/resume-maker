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
				<p>Enter education details</p>
				<ul className="inputs-list">
					<label htmlFor="type">Type of school</label>
					<input
						type="text"
						value={type}
						onChange={handleTypeChange}
						placeholder="Type of school"
						id="type"
					/>
					<label htmlFor="school">School name</label>
					<input
						type="text"
						value={school}
						onChange={handleSchoolChange}
						placeholder="Name of school"
						id="school"
					/>
					<label htmlFor="start-date">Start date</label>
					<input
						type="text"
						value={startDate}
						onChange={handleStartDateChange}
						placeholder="Start date at school"
						id="start-date"
					/>
					<label htmlFor="end-date">End date</label>
					<input
						type="text"
						value={endDate}
						onChange={handleEndDateChange}
						placeholder="End date at school"
						id="end-date"
					/>
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
			<div className="info-card view">
				<h3>{type}</h3>
				<p>{school}</p>
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

export default Education;
