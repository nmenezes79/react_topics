import React from "react";
import { Container } from "react-bootstrap";

const Home = () => {
	return (
		<Container className="mt-5 text-center">
			<h1>Welcome to the Blood Donation Camp</h1>
			<p className="lead">
				Your donation can save lives. Join hands to make a difference!
			</p>
			<img
				src="https://cdn.pixabay.com/photo/2017/06/14/19/09/blood-2406010_960_720.png"
				alt="Blood Donation"
				className="img-fluid mt-3"
				style={{ maxWidth: "400px" }}
			/>
		</Container>
	);
};
export default Home;
