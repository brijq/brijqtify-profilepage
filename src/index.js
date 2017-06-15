import React from 'react';
import ReactDOM from 'react-dom';
import {HashRouter as Router , Route} from 'react-router-dom'
import profilePage from './scenes/profilepage'
import './styles/bootstrap.css'
import './styles/oneui.css'


ReactDOM.render((
    <Router>
      <div>
        <Route path="/" component={profilePage}/>
      </div>
    </Router>
  ), document.getElementById('root')
);
