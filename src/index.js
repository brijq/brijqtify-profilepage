import React from 'react';
import ReactDOM from 'react-dom';
import Favicon from 'react-favicon';
import {BrowserRouter as Router , Route, Switch} from 'react-router-dom'
import profilePage from './scenes/profilepage'
import privacyPage from './scenes/privacypage'
import projectsPage from './scenes/projectspage'
import NotFound from './scenes/404page';
import './styles/bootstrap.css'
import './styles/oneui.css'
import profilePic from './images/favicon.png'
import ReactGA from 'react-ga';

// Add your tracking ID created from https://analytics.google.com/analytics/web/#home/
ReactGA.initialize('UA-00000000-1');

ReactGA.pageview(window.location.pathname + window.location.search);

// For my projects page
ReactGA.pageview('/projects');

// For my privacy page
ReactGA.pageview('/privacy');

// For my home page
ReactGA.pageview('/');

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
