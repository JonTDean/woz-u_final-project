// React
import React from 'react';
import { Route, Switch, withRouter } from 'react-router-dom';
// Components
import RegisterForm from '../account/forms/RegisterForm';
import LoginForm from '../account/forms/LoginForm';

// For whenever the user is not authorized (Read as Logged in)
// These routes will be the only ones available to them.
function UnauthorizedRoutes() {
	return (
		<section className="unauthorizedRoutes">
			<Switch>
				<Route exact path="/account/register" component={RegisterForm} />
				<Route exact path="/account/login" component={LoginForm} />
			</Switch>
		</section>
	);
}

export default withRouter(UnauthorizedRoutes);
