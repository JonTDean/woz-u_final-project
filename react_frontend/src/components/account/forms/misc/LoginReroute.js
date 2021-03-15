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

export default function LoginReroute() {
	const classes = centerStyles();

	return (
		<div className={classes.root}>
			<p>Have an account?</p>
			<p>
				Login <Link to="/account/login">here</Link>
			</p>
		</div>
	);
}
