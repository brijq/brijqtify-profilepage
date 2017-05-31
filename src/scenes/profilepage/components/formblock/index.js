/**
 * Created by brijq on 25/5/17.
 */
import React from 'react'
import Movie from '../../../../images/IMG_5225.MOV'


class formBlock extends React.Component {
  constructor() {
    super();
    this.state = {
      width: window.outerWidth,
      height: window.outerHeight,
    }
  }

  render() {
    if (this.state.width <= 992) {
      return (
        <div className="block">
          <div className="block-header bg-gray-light">
            <div className="block-content">
              <div className="fade in active">
                <div className="rows items-push">
                  <div className="col-md-12 col-sm-offset-4">
                    <div className="form-group">
                      <div className="col-md-6">
                        <h1 className="block-content">Welcome To Brijqtify!</h1>
                        <p className="form-control-static font-w700 animated">Welcome to my brijqtify!
                          I'm a web developer and I love creating stuff that solve problems and make your life easier.
                          Feel free to follow me to know more about me and my projects.
                          Thanks for stopping by, wish you a great day!</p>

                        <p className="form-control-static font-w700 animated">
                          <h4 className="h3 text-default-dark">Experience</h4>
                          <li className="h4 text-info">Software Web Developer at Cloudzen Tech</li>
                          <p>Mainly focuses on web front-end development , Deployment,
                            Continuous Integration and Unit Testing work and Database handling
                          </p>

                          <h4 className="h3 text-default-dark">Education</h4>
                          <li className="h4 text-info">Lithan Academy</li>
                          <p>Full Stack Advanced Web Developer</p>
                          <li className="h4 text-info">SIM University/RMIT University</li>
                          <p>Degree in Marketing</p>
                          <li className="h4 text-info">Republic Polytechnic</li>
                          <p>Degree in Aerospace Avionics</p>
                          <li className="h4 text-info">Compassvale Secondary</li>
                          <p>Singapore-Cambridge GCE O-Level
                            Singapore Youth Flying Club
                          </p>

                          <br/>
                        </p>


                        <h3>Skills</h3>
                        <ul>Javascript</ul>
                        <ul>Java</ul>
                        <ul>Python</ul>
                        <ul>React Js</ul>
                        <ul>Android</ul>
                        <ul>Google Cloud</ul>
                        <ul>Raspbian</ul>

                        <p>Many Others...</p>
                        <br/>
                        <br/>
                        <br/>

                      </div>
                    </div>
                  </div>
                </div>
              </div>

              <div className="col-md-4">
                <h2 className="text-center"> Hey Google Tell Me A Joke !</h2>
                <video width="500" height="400" controls>
                  <source src={Movie} type="video/mp4">
                  </source>
                </video>
                &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;

                <br/>
                <br/>
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

    } else {
        return (
          <div className="block">
            <div className="block-header bg-gray-light">
              <div className="block-content">
                <div className="fade in active">
                  <div className="rows items-push">
                    <div className="col-md-12 col-sm-offset-4">
                      <div className="form-group">
                        <div className="col-xs-6">
                          <h1 className="block-content">Welcome To Brijqtify!</h1>
                          <p className="form-control-static font-w700 animated">Welcome to my brijqtify!
                            I'm a web developer and I love creating stuff that solve problems and make your life easier.
                            Feel free to follow me to know more about me and my projects.
                            Thanks for stopping by, wish you a great day!</p>

                          <p className="form-control-static font-w700 animated">
                            <h4 className="h3 text-default-dark">Experience</h4>
                            <li className="h4 text-info">Software Web Developer at Cloudzen Tech</li>
                            <p>Mainly focuses on web front-end development , Deployment,
                              Continuous Integration and Unit Testing work and Database handling
                            </p>

                            <h4 className="h3 text-default-dark">Education</h4>
                            <li className="h4 text-info">Lithan Academy</li>
                            <p>Full Stack Advanced Web Developer</p>
                            <li className="h4 text-info">SIM University/RMIT University</li>
                            <p>Degree in Marketing</p>
                            <li className="h4 text-info">Republic Polytechnic</li>
                            <p>Degree in Aerospace Avionics</p>
                            <li className="h4 text-info">Compassvale Secondary</li>
                            <p>Singapore-Cambridge GCE O-Level
                              Singapore Youth Flying Club
                            </p>

                            <br/>
                          </p>


                          <h3>Skills</h3>
                          <ul>Javascript</ul>
                          <ul>Java</ul>
                          <ul>Python</ul>
                          <ul>React Js</ul>
                          <ul>Android</ul>
                          <ul>Google Cloud</ul>
                          <ul>Raspbian</ul>

                          <p>Many Others...</p>

                        </div>
                      </div>
                    </div>
                  </div>
                </div>

                <h2 className="text-center"> Hey Google Tell Me A Joke !</h2>
                <video width="1100" height="400" controls>
                  <source src={Movie} type="video/mp4">
                  </source>
                </video>
                &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;

                <br/>
                <br/>


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
}

export default formBlock