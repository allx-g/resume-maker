import Experience from "./Experience.jsx";

function ExperienceSection({ data, setData }) {
	let index = 0;
	const experiencesList = data.experience.map((experience) => (
		<li>
			<Experience
				key={`${experience.role} ${experience.company}`}
				data={data}
				experience={experience}
				setData={setData}
				index={index++}
			/>
		</li>
	));

	function handleAdd() {
		const newExperience = {
			type: "",
			company: "",
			role: "",
			startDate: "",
			endDate: "",
		};
		const newData = {
			...data,
			experience: [...data.experience, newExperience],
		};
		setData(newData);
	}
	return (
		<section className="experience">
			<h2>Experience</h2>
			<ul>{experiencesList}</ul>
			<button type="button" onClick={handleAdd}>
				Add experience
			</button>
		</section>
	);
}

export default ExperienceSection;
