// React
import React, { useState } from 'react';
// Redux
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
// Material
import { makeStyles } from '@material-ui/core/styles';
import IconButton from '@material-ui/core/IconButton';
import Menu from '@material-ui/core/Menu';
import MenuIcon from '@material-ui/icons/Menu';
// Component
import LogoutButton from './LogoutButton';

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

export const AuthorizedMenu = (props) => {
	const classes = centerStyles();
	const [anchorEl, setAnchorEl] = useState(null);

	const handleClick = (event) => {
		console.log(event.currentTarget);
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
				<LogoutButton onClick={handleClose} />
			</Menu>
		</>
	);
};

AuthorizedMenu.propTypes = {
	props: PropTypes,
};

const mapStateToProps = (state) => ({});
export default connect(mapStateToProps)(AuthorizedMenu);
