// React
import React, { useState } from 'react';
// MaterialUI
import { Grid } from '@material-ui/core';
import { centerStyle } from '../style/makeStyles/_index';

export default function useForms(initialState) {
	const [formData, setFormData] = useState(initialState);

	const handleInputChange = (e) => {
		const { name, value } = e.target;

		setFormData({
			...formData,
			[name]: value,
		});
	};

	return {
		formData,
		setFormData,
		handleInputChange,
	};
}

export function FormContainer({ children }) {
	const classes = centerStyle();

	return (
		<form>
			<Grid className={classes.root}>{children}</Grid>
		</form>
	);
}
