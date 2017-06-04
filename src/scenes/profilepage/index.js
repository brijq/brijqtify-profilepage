/**
 * Created by brijq on 26/5/17.
 */
import React from 'react'
import ReactGA from 'react-ga';
import ProfileBlock from './components/profileblock'
import FormBlock from './components/formblock'



class profilePage extends React.Component{
  constructor() {
    super();
    this.state = {
      someData: null,
    };

  // Add your tracking ID created from https://analytics.google.com/analytics/web/#home/
  ReactGA.initialize('UA-00000000-0');
  // This just needs to be called once since we have no routes in this case.
  //ReactGA.pageview(window.location.pathname);

  ReactGA.set({ page: window.location.pathname + window.location.search });
  ReactGA.pageview(window.location.pathname + window.location.search);
  }

  render(){
    return (
      <div>
        <ProfileBlock/>
        <FormBlock/>
      </div>
    )
  }
}
export default profilePage;