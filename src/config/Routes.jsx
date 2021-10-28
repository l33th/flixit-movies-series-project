import React from 'react';
// imports from react-router-dom
import { Route, Switch } from 'react-router-dom';
// import components
import Home from '../pages/Home';
import Catalog from '../pages/Catalog';
import Detail from '../pages/Detail';

const Routes = () => {
	return (
		<Switch>
			<Route path='/:category/search/:keyword' component={Catalog} />
			<Route path='/:category/:id' component={Detail} />
			<Route path='/:category' component={Catalog} />
			<Route path='/' component={Home} />
		</Switch>
	);
};

export default Routes;