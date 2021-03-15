// React
import React from 'react';
import { Route, Switch, withRouter } from 'react-router-dom';
// Components
import RegisterForm from '../account/forms/RegisterForm';
import LoginForm from '../account/forms/LoginForm';
import Alert from '../utils/Alert/Alert';

function UnauthorizedRoutes() {
	return (
		<section className="unauthorizedRoutes">
			<Alert />
			<Switch>
				<Route exact path="/account/register" component={RegisterForm} />
				<Route exact path="/account/login" component={LoginForm} />
			</Switch>
		</section>
	);
}

export default withRouter(UnauthorizedRoutes);
