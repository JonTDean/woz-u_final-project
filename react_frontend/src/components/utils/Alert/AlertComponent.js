// React
import React from 'react';
// MaterialUI
import { makeStyles } from '@material-ui/core/styles';

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

function AlertComponent({ alert: { alertType, msg, id } }) {
	const classes = useStyles();

	console.log('Alert Type is: ', alertType);
	console.log('ID is: ', id);
	console.log('Message is: ', msg);

	return (
		<div className={classes.root} key={id}>
			<p id={alertType}>ID: {`${alertType}`}</p>
			<p id={msg}>Message: {`${msg}`}</p>
		</div>
	);
}

export default AlertComponent;
