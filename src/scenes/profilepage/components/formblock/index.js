/**
 * Created by brijq on 25/5/17.
 */
import React from 'react'
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
                                              <p className="block-content experiencesector">Welcome to my personal space! Feel Free to know more about me!
                                                  I do love travelling and playing soccer at times. Feel free to contact me right at the bottom of the page.</p>
                                    </div>
                                    <div className="block">
                    <h4 className="block-header block-title text-center bg-gray">What else <img height="50px" src={questionMarkImage} alt=''/>Find Out More about both my actual work and hobbies below</h4>

                                                  <div className="col-md-3 col-xl-3 projectsphoto">
                                                    <div className="block block-link-rotate text-center">
                                                      <div className="block-header">
                                                        <h3 className="block-title"> <span className="fa fa-laptop iconsize"/> Web / App Development</h3>
                                                      </div>
                                                      <div className="block-content bg-primary">
                                                        <div className="py-2">
                                                          <p className="h3 font-w700 text-white mb-2">Front / Back End</p>
                                                        </div>
                                                      </div>
                                                      <div className="block-content">
                                                        <div className="font-size-sm py-2">
                                                          <p> Node Js / Express Js </p>
                                                          <p> React Js / Electron Js </p>
                                                          <p> Google Cloud Platform / Amazon Web Services </p>
                                                          <p> Drupal / Wordpress </p>
                                                        </div>
                                                      </div>
                                                      <div className="block-content block-content-full bg-body-light">
                                                        <a href="mailto:brijq91@gmail.com">
                                                          <span className="btn btn-square btn-primary px-4">Contact Me</span>
                                                        </a>
                                                      </div>
                                                    </div>
                                                  </div>

                                                  <div className="col-md-3 col-xl-3 projectsphoto">
                                                    <div className="block block-link-rotate text-center">
                                                      <div className="block-header">
                                                        <h3 className="block-title"> <span className="fa fa-lightbulb-o iconsize"/> Mobile Development</h3>
                                                      </div>
                                                      <div className="block-content bg-primary">
                                                        <div className="py-2">
                                                          <p className="h3 font-w700 text-white mb-2"> Native / Flutter</p>
                                                        </div>
                                                      </div>
                                                      <div className="block-content">
                                                        <div className="font-size-sm py-2">
                                                          <p> Kotlin Development</p>
                                                          <p> Flutter Development</p>
                                                          <p> Firebase Development</p>
                                                          <p> Cloud functions / Real Time Databases / Authentication </p>
                                                        </div>
                                                      </div>
                                                      <div className="block-content block-content-full bg-body-light">
                                                        <a href="mailto:brijq91@gmail.com">
                                                          <span className="btn btn-square btn-primary px-4">Contact Me</span>
                                                        </a>
                                                      </div>
                                                    </div>
                                                  </div>

                                                  <div className="col-md-3 col-xl-3 projectsphoto">
                                                    <div className="block block-link-rotate text-center">
                                                      <div className="block-header">
                                                        <h3 className="block-title"><span className="fa fa-code iconsize"/>  CyberSecurity Hobbies</h3>
                                                      </div>
                                                      <div className="block-content bg-primary">
                                                        <div className="py-2">
                                                          <p className="h3 font-w700 text-white mb-2">Penetration Testing</p>
                                                        </div>
                                                      </div>
                                                      <div className="block-content">
                                                        <div className="font-size-sm py-2">
                                                          <p> Exploitation Discovery and Application </p>
                                                          <p> Malware Cleanup </p>
                                                          <p> Application / Servers Security Review </p>
                                                          <p> Pentration Report</p>
                                                        </div>
                                                      </div>
                                                      <div className="block-content block-content-full bg-body-light">
                                                        <a href="mailto:brijq91@gmail.com">
                                                          <span className="btn btn-square btn-primary px-4">Contact Me</span>
                                                        </a>
                                                      </div>
                                                    </div>
                                                  </div>

                                                  <div className="col-md-3 col-xl-3 projectsphoto">
                                                    <div className="block block-link-rotate text-center">
                                                      <div className="block-header">
                                                        <h3 className="block-title"> <span className="fa fa-server iconsize"/>   Machine Learning / IOT Hobbies</h3>
                                                      </div>
                                                      <div className="block-content bg-primary">
                                                        <div className="py-2">
                                                          <p className="h3 font-w700 text-white mb-2"> Tensorflow</p>
                                                        </div>
                                                      </div>
                                                      <div className="block-content">
                                                        <div className="font-size-sm py-2">
                                                          <p> Integration hosting Google Cloud / TPU </p>
                                                          <p> Classification / Prediction </p>
                                                          <p> Image Recognition / Words Prediction </p>
                                                          <p> Raspbian / Pi Zero</p>
                                                        </div>
                                                      </div>
                                                      <div className="block-content block-content-full bg-body-light">
                                                        <a href="mailto:brijq91@gmail.com">
                                                          <span className="btn btn-square btn-primary px-4">Contact Me</span>
                                                        </a>
                                                      </div>
                                                    </div>
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

                                                    <li className="h4 text-default-dark block-content experiencesector bg-gray-light"><strong>Current:</strong> Software/DevOps Engineer at Govtech Agency</li>
                                                    <p className="block-content lastsegmentprivacyforblock"> Development of web portal into commercial cloud project within the government sector<br/>
                                                  
                                                    </p>

                                                    <li className="h4 text-default-dark block-content experiencesector bg-gray-light"> Software Engineer at Prodigious Worldwide</li>
                                                    <p className="block-content lastsegmentprivacyforblock">Working on projects that are based on clients requirements which includes
                                                    various platforms including front end and back end tasks.
                                                    </p>


                                                    <li className="h4 text-default-dark block-content experiencesector bg-gray-light">Software Engineer at Ohpen Pte Ltd</li>
                                                    <p className="block-content lastsegmentprivacyforblock">Leading the head tech solution decision maker based on clients demand.
                                                        Playing multiple roles on security compliance role for softwares. Web front-end development , CMS (Wordpress, Drupal), Security
                                                        Server Development, Google Cloud Services and Google Adwords for marketing work. Setting up workflow for a newly formed department in the company.
                                                    </p>

                                                    <li className="h4 text-default-dark block-content experiencesector bg-gray-light">Web Intern at Cloudzen Tech</li>
                                                    <p className="block-content lastsegmentprivacyforblock">Mainly focuses on web front-end development , Deployment In China, Continuous
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

                                                    <h4 className="block-header bg-info block-title"><span className="fa fa-hashtag iconsize"/> Programming Languages</h4>
                                                    <p className="h4 text-default-dark bg-gray-light educationblocktitle">Javascript, Kotlin, PHP, Dart, Java, Python</p>

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
                                    </div>
                              </div>
                          </div>
                    </div>


                    <div className="bg-gray-light fade in active">
                          <div className="col-xs-12 col-sm-12 col-md-12 col-lg-12">
                              <div className="form-group">
                                    <a className="block block-rounded block-link-rotate bg-gray" href="/projects">
                                                  <h3 className="h3 block-content experiencesector text-center bg-info"><a href="/projects"><img  height="180px" src={gifImage} alt=''/></a>
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
