import React, { useState } from 'react';
import  axios  from '../../axios';

export default function Register(props) {

	const [username, setUserame] = useState('')
	const [email, setEmail] = useState('')
	const [password, setPassword] = useState('')

	async function registerUser(event) {
		event.preventDefault();

		const response = await axios.post('/users/register', {
				username,
				email,
				password
		})

		if (response.status === 200) {
      props.setOpenForm('login');
		}
	}

	return (
		<div>
			<form onSubmit={registerUser}>
			<h1>Register</h1>
      <input
					value={username}
					onChange={(e) => setUserame(e.target.value)}
					type="text"
					placeholder="Username"
				/>
				<br />
				<input
					value={email}
					onChange={(e) => setEmail(e.target.value)}
					type="email"
					placeholder="Email"
				/>
				<br />
				<input
					value={password}
					onChange={(e) => setPassword(e.target.value)}
					type="password"
					placeholder="Password"
				/>
				<br />
				<input type="submit" value="Register" />
			</form>
		</div>
	)
}
