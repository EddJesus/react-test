import React from 'react'
import { BrowserRouter, Route } from 'react-router-dom';

import Main from "./pages/main/index";

const Routes = () => {
	return (
		<BrowserRouter>
			<Route component={Main} path="/" exact />
            <Route component={Main} path="/callback" exact />
		</BrowserRouter>
	)
}

export default Routes;
