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
                <div className="block-header bg-gray-light">
                    <div className="block-content">
                        <div className="fade in active">
                            <div className="rows items-push">
                                <div className="col-xs-12 col-sm-12 col-md-8 col-md-offset-2 col-lg-8">
                                    <div className="form-group">

                                            <div className="block">
                                                      <h1 className="block-header bg-default block-title">Welcome To Brijqtify!</h1>
                                                      <p className="block-content experiencesector">Are you searching for a software engineer with a proven ability to develop high-performance applications and technical innovations?
                                                          If so, welcome to brijqtify! My technical expertise includes cross-platform proficiency (Linux, Unix)! Feel Free to know more about me!
                                                          Of course, just like any other human, I do have hobbies and love travelling. Feel free to contact me if you will like to find out more
                                                          right at the bottom of my page.</p>
                                            </div>

                                            <div className="block">
                                                      <h4 className="block-header bg-default-light block-title">Whatelse <img height="50px" src={questionMarkImage}/> My own projects and researches.</h4>
                                                      <p className="block-content experiencesector">In my own research and exploration,
                                                          I do and explore security projects and experiments on most trusted and widely-acknowledged online cyber security with in-depth technical coverage.
                                                          <br/>
                                                          Moreover,
                                                          I do play with Raspberry Pis and create various projects. Check out my github pages if you are interested in some examples like how to integrate
                                                          and relate information with Google Cloud Platform with some simple sensors. If you have hear before Android things, feel free to share with me.</p>
                                            </div>

                                            <div className="block">
                                                      <h4 className="block-header bg-city block-title">What technology is this page build based on <img height="50px" src={questionMarkImage}/></h4>
                                                      <p className="block-content experiencesector">Brijqtify is build based on ReactJs. The question is why Reactjs? Check this sites out :

                                                          <li>
                                                              https://medium.com/@coderacademy/32-sites-built-with-reactjs-172e3a4bed81
                                                          </li>
                                                          <li>
                                                              http://madewithreact.com/
                                                          </li>
                                                          Now you know why:)
                                                      </p>
                                            </div>

                                            <div className="block">

                                                          <h4 className="block-header bg-info block-title">Experience</h4>
                                                          <li className="h4 text-default-dark block-content experiencesector bg-success"><strong>Current:</strong> Full-Stack Developer at Prodigious Worldwide</li>
                                                          <p className="block-content">Working on projects that are based on clients requirements which includes<br/>
                                                          various platforms including front end and back end tasks.
                                                          </p>


                                                          <li className="h4 text-default-dark block-content experiencesector bg-success">Software Web Developer at Ohpen Pte Ltd</li>
                                                          <p className="block-content">Leading the head tech solution decision maker based on clients demand.<br/>
                                                              Playing multiple roles on security compliance role for softwares. Mainly<br/>
                                                              focuses on web front-end development , CMS (Wordpress, Drupal), Security <br/>
                                                              Server Development, Google Cloud Services and Google Adwords for marketing work.
                                                          </p>

                                                          <li className="h4 text-default-dark block-content experiencesector bg-success">Software Web Developer at Cloudzen Tech</li>
                                                          <p className="block-content">Mainly focuses on web front-end development , Deployment In China, Continuous<br/>
                                                              Integration and Unit Testing work and Database handling
                                                          </p>

                                            </div>

                                            <div className="block">

                                                            <h4 className="h4 block-content experiencesector bg-flat-light">Education</h4>
                                                            <li className="h4 text-info block-content experiencesector">Lithan Academy</li>
                                                            <p className="block-content">Full Stack Advanced Web Developer</p>
                                                            <li className="h4 text-info block-content experiencesector">SIM University/RMIT University</li>
                                                            <p className="block-content">Degree in Marketing</p>
                                                            <li className="h4 text-info block-content experiencesector">Republic Polytechnic</li>
                                                            <p className="block-content">Degree in Aerospace Avionics</p>
                                                            <li className="h4 text-info block-content experiencesector">Compassvale Secondary</li>
                                                            <p className="block-content">Singapore-Cambridge GCE O-Level
                                                                Singapore Youth Flying Club
                                                          </p>
                                                          <br/>


                                            </div>
                                            <a className="block block-rounded block-link-rotate bg-gray" href="/projects">
                                                          <h3 className="h3 block-content experiencesector text-center bg-gray"><a href="/projects"><img  height="200px" src={gifImage}/></a>
                                                          </h3>
                                                          <h4 className="block-content text-center lastsegment bg-gray">to find out more on my brand new Projects Page</h4>
                                            </a>


                                        </div>
                                    </div>
                            </div>
                        </div>


                        <div className="btn-group pull-right" role="group">
                            <a href="https://www.facebook.com/brijq">
                                <span className="fa fa-facebook-official text-info"/>
                                &nbsp;FaceBook&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                            </a>

                            <a href="https://twitter.com/BRIJQ">
                                <span className="fa fa-twitter-square text-info"/>
                                &nbsp;Twitter&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                            </a>

                            <a href="https://www.instagram.com/brijqbrian/">
                                <span className="fa fa-instagram text-info"/>
                                &nbsp;Instagram&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                            </a>

                            <a href="https://github.com/brijq">
                                <span className="fa fa-github text-info"/>
                                &nbsp;GitHub&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                            </a>

                            <a href="https://www.linkedin.com/in/brian-oh-a4274511b/">
                                <span className="fa fa-linkedin text-info"/>
                                &nbsp;LinkIn&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                            </a>

                            <p>
                                Feel free to contact me at brijq91@gmail.com
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        )
      }
    }

export default formBlock
