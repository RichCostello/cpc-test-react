import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import {Router} from 'react-router';
import {Route} from 'react-router';
import {browserHistory} from 'react-router';
import {Link} from 'react-router';
import {IndexRoute} from 'react-router';
import HomePageItem from './components/Nav/HomePageItem.jsx';
import FilmBase from './components/Clients/ClientBase.jsx';
import Film from './components/Clients/Client.jsx';
import AdminBase from './components/Admins/AdminBase.jsx';


ReactDOM.render(
    <Router history={browserHistory}>
        <Route path="/" component={App}>
            <IndexRoute component={HomePageItem}></IndexRoute>
            <Route path="/client" component={FilmBase}>
            <Route path="/client/:id" component={Film}></Route>
        </Route>
        <Route path="/admin" component={AdminBase}></Route>
        </Route>
    </Router>,
  document.getElementById('root')
);
