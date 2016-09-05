import React from 'react';
import { render } from 'react-dom';
import {Provider} from 'react-redux'
import {Router, Route, IndexRoute, browserHistory} from 'react-router';
import Layout from './components/Layout'
import ContactPage from './components/ContactPage'
import ContactList from './components/ContactList'
import store from './store'

render(
  <Provider store ={store}>
  <Router history ={browserHistory}>
   <Route path = '/' component = {Layout}>
   <Route path = '/contactpage' component = {ContactPage}/>
   <Route path = '/contactlist' component = {ContactList}/>
   </Route>
   </Router>
   </Provider>,
  document.getElementById('root')
);
