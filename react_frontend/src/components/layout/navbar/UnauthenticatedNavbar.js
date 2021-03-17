// React
import React from 'react';
// MaterialUI
import { makeStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';
// Components
import UnauthorizedMenu from './NavButtons/Unauthorized/UnauthorizedMenu';

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

function UnauthenticatedNavbar() {
	const classes = useStyles();

	return (
		<div className={classes.menuType}>
			<div className={classes.navbarLeft}>
				<UnauthorizedMenu />
				<Typography variant="h6" color="inherit">
					Menu
				</Typography>
			</div>
		</div>
	);
}

export default UnauthenticatedNavbar;
