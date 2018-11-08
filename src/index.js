import React from 'react';
import ReactDOM from 'react-dom';
import Favicon from 'react-favicon';
import {BrowserRouter as Router , Route, Switch, Link} from 'react-router-dom'
import profilePage from './scenes/profilepage'
import privacyPage from './scenes/privacypage'
import projectsPage from './scenes/projectspage'
import NotFound from './scenes/404page';
import './styles/bootstrap.css'
import './styles/oneui.css'
import profilePic from './images/favicon.png'


ReactDOM.render((
    <Router>
      <div>
        <Favicon url={profilePic}/>
        <Switch>
          <Route exact path="/" component={profilePage}/>
          <Route exact path="/privacy" component={privacyPage}/>
          <Route exact path="/projects" component={projectsPage}/>
          <Route component={NotFound} />
        </Switch>
      </div>
    </Router>
  ), document.getElementById('root')
);
