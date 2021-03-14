// React
import React from 'react';
import { Route, Switch, withRouter } from 'react-router-dom';

// Components
import RegisterForm from '../account/forms/RegisterForm';
import LoginForm from '../account/forms/LoginForm';

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
