// React
import React, { useState } from 'react';
// Material-UI
import Menu from '@material-ui/core/Menu';
import { makeStyles } from '@material-ui/core/styles';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';
// Menu Buttons
import LoginButton from './LoginButton';
import RegisterButton from './RegisterButton';
import { Link } from 'react-router-dom';

const centerStyles = makeStyles((theme) => ({
	root: {
		display: 'flex',
		flexDirection: 'column',
		alignItems: 'center',
		'& > *': {
			margin: theme.spacing(1),
		},
	},
}));

function UnauthorizedMenu() {
	const classes = centerStyles();
	const [anchorEl, setAnchorEl] = useState(null);

	const handleClick = (event) => {
		// console.log(event.currentTarget);
		setAnchorEl(event.currentTarget);
	};

	const handleClose = () => {
		setAnchorEl(null);
	};

	return (
		<>
			<IconButton
				edge="start"
				className={classes.menuButton}
				color="inherit"
				aria-label="menu"
				onClick={handleClick}
			>
				<MenuIcon />
			</IconButton>
			<Menu
				id="navbar-menu"
				anchorEl={anchorEl}
				keepMounted
				open={Boolean(anchorEl)}
				onClose={handleClose}
			>
				<Link to="/account/login">
					<LoginButton onClick={handleClose} />
				</Link>
				<Link to="/account/register">
					<RegisterButton onClick={handleClose} />
				</Link>
			</Menu>
		</>
	);
}

export default UnauthorizedMenu;
