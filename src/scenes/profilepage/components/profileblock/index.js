/**
 * Created by brijq on 24/5/17.
 */
import React from 'react'
import profilePic from '../../../../images/IMG_0034.JPG'

class profileBlock extends React.Component{
  render(){
    return(
      <div className="block ">
        <div className="bg-image bg-city-dark">
          <div className="block-content bg-primary-op text-center overflow-hidden">
            <div className="push-30-t push animated fadeInDown">
              <img className="img-avatar img-avatar96 img-avatar-thumb" src={profilePic}/>
            </div>
            <div className="push-30 animated fadeInUp">
              <h1 className="h2 font-w600 text-white push-5">Brian Oh</h1>
              <h2 className="h3 text-white-op">Web Developer</h2>
            </div>
          </div>
        </div>
          <div className="block-content text-center">
            <h2 className="pull-5">Words About Me</h2>
            <div className="row items-push text-uppercase">
              <div className="col-xs-6 col-sm-3 fa fa-facebook-official">
                <div className="font-w700 text-gray-darker animated fadeInDown">React Js
                </div>
              </div>
              <div className="col-xs-6 col-sm-3 fa fa-google">
                <div className="font-w700 text-gray-darker animated fadeInDown">Google Cloud Platform
                </div>
              </div>
              <div className="col-xs-6 col-sm-3 fa fa-google">
                <div className="font-w700 text-gray-darker animated fadeInDown">Android
                </div>
              </div>
              <div className="col-xs-6 col-sm-3 fa fa-apple">
                <div className="font-w700 text-gray-darker animated fadeInDown">IOS
                </div>
              </div>
              <div className="col-xs-6 col-sm-3 fa fa-dashboard">
                <div className="font-w700 text-gray-darker animated fadeInDown">Internet Of Things
                </div>
              </div>
              <div className="col-xs-6 col-sm-3 fa fa-gamepad">
                <div className="font-w700 text-gray-darker animated fadeInDown">Raspberry pi
                </div>
              </div>
              <div className="col-xs-6 col-sm-3 fa fa-github">
                <div className="font-w700 text-gray-darker animated fadeInDown">GitHub
                </div>
              </div>
              <div className="col-xs-6 col-sm-3 fa fa-contao">
                <div className="font-w700 text-gray-darker animated fadeInDown">Docker
                </div>
              </div>
              <div className="col-xs-6 col-sm-3 fa fa-google">
                <div className="font-w700 text-gray-darker animated fadeInDown">GoLang
                </div>
              </div>
              <div className="col-xs-6 col-sm-3 fa fa-google-plus">
                <div className="font-w700 text-gray-darker animated fadeInDown">Kubernates
                </div>
              </div>
              <div className="col-xs-6 col-sm-3 fa fa-database">
                <div className="font-w700 text-gray-darker animated fadeInDown">Database
                </div>
              </div>
              <div className="col-xs-6 col-sm-3 fa fa-bullseye">
                <div className="font-w700 text-gray-darker animated fadeInDown">CMS
                </div>
              </div>
              <div className="col-xs-6 col-sm-3 fa fa-fighter-jet">
                <div className="font-w700 text-gray-darker animated fadeInDown">DevOps
                </div>
              </div>
              <div className="col-xs-6 col-sm-3 fa fa-soccer-ball-o">
                <div className="font-w700 text-gray-darker animated fadeInDown">Cryptocurrency
                </div>
              </div>
              <div className="col-xs-6 col-sm-3 fa fa-car">
                <div className="font-w700 text-gray-darker animated fadeInDown">Automotive
                </div>
              </div>
              <div className="col-xs-6 col-sm-3 fa fa-plane">
                <div className="font-w700 text-gray-darker animated fadeInDown">Travelling
                </div>
              </div>
              <div className="col-xs-6 col-sm-3 fa fa-id-badge">
                <div className="font-w700 text-gray-darker animated fadeInDown">Photography
                </div>
              </div>
            </div>
          </div>
      </div>

    )
  }
}

export default profileBlock;
