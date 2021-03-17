import React from 'react';
import { MenuItem } from '@material-ui/core';

function LoginButton({ onClick }) {
	return (
		<>
			<MenuItem onClick={onClick}>Login</MenuItem>
		</>
	);
}

export default LoginButton;
