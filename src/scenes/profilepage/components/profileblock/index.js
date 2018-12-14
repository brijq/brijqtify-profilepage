/**
 * Created by brijq on 24/5/17.
 */
import React from 'react'
import profilePic from '../../../../images/profilePic.png'
import namePic from '../../../../images/name.png'
import messagePic from '../../../../images/message.png'

class profileBlock extends React.Component{
  render(){
    return(
      <div className="block ">
        <div className="bg-image bg-city-dark">
          <div className="block-content bg-primary-op text-center overflow-hidden">
            <div className="push-30-t push animated fadeInDown">
              <img className="img-avatar img-avatar256 img-avatar-thumb" src={profilePic} alt=''/>
            </div>
            <div className="push-30 animated fadeInUp">
              <h1 className="h2 font-w600 text-white push-5"><img height="130px" src={namePic} alt=''/></h1>
              <h2 className="h3 text-white-op">Full Stack Developer</h2>
            </div>
          </div>
        </div>
          <div className="block-content text-center">
          <img className="photomessage" src={messagePic} alt=''/>
          </div>
      </div>

    )
  }
}

export default profileBlock;
