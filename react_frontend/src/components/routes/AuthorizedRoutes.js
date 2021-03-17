import React from 'react';
import { Route, Switch, withRouter } from 'react-router-dom';

function AuthorizedRoutes() {
	// For whenever the user is authorized (Read as Logged in)
	// These routes will be the only ones available to them.
	return (
		<section className="authorizedRoutes">
			<Switch>
				<Route exact path="/account/dashboard" />
			</Switch>
		</section>
	);
}

export default withRouter(AuthorizedRoutes);
