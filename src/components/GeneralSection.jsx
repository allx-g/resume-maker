import { useState } from "react";

function GeneralSection({ data, general, setData }) {
	const [editMode, setEditMode] = useState(false);
	const [name, setName] = useState(general.name);
	const [phone, setPhone] = useState(general.phone);
	const [email, setEmail] = useState(general.email);

	const handleClick = (status) => () => {
		setEditMode(status);
		if (!status) {
			const newGeneral = {
				name,
				phone,
				email,
			};
			const newData = {
				...data,
				general: newGeneral,
			};
			setData(newData);
		}
	};

	const handleNameChange = (event) => {
		const newName = event.target.value;
		setName(newName);
	};

	const handlePhoneChange = (event) => {
		const newPhone = event.target.value;
		setPhone(newPhone);
	};

	const handleEmailChange = (event) => {
		const newEmail = event.target.value;
		setEmail(newEmail);
	};

	function renderGeneralInfo() {
		if (editMode) {
			return (
				<div className="info-card edit">
					<p>
						<strong>Enter general information</strong>
					</p>
					<ul className="inputs-list">
						<li>
							<label htmlFor="name">Full name</label>
							<input
								type="text"
								value={name}
								onChange={handleNameChange}
								placeholder="Full name"
								id="name"
							/>
						</li>
						<li>
							<label htmlFor="phone">Phone number</label>
							<input
								type="text"
								value={phone}
								onChange={handlePhoneChange}
								placeholder="Phone number"
								id="phone"
							/>
						</li>
						<li>
							<label htmlFor="email">E-mail</label>
							<input
								type="text"
								value={email}
								onChange={handleEmailChange}
								placeholder="Email address"
								id="email"
							/>
						</li>
						<button
							className="action-type confirm-type"
							type="button"
							onClick={handleClick(false)}
						>
							<img
								className="icon-image"
								src="../src/assets/check-1.png"
								alt="check icon"
							/>
						</button>
					</ul>
				</div>
			);
		} else {
			return (
				<div className="info-card view">
					<h3>{name}</h3>
					<p>{phone}</p>
					<p>{email}</p>
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
	return (
		<section className="general">
			<h2>General</h2>
			{renderGeneralInfo()}
		</section>
	);
}

export default GeneralSection;
