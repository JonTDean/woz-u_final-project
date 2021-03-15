// React
import React from 'react';
import useForms, { FormContainer } from '../../../hooks/useForms';
// Redux
import { connect } from 'react-redux';
import { setAlert } from '../../../redux/actions/alert';
import PropTypes from 'prop-types';
// MaterialUI
import { Grid, TextField, Button } from '@material-ui/core';
// Utils
import Register from '../../utils/API/Users/Register';
// Components
import LoginReroute from './misc/LoginReroute';

const initialState = {
	username: '',
	password: '',
	passwordConfirm: '',
};

function RegisterForm({ setAlert }) {
	const { formData, setFormData, handleInputChange } = useForms(initialState);

	const { username, password, passwordConfirm } = formData;

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
				<Button
					color="inherit"
					onClick={(e) =>
						handleSubmit(e, setAlert, username, password, passwordConfirm)
					}
				>
					Register
				</Button>
			</FormContainer>
			<LoginReroute />
		</Grid>
	);
}

function handleSubmit(e, alert, username, password, passwordConfirm) {
	e.preventDefault();
	if (password !== passwordConfirm) {
		alert('Passwords do not match!', 'danger');
	} else {
		// console.log('Login Success, User Data ---');
		// console.log(`Form Data: `, formData);
		// const newAccount = {
		// 	username,
		// 	password,
		// };

		Register({ username, password });
	}
}

Register.propTypes = {
	setAlert: PropTypes.func.isRequired,
};

export default connect(null, { setAlert })(RegisterForm);
