import React from 'react';
import { MenuItem } from '@material-ui/core';
import { Link } from 'react-router-dom';

function LoginButton({ onClick }) {
	return (
		<Link to="/account/login">
			<MenuItem onClick={onClick} >Login</MenuItem>
		</Link>
	);
}

export default LoginButton;
