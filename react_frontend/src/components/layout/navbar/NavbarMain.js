// React
import React from 'react';
// Redux
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
// MaterialUI
import { makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
// Components
import UnauthorizedMenu from './NavButtons/Unauthorized/UnauthorizedMenu';
import AuthorizedMenu from './NavButtons/Authorized/AuthorizedMenu';

const useStyles = makeStyles((theme) => ({
	root: {
		// display: 'flex',
		// flexDirection: 'column',
		// alignItems: 'center',
		// '& > *': {
		// 	margin: theme.spacing(1),
		// },
	},
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
function NavbarMain({ isAuthenticated }) {
	const classes = useStyles();

	return (
		<AppBar position="static">
			<Toolbar variant="dense" className={classes.navbarMenu}>
				<br />
				{isAuthenticated ? (
					<div className={classes.menuType}>
						<div className={classes.navbarLeft}>
							<AuthorizedMenu />
							<Typography variant="h6" color="inherit">
								Menu
							</Typography>
						</div>

						<div className={classes.navbarRight}>
							<Typography variant="h6" color="inherit">
								Welcome User
							</Typography>
						</div>
					</div>
				) : (
					<div className={classes.menuType}>
						<UnauthorizedMenu />
						<Typography variant="h6" color="inherit">
							Menu
						</Typography>
					</div>
				)}
			</Toolbar>
		</AppBar>
	);
}

NavbarMain.propTypes = {
	isAuthenticated: PropTypes.bool,
};

const mapStateToProps = (state) => ({
	// user: state.user,
	isAuthenticated: state.auth.isAuthenticated,
});

export default connect(mapStateToProps, null)(NavbarMain);
