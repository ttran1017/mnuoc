import React from "react";
import Navbar from "../Navbar/Navbar";
import "./Register.css";

export default function Register() {
	const handleSubmit = (e) => {
		e.preventDefault();
	};
	return (
		<div className="register">
			<Navbar loggedIn={false} />
			<section className="register__body">
				<h3 className="register__body__title">Enter Registration Details</h3>
				<form
					action=""
					className="register__body__form"
					onSubmit={handleSubmit}
				>
					<input
						className="register__body__form__input register__body__form__input--username"
						type="text"
						placeholder="Username"
					/>
					<input
						className="register__body__form__input register__body__form__input--password"
						type="password"
						name=""
						placeholder="Password"
					/>
					<input
						className="register__body__form__input register__body__form__input--passwordconfirm"
						type="password"
						name=""
						placeholder="Password Confirm"
					/>
					<input
						className="register__body__form__submit"
						type="submit"
						name=""
					/>
				</form>
			</section>
		</div>
	);
}
