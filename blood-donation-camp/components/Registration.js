import React, { useState } from "react";
import { Container, Form, Button, Alert } from "react-bootstrap";

const Registration = () => {
	const [formData, setFormData] = useState({
		name: "",
		age: "",
		city: "",
		bloodGroup: "",
	});
	const [submitted, setSubmitted] = useState(false);

	const handleChange = (e) => {
		setFormData({ ...formData, [e.target.name]: e.target.value });
	};

	const handleSubmit = (e) => {
		e.preventDefault();
		setSubmitted(true);
		console.log("Registered Donor:", formData);
	};

	return (
		<Container className="mt-5">
			<h2>Register for Blood Donation</h2>
			{submitted && <Alert variant="success">Thank you for registering!</Alert>}
			<Form onSubmit={handleSubmit}>
				<Form.Group className="mb-3">
					<Form.Label>Full Name</Form.Label>
					<Form.Control
						type="text"
						name="name"
						placeholder="Enter your name"
						value={formData.name}
						onChange={handleChange}
						required />
				</Form.Group>

				<Form.Group className="mb-3">
					<Form.Label>Age</Form.Label>
					<Form.Control
						type="number"
						name="age"
						placeholder="Enter your age"
						value={formData.age}
						onChange={handleChange}
						required />
				</Form.Group>

				<Form.Group className="mb-3">
					<Form.Label>City</Form.Label>
					<Form.Control
						type="text"
						name="city"
						placeholder="Enter your city"
						value={formData.city}
						onChange={handleChange}
						required />
				</Form.Group>

				<Form.Group className="mb-3">
					<Form.Label>Blood Group</Form.Label>
					<Form.Select
						name="bloodGroup"
						value={formData.bloodGroup}
						onChange={handleChange}
						required>
						<option value="">Select</option>
						<option>A+</option>
						<option>A-</option>
						<option>B+</option>
						<option>B-</option>
						<option>O+</option>
						<option>O-</option>
						<option>AB+</option>
						<option>AB-</option>
					</Form.Select>
				</Form.Group>

				<Button variant="danger" type="submit">Register</Button>
			</Form>
		</Container>
	);
};
export default Registration;
