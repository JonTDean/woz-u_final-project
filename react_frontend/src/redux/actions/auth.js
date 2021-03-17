import axios from 'axios';
// Redux
import {
	LOGIN_SUCCESS,
	LOGIN_FAIL,
	REGISTER_SUCCESS,
	REGISTER_FAIL,
	USER_LOADED,
	AUTH_ERROR,
	LOGOUT,
} from './types';
import { dotNetAPI } from '../../components/utils/API/APIHandler';
// Components
import { setAlert } from '../actions/alert';
import setAuthToken from '../../components/utils/authToken';

// Load User
export const LoadUser = () => async (dispatch) => {
	if (localStorage.token) {
		setAuthToken(localStorage.token);
	}

	try {
		const currentUser = JSON.parse(localStorage.getItem('user'));

		console.log(currentUser);

		dispatch({
			type: USER_LOADED,
			payload: currentUser,
		});
	} catch (err) {
		dispatch({
			type: AUTH_ERROR,
		});
	}
};

// Registering the User
export const Register = ({ Username, Password }) => async (dispatch) => {
	try {
		const apiURL = `${dotNetAPI}account/register`;

		const config = {
			headers: {
				'Content-Type': 'application/json',
			},
		};

		const body = JSON.stringify({
			Username,
			Password,
		});

		const resp = await axios.post(apiURL, body, config);

		dispatch({
			type: REGISTER_SUCCESS,
			payload: resp.data,
		});
		dispatch(setAlert('Successfully created an Account!', 'success'));
	} catch (err) {
		const errors = err.response.data.errors;

		if (errors) {
			errors.forEach((err) => dispatch(setAlert(err.msg, 'error')));
		}

		dispatch({
			type: REGISTER_FAIL,
		});
		console.log(err.response.data);
	}
};

// Registering the User
export const Login = ({ Username, Password }) => async (dispatch) => {
	try {
		const apiURL = `${dotNetAPI}account/login`;

		const config = {
			headers: {
				'Content-Type': 'application/json',
			},
		};

		const body = JSON.stringify({
			Username,
			Password,
		});

		const resp = await axios.post(apiURL, body, config);

		dispatch({
			type: LOGIN_SUCCESS,
			payload: resp.data,
		});

		console.log('SUCCESSFULLY LOGGED IN', resp.data);

		dispatch(setAlert('Successfully logged in!', 'success'));
		// console.log('Data is: ', resp.data);
	} catch (err) {
		const errors = err.response.data.errors;

		if (errors) {
			errors.forEach((err) => dispatch(setAlert(err.msg, 'error')));
		}

		dispatch({
			type: LOGIN_FAIL,
		});
		console.log(err.response.data);
	}
};

// Logout User
export const Logout = () => (dispatch) => {
	dispatch({ type: LOGOUT });
};
