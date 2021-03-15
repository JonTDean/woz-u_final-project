// React
import React from 'react';
import { Link } from 'react-router-dom';
// MaterialUI
import { makeStyles } from '@material-ui/core/styles';

const centerStyles = makeStyles((theme) => ({
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

export default function RegisterReroute() {
	const classes = centerStyles();

	return (
		<div className={classes.root}>
			<p>Want to create a new account?</p>
			<p>
				Register <Link to="/account/register">here</Link>
			</p>
		</div>
	);
}
