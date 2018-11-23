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
