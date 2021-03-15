// React
import React, { useState } from 'react';
// MaterialUI
import { Grid } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';

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

const useStyles = makeStyles((theme) => ({
	root: {
		display: 'flex',
		flexDirection: 'column',
		alignItems: 'center',
		marginTop: '3em',
		'& > *': {
			margin: theme.spacing(1),
		},
	},
}));

export function FormContainer({ children }) {
	const classes = useStyles();

	return (
		<form>
			<Grid className={classes.root}>{children}</Grid>
		</form>
	);
}
