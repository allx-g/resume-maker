import { useState } from "react";
import "./App.css";
import ExperienceSection from "./components/ExperienceSection.jsx";
import GeneralSection from "./components/GeneralSection.jsx";
import EducationSection from "./components/EducationSection.jsx";
import ResumeSection from "./components/ResumeSection.jsx";

function App() {
	const initalData = {
		general: {
			name: "Your Name",
			phone: "123-456-7890",
			email: "example@email.com",
		},
		education: [],
		experience: [],
	};

	const [data, setData] = useState(initalData);

	const [activeContent, setActiveContent] = useState("Resume");

	const sections = [
		{ content: "Resume" },
		{ content: "General" },
		{ content: "Education" },
		{ content: "Experience" },
	];

	const onButtonClick = (buttonContent) => () => {
		setActiveContent(buttonContent);
	};
	const buttonsList = sections.map((section) => (
		<button
			type="button"
			key={section.content}
			onClick={onButtonClick(section.content)}
		>
			{section.content}
		</button>
	));

	const renderCurrentContent = (activeContent) => {
		switch (activeContent) {
			case "Resume":
				return (
					<ResumeSection
						general={data.general}
						education={data.education}
						experience={data.experience}
					/>
				);
			case "General":
				return (
					<GeneralSection
						data={data}
						general={data.general}
						setData={setData}
					/>
				);
			case "Education":
				return <EducationSection data={data} setData={setData} />;
			case "Experience":
				return <ExperienceSection data={data} setData={setData} />;
		}
	};

	return (
		<>
			<h1>Mini-resume maker</h1>
			<div className="resume-sections">
				{renderCurrentContent(activeContent)}
			</div>
			<div className="buttons-container">{buttonsList}</div>
		</>
	);
}

export default App;
