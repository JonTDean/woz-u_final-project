// React
import React from 'react';
import useForms, { FormContainer } from '../../../hooks/useForms';
// MaterialUI
import { Grid, TextField, Button } from '@material-ui/core';
// Utils
import Register from '../../utils/API/Users/Register';

const initialState = {
	username: '',
	password: '',
	passwordConfirm: '',
};

function RegisterForm() {
	const { formData, setFormData, handleInputChange } = useForms(initialState);

	const { username, password, passwordConfirm } = formData;

	const handleSubmit = (e) => {
		e.preventDefault();
		if (password !== passwordConfirm) {
			console.log('Passwords do not match');
		} else {
			// console.log('Login Success, User Data ---');
			// console.log(`Form Data: `, formData);
			const newAccount = {
				username,
				password,
			};

			Register(newAccount);
		}
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
				<TextField
					variant="outlined"
					label="Password Confirmation"
					name="passwordConfirm"
					value={passwordConfirm}
					onChange={handleInputChange}
				/>
				<Button color="inherit" onClick={handleSubmit}>
					Register
				</Button>
			</FormContainer>
		</Grid>
	);
}

export default RegisterForm;
