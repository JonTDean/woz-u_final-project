import React from 'react';
import { MenuItem } from '@material-ui/core';
import { Link } from 'react-router-dom';

function RegisterButton({ onClick }) {
	return (
		<Link to="/account/register">
			<MenuItem onClick={onClick}>Register</MenuItem>
		</Link>
	);
}

export default RegisterButton;
