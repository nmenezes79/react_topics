import React, { useState, useEffect } from "react";
import axios from "axios";

const RandomUserData = () => {
	const [user, setUser] = useState(null);
	const [loading, setLoading] = useState(true);
	const [error, setError] = useState(null);

	// Function to fetch random user data
	const fetchData = async () => {
		setLoading(true);
		setError(null);
		try {
			const response = await axios.get("https://randomuser.me/api/");
			setUser(response.data.results[0]); // API returns an array inside results
			setLoading(false);
		} catch (err) {
			setError("Failed to fetch user data. Please try again.");
			setLoading(false);
		}
	};

	// Fetch data on component mount
	useEffect(() => {
		fetchData();
	}, []);

	return (
		<div style={styles.container}>
			<h1>Random User Data</h1>

			{loading && <p>Loading...</p>}
			{error && <p style={{ color: "red" }}>{error}</p>}

			{!loading && !error && user && (
				<div style={styles.card}>
					<img
						src={user.picture.large}
						alt="User"
						style={styles.image}
					/>
					<h2>
						{user.name.title} {user.name.first} {user.name.last}
					</h2>
					<p><strong>Email:</strong> {user.email}</p>
					<p><strong>Gender:</strong> {user.gender}</p>
					<p>
						<strong>Location:</strong> {user.location.city}, {user.location.country}
					</p>
					<button onClick={fetchData} style={styles.button}>
						Fetch New User
					</button>
				</div>
			)}
		</div>
	);
};

// Inline styles
const styles = {
	container: {
		fontFamily: "Arial, sans-serif",
		textAlign: "center",
		padding: "20px",
	},
	card: {
		margin: "20px auto",
		padding: "20px",
		border: "1px solid #ddd",
		borderRadius: "10px",
		maxWidth: "400px",
		backgroundColor: "#f9f9f9",
		boxShadow: "0px 4px 6px rgba(0,0,0,0.1)",
	},
	image: {
		borderRadius: "50%",
		marginBottom: "15px",
	},
	button: {
		padding: "10px 20px",
		marginTop: "15px",
		border: "none",
		borderRadius: "5px",
		backgroundColor: "#007BFF",
		color: "#fff",
		cursor: "pointer",
	},
};

export default RandomUserData;
