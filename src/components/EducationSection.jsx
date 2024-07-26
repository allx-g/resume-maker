import Education from "./Education.jsx";

function EducationSection({ data, setData }) {
	let index = 0;
	const educationsList = data.education.map((education) => (
		<li>
			<Education
				key={`${education.type} ${education.school}`}
				data={data}
				education={education}
				setData={setData}
				index={index++}
			/>
		</li>
	));

	const handleAdd = () => {
		const newEducation = {
			type: "",
			school: "",
			startDate: "",
			endDate: "",
		};
		const newData = {
			...data,
			education: [...data.education, newEducation],
		};
		setData(newData);
	};

	return (
		<section className="education">
			<h2>Education</h2>
			<ul className="view-list">{educationsList}</ul>
			<button
				className="action-type add-type"
				type="button"
				onClick={handleAdd}
			>
				<img
					className="icon-image"
					src="../src/assets/plus.png"
					alt="New education"
				/>
			</button>
		</section>
	);
}

export default EducationSection;
