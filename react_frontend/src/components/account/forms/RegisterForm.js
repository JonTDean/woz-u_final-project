// React
import React from 'react';
import useForms, { FormContainer } from '../../../hooks/useForms';
import { Redirect } from 'react-router-dom';
// Redux
import { connect } from 'react-redux';
import { setAlert } from '../../../redux/actions/alert';
import { Register } from '../../../redux/actions/auth';
import PropTypes from 'prop-types';
// MaterialUI
import { Grid, TextField, Button } from '@material-ui/core';
// Utils
// import Register from '../../utils/API/Users/Register';
// Components
import LoginReroute from './misc/LoginReroute';

const initialState = {
	Username: '',
	Password: '',
	PasswordConfirm: '',
};

// Registration form with Material Design
function RegisterForm({ setAlert, Register, isAuthenticated }) {
	const { formData, handleInputChange } = useForms(initialState);

	const { Username, Password, PasswordConfirm } = formData;

	if (isAuthenticated) {
		return <Redirect exact path to="/" />;
	}

	return (
		<Grid container direction="column" justify="center" alignItems="center">
			<FormContainer>
				<TextField
					variant="outlined"
					label="Username"
					name="Username"
					value={Username}
					onChange={handleInputChange}
				/>
				<TextField
					variant="outlined"
					label="Password"
					name="Password"
					value={Password}
					onChange={handleInputChange}
				/>
				<TextField
					variant="outlined"
					label="Password Confirmation"
					name="PasswordConfirm"
					value={PasswordConfirm}
					onChange={handleInputChange}
				/>
				<Button
					color="primary"
					onClick={(e) => {
						if (handleSubmit(e, setAlert, Password, PasswordConfirm)) {
							Register({ Username, Password });
						}
					}}
					variant="contained"
				>
					Register
				</Button>
			</FormContainer>
			<LoginReroute />
		</Grid>
	);
}

function handleSubmit(e, alert, Password, PasswordConfirm) {
	e.preventDefault();
	if (Password !== PasswordConfirm) {
		alert('Passwords do not match!', 'error');
		return false;
	} else {
		return true;
	}
}

Register.propTypes = {
	setAlert: PropTypes.func.isRequired,
	Register: PropTypes.func.isRequired,
	isAuthenticated: PropTypes.bool,
};

const mapStateToProps = (state) => ({
	isAuthenticated: state.auth.isAuthenticated,
});

export default connect(mapStateToProps, { setAlert, Register })(RegisterForm);
