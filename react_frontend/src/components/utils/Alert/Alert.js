// React
import React from 'react';
// Redux
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import AlertComponent from './AlertComponent';

const Alert = ({ alerts }) => {
	// console.log(alerts);
	return (
		<>
			{alerts !== null &&
				alerts.length > 0 &&
				alerts.map((alert) => {
					return (
						<div key={`key_${alert.id}`}>
							<AlertComponent alert={alert} />
						</div>
					);
				})}
		</>
	);
};
Alert.propTypes = {
	alerts: PropTypes.array.isRequired,
};

const mapStateToProps = (state) => ({
	alerts: state.alert,
});

export default connect(mapStateToProps)(Alert);
