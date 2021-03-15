// React
import React from 'react';
import useForms, { FormContainer } from '../../../hooks/useForms';
// MaterialUI
import { Grid, TextField, Button } from '@material-ui/core';
// Utils
import Login from '../../utils/API/Users/Login';
// Components
import RegisterReroute from './misc/RegisterReroute';

const initialState = {
	username: '',
	password: '',
};

function LoginForm() {
	const { formData, setFormData, handleInputChange } = useForms(initialState);

	const { username, password } = formData;

	const handleSubmit = (e) => {
		e.preventDefault();
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
				<Button
					color="inherit"
					onClick={handleSubmit}
					variant="contained"
					color="primary"
				>
					Login
				</Button>
			</FormContainer>
			<RegisterReroute />
		</Grid>
	);
}

export default LoginForm;
