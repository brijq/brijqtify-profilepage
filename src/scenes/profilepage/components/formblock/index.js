/**
 * Created by brijq on 25/5/17.
 */
import React from 'react'
import Movie from '../../../../images/IMG_5225.MOV'
import gifImage from '../../../../images/Click_here.gif'
import questionMarkImage from '../../../../images/questionmark.gif'


class formBlock extends React.Component {
  constructor() {
    super();
    this.state = {
      width: window.outerWidth,
      height: window.outerHeight,
    }
  }


  render() {
        return (

            <div className="block">

                    <div className="bg-gray-light fade in active">
                          <div className="col-xs-12 col-sm-12 col-md-12 col-lg-12">
                              <div className="form-group">
                                    <div className="block">
                                              <h1 className="block-header bg-info block-title text-center">Welcome To Brijqtify!</h1>
                                              <p className="block-content experiencesector">Are you searching for a software engineer with a proven ability to develop high-performance applications and technical innovations?
                                                  If so, welcome to brijqtify! My technical expertise includes cross-platform proficiency (Linux, Unix)! Feel Free to know more about me!
                                                  Of course, just like any other human, I do have hobbies and love travelling. Feel free to contact me right at the bottom of the page.</p>
                                    </div>
                                    <div className="block">
                                                  <h4 className="block-header block-title text-center bg-gray">Whatelse <img height="50px" src={questionMarkImage}/>I Explore</h4>

                                                  <div className="col-md-4 col-xl-3 projectsphoto">
                                                    <a className="block block-link-rotate text-center" href="javascript:void(0)">
                                                      <div className="block-header">
                                                        <h3 className="block-title"> <span className="fa fa-laptop iconsize"/>  Development Work</h3>
                                                      </div>
                                                      <div className="block-content bg-primary">
                                                        <div className="py-2">
                                                          <p className="h3 font-w700 text-white mb-2">Front / Back End</p>
                                                        </div>
                                                      </div>
                                                      <div className="block-content">
                                                        <div className="font-size-sm py-2">
                                                          <p> Node Js </p>
                                                          <p> React Js </p>
                                                          <p> Google Cloud Platform </p>
                                                          <p> Drupal / Wordpress </p>
                                                        </div>
                                                      </div>
                                                      <div className="block-content block-content-full bg-body-light">
                                                        <a href="mailto:brijq91@gmail.com">
                                                          <span className="btn btn-square btn-primary px-4">Contact Me</span>
                                                        </a>
                                                      </div>
                                                    </a>
                                                  </div>

                                                  <div className="col-md-4 col-xl-3 projectsphoto">
                                                    <a className="block block-link-rotate text-center" href="javascript:void(0)">
                                                      <div className="block-header">
                                                        <h3 className="block-title"><span className="fa fa-code iconsize"/>  CyberSecurity Hobbies</h3>
                                                      </div>
                                                      <div className="block-content bg-primary">
                                                        <div className="py-2">
                                                          <p className="h3 font-w700 text-white mb-2">Pen Testing</p>
                                                        </div>
                                                      </div>
                                                      <div className="block-content">
                                                        <div className="font-size-sm py-2">
                                                          <p> Kali Os </p>
                                                          <p> Remote Exploitation </p>
                                                          <p> Local Privilege Escalation </p>
                                                          <p> Backend Attacks </p>
                                                        </div>
                                                      </div>
                                                      <div className="block-content block-content-full bg-body-light">
                                                        <a href="mailto:brijq91@gmail.com">
                                                          <span className="btn btn-square btn-primary px-4">Contact Me</span>
                                                        </a>
                                                      </div>
                                                    </a>
                                                  </div>

                                                  <div className="col-md-4 col-xl-3 projectsphoto">
                                                    <a className="block block-link-rotate text-center" href="javascript:void(0)">
                                                      <div className="block-header">
                                                        <h3 className="block-title"> <span className="fa fa-lightbulb-o iconsize"/>  Internet Of Things</h3>
                                                      </div>
                                                      <div className="block-content bg-primary">
                                                        <div className="py-2">
                                                          <p className="h3 font-w700 text-white mb-2">Raspberry / Microbit</p>
                                                        </div>
                                                      </div>
                                                      <div className="block-content">
                                                        <div className="font-size-sm py-2">
                                                          <p> Integration with Google Cloud </p>
                                                          <p> Android Things </p>
                                                          <p> Raspbian </p>
                                                          <p> Pi Zero </p>
                                                        </div>
                                                      </div>
                                                      <div className="block-content block-content-full bg-body-light">
                                                        <a href="mailto:brijq91@gmail.com">
                                                          <span className="btn btn-square btn-primary px-4">Contact Me</span>
                                                        </a>
                                                      </div>
                                                    </a>
                                                  </div>
                                    </div>
                              </div>
                          </div>
                    </div>

                    <div className="bg-gray-light fade in active">
                          <div className="col-xs-12 col-sm-12 col-md-6 col-lg-6">
                              <div className="form-group">
                                    <div className="block">

                                                    <h4 className="block-header bg-info block-title"><span className="fa fa-tasks iconsize"/>  Experience</h4>
                                                    <li className="h4 text-default-dark block-content experiencesector bg-gray-light"><strong>Current:</strong> Full-Stack Developer at Prodigious Worldwide</li>
                                                    <p className="block-content lastsegmentprivacyforblock">Working on projects that are based on clients requirements which includes<br/>
                                                    various platforms including front end and back end tasks.
                                                    </p>


                                                    <li className="h4 text-default-dark block-content experiencesector bg-gray-light">Software Web Developer at Ohpen Pte Ltd</li>
                                                    <p className="block-content lastsegmentprivacyforblock">Leading the head tech solution decision maker based on clients demand.<br/>
                                                        Playing multiple roles on security compliance role for softwares. Mainly<br/>
                                                        focuses on web front-end development , CMS (Wordpress, Drupal), Security <br/>
                                                        Server Development, Google Cloud Services and Google Adwords for marketing work.
                                                    </p>

                                                    <li className="h4 text-default-dark block-content experiencesector bg-gray-light">Software Web Developer at Cloudzen Tech</li>
                                                    <p className="block-content lastsegmentprivacyforblock">Mainly focuses on web front-end development , Deployment In China, Continuous<br/>
                                                        Integration and Unit Testing work and Database handling
                                                    </p>

                                    </div>
                              </div>
                          </div>
                    </div>

                    <div className="bg-gray-light fade in active">
                          <div className="col-xs-12 col-sm-12 col-md-6 col-lg-6">
                              <div className="form-group">
                                    <div className="block">


                                                    <h4 className="block-header bg-info block-title"><span className="fa fa-certificate iconsize"/>   Education/Certifications</h4>

                                                    <p className="h4 text-default-dark bg-gray-light educationblocktitle">Networking in GCP: Defining and Implementing Networks</p>
                                                    <p className="block-content educationblock">Click <a href="https://www.coursera.org/account/accomplishments/verify/5P3UG87MC62B">here</a> to view the cert</p>
                                                    <p className="h4 text-default-dark bg-gray-light educationblocktitle">Serverless Data Analysis with Google BigQuery and Cloud Dataflow</p>
                                                    <p className="block-content educationblock">Click <a href="https://www.coursera.org/account/accomplishments/verify/PT66UBXKDNTJ">here</a> to view the cert</p>
                                                    <p className="h4 text-default-dark bg-gray-light educationblocktitle">Google Cloud Platform Fundamentals: Core Infrastructure</p>
                                                    <p className="block-content educationblock">Click <a href="https://www.coursera.org/account/accomplishments/certificate/7SNPE9G2GKYK">here</a> to view the cert</p>
                                                    <p className="h4 text-default-dark bg-gray-light educationblocktitle">Lithan Academy</p>
                                                    <p className="block-content educationblock">Full Stack Advanced Web Developer</p>
                                                    <p className="h4 text-default-dark bg-gray-light educationblocktitle">SIM University/RMIT University</p>
                                                    <p className="block-content educationblock">Degree in Marketing</p>
                                                    <p className="h4 text-default-dark bg-gray-light educationblocktitle">Republic Polytechnic</p>
                                                    <p className="block-content educationblock">Diploma in Aerospace Avionics</p>
                                                    <p className="h4 text-default-dark bg-gray-light educationblocktitle">Compassvale Secondary</p>
                                                    <p className="block-content educationblock">Singapore-Cambridge GCE O-Level
                                                        Singapore Youth Flying Club
                                                  </p>
                                                  <br/>


                                    </div>
                              </div>
                          </div>
                    </div>


                    <div className="bg-gray-light fade in active">
                          <div className="col-xs-12 col-sm-12 col-md-12 col-lg-12">
                              <div className="form-group">
                                    <a className="block block-rounded block-link-rotate bg-gray" href="/projects">
                                                  <h3 className="h3 block-content experiencesector text-center bg-info"><a href="/projects"><img  height="180px" src={gifImage}/></a>
                                                  </h3>
                                                  <h4 className="block-content text-center lastsegment bg-info">to find out more on my brand new Projects Page</h4>
                                    </a>
                              </div>
                          </div>
                    </div>


                    <div className="bg-gray-light fade in active">
                          <div className="col-xs-12 col-sm-12 col-md-12 col-lg-12">
                              <div className="form-group">


                                                      <div className="col-sm-12 order-sm-2 py-1 text-center text-sm-right" role="group">
                                                          <a href="https://www.facebook.com/brijq">
                                                              <span className="fa fa-facebook-official text-info forfooter"/>
                                                              &nbsp;FaceBook&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                                                          </a>

                                                          <a href="https://twitter.com/BRIJQ">
                                                              <span className="fa fa-twitter-square text-info forfooter"/>
                                                              &nbsp;Twitter&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                                                          </a>

                                                          <a href="https://www.instagram.com/brijqbrian/">
                                                              <span className="fa fa-instagram text-info forfooter"/>
                                                              &nbsp;Instagram&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                                                          </a>

                                                          <a href="https://github.com/brijq">
                                                              <span className="fa fa-github text-info forfooter"/>
                                                              &nbsp;GitHub&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                                                          </a>

                                                          <a href="https://www.linkedin.com/in/brian-oh-a4274511b/">
                                                              <span className="fa fa-linkedin text-info forfooter"/>
                                                              &nbsp;LinkIn&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                                                          </a>

                                                          <a href="mailto:brijq91@gmail.com">
                                                              <span className="fa fa-envelope text-info forfooter"/>
                                                              &nbsp;Email&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                                                          </a>

                                                          <p> Crafted with <i className="fa fa-heart text-danger lastsegment"></i> by Brian </p>
                                                      </div>

                              </div>
                          </div>
                    </div>
          </div>

        )
      }
    }

export default formBlock
