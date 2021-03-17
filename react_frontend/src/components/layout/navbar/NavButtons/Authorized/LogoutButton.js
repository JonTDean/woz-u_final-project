// React
import React from 'react';
// Redux
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { Logout } from '../../../../../redux/actions/auth';
// Material
import { MenuItem } from '@material-ui/core';
// Components

function LogoutButton({ Logout }) {
	const handleClick = () => {
		Logout();
	};

	return (
		<>
			<MenuItem onClick={handleClick}>Logout</MenuItem>
		</>
	);
}

LogoutButton.propTypes = {
	Logout: PropTypes.func.isRequired,
};

export default connect(null, { Logout })(LogoutButton);
