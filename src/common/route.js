import React from 'react';
import {Route, IndexRoute} from 'react-router';
import App from './component/appComponent';
import Home from './component/homeComponent';
import Contact from './component/contactComponent';

const routes =
  <Route path="/" component={App}>
    <IndexRoute component={Home}/>
    <Route path="/contact" component={Contact}/>
  </Route>;

export default routes;