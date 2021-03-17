import React from 'react';
import { MenuItem } from '@material-ui/core';

function RegisterButton({ onClick }) {
	return (
		<>
			<MenuItem onClick={onClick}>Register</MenuItem>
		</>
	);
}

export default RegisterButton;
