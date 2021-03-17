// React
import React from 'react';
// Redux
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
// MaterialUI
import { Grid, Paper } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';

const centerStyles = makeStyles((theme) => ({
	root: {
		display: 'flex',
		flexDirection: 'column',
		alignItems: 'center',
		'& > *': {
			margin: theme.spacing(1),
		},
		// marginTop: '2em',
		margin: '6em',
		minHeight: '20em',
	},
	gridRoot: {
		alignItems: 'center',
		padding: '6em',
	},
}));

function Landing({ isAuthenticated, user }) {
	const classes = centerStyles();

	if (isAuthenticated) {
		console.log('Props - ', isAuthenticated);
		console.log('Username - ', user);
	}

	return (
		<Paper className={classes.root}>
			<Grid className={classes.gridRoot}>
				{isAuthenticated ? (
					<h1>You are Logged In, {user}</h1>
				) : (
					<h1>You are not Logged In. Please Log In</h1>
				)}
			</Grid>
		</Paper>
	);
}

Landing.propTypes = {
	isAuthenticated: PropTypes.bool,
	user: PropTypes.string,
};

const mapStateToProps = (state) => ({
	isAuthenticated: state.auth.isAuthenticated,
	user: state.auth.user,
});

export default connect(mapStateToProps, null)(Landing);
