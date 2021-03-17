// React
import React, { useState } from 'react';
// Redux
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { Logout } from '../../../../../redux/actions/auth';
// Material
import { makeStyles } from '@material-ui/core/styles';
import IconButton from '@material-ui/core/IconButton';
import Menu from '@material-ui/core/Menu';
import MenuIcon from '@material-ui/icons/Menu';
import { MenuItem } from '@material-ui/core';
// Component
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

function AuthorizedMenu({ Logout }) {
	const classes = centerStyles();
	const [anchorEl, setAnchorEl] = useState(null);

	const handleClick = (event) => {
		// console.log(event.currentTarget);
		setAnchorEl(event.currentTarget);
	};

	const handleClose = () => {
		setAnchorEl(null);
	};
	const handleLogout = () => {
		Logout();
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
			<Link to="/">
				<Menu
					id="navbar-menu"
					anchorEl={anchorEl}
					keepMounted
					open={Boolean(anchorEl)}
					onClose={handleClose}
				>
					<MenuItem onClick={handleLogout}>Logout</MenuItem>
				</Menu>
			</Link>
		</>
	);
}

AuthorizedMenu.propTypes = {
	Logout: PropTypes.func.isRequired,
};

export default connect(null, { Logout })(AuthorizedMenu);
