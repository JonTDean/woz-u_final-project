// React
import React from 'react';
// Redux
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
// MaterialUI
import { makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
// Components
import AuthenticatedNavbar from './AuthenticatedNavbar';
import UnauthenticatedNavbar from './UnauthenticatedNavbar';

const useStyles = makeStyles((theme) => ({
	navbarMenu: {
		justifyContent: 'center',
	},
	menuType: {
		width: '100%',
		display: 'inline',
	},
	navbarLeft: {
		float: 'left',
		display: 'flex',
		flexDirection: 'row',
		justifyContent: 'center',
		alignItems: 'center',
		padding: ' .4em',
	},
	navbarRight: {
		float: 'right',
		padding: '1em',
	},
}));

function NavbarMain({ isAuthenticated, user }) {
	const classes = useStyles();

	// console.log('Authenticate: ', isAuthenticated);
	// console.log('Username: ', user);
	if (user !== null && user !== undefined) {
		user = user[0].toUpperCase() + user.substring(1);
	}

	return (
		<AppBar position="static">
			<Toolbar variant="dense" className={classes.navbarMenu}>
				{isAuthenticated ? (
					<AuthenticatedNavbar username={user} />
				) : (
					<UnauthenticatedNavbar />
				)}
			</Toolbar>
		</AppBar>
	);
}

NavbarMain.propTypes = {
	isAuthenticated: PropTypes.bool,
	user: PropTypes.string,
};

const mapStateToProps = (state) => ({
	isAuthenticated: state.auth.isAuthenticated,
	user: state.auth.user,
});

export default connect(mapStateToProps, null)(NavbarMain);
