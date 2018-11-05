import React from 'react';
import ReactDOM from 'react-dom';
import {BrowserRouter as Router , Route, Switch, Link} from 'react-router-dom'
import profilePage from './scenes/profilepage'
import privacyPage from './scenes/privacypage'
import projectsPage from './scenes/projectspage'
import NotFound from './scenes/404page';
import './styles/bootstrap.css'
import './styles/oneui.css'


ReactDOM.render((
    <Router>
      <div>
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
