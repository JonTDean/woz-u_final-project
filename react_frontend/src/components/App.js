// React
import { useEffect } from 'react';
import { Route } from 'react-router-dom';
// Redux
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import store from '../redux/store';
// style
import '../style/App.css';
//Components
import NavbarMain from './layout/navbar/NavbarMain';
import Landing from './layout/Landing';
import UnauthorizedRoutes from './routes/UnauthorizedRoutes';
import AuthorizedRoutes from './routes/AuthorizedRoutes';
import Alert from './utils/Alert/Alert';
import setAuthToken from './utils/authToken';
import { LoadUser } from '../redux/actions/auth';

if (localStorage.token) {
	setAuthToken(localStorage.token);
}

function App({ isAuthenticated }) {
	useEffect(() => {
		store.dispatch(LoadUser());
	}, []);
	
	return (
		<>
			<NavbarMain />
			<Route exact path="/" component={Landing} />
			{isAuthenticated ? <AuthorizedRoutes /> : <UnauthorizedRoutes />}
			<Alert />
		</>
	);
}

App.propTypes = {
	isAuthenticated: PropTypes.bool,
};

const mapStateToProps = (state) => ({
	isAuthenticated: state.auth.isAuthenticated,
});

export default connect(mapStateToProps, null)(App);
