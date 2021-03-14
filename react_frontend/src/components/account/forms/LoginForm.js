// React
import React, { useEffect } from 'react';
import useForms, { FormContainer } from '../../../hooks/useForms';
// MaterialUI
import { Grid, TextField, Button } from '@material-ui/core';
// Utils
import Login from '../../utils/API/Users/Login';

const initialState = {
	username: '',
	password: '',
};

function LoginForm() {
	const { formData, setFormData, handleInputChange } = useForms(initialState);

	const { username, password } = formData;

	const handleSubmit = (e) => {
		e.preventDefault();
		// console.log('Login Success, User Data ---');
		// console.log(`Form Data: `, formData);
		const userAccount = {
			username,
			password,
		};

		Login(userAccount);
	};

	return (
		<Grid container direction="column" justify="center" alignItems="center">
			<FormContainer>
				<TextField
					variant="outlined"
					label="Username"
					name="username"
					value={username}
					onChange={handleInputChange}
				/>
				<TextField
					variant="outlined"
					label="Password"
					name="password"
					value={password}
					onChange={handleInputChange}
				/>
				<Button color="inherit" onClick={handleSubmit}>
					Login
				</Button>
			</FormContainer>
		</Grid>
	);
}

export default LoginForm;
