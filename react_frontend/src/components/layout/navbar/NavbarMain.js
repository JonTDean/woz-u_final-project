import React from 'react';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import UnauthorizedMenu from './NavButtons/Unauthorized/UnauthorizedMenu';

export default function NavbarMain() {
	return (
		<AppBar position="static">
			<Toolbar variant="dense">
				<UnauthorizedMenu />
				<Typography variant="h6" color="inherit">
					Menu
				</Typography>
			</Toolbar>
		</AppBar>
	);
}
