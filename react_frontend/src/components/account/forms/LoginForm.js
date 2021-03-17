// React
import React from 'react';
import { Redirect } from 'react-router-dom';
// Redux
import { connect } from 'react-redux';
import { Login } from '../../../redux/actions/auth';
import PropTypes from 'prop-types';
// MaterialUI
import { Grid, TextField, Button } from '@material-ui/core';
// Components
import useForms, { FormContainer } from '../../../hooks/useForms';
import RegisterReroute from './misc/RegisterReroute';

const initialState = {
	Username: '',
	Password: '',
};

function LoginForm({ Login, isAuthenticated }) {
	const { formData, handleInputChange } = useForms(initialState);

	const { Username, Password } = formData;

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
				<Button
					color="primary"
					onClick={(e) => {
						e.preventDefault();
						Login({ Username, Password });
					}}
					variant="contained"
				>
					Login
				</Button>
			</FormContainer>
			<RegisterReroute />
		</Grid>
	);
}

Login.propTypes = {
	Login: PropTypes.func.isRequired,
	isAuthenticated: PropTypes.bool,
};

const mapStateToProps = (state) => ({
	isAuthenticated: state.auth.isAuthenticated,
});

export default connect(mapStateToProps, { Login })(LoginForm);
