import React from 'react';
import { render } from 'react-dom';
import {Router, Route, IndexRoute, browserHistory} from 'react-router';
import Registration from './components/Registration'
import Main from './components/Main'
import SearchPage from './components/SearchPage'

render(
  <Router history ={browserHistory}>
  <Route path='/' component = {Main}>
   <Route path ='Registration' component ={Registration}/>
    <Route path ='searchpage' component ={SearchPage}/>
   </Route>
   </Router>,
  document.getElementById('root')
);
