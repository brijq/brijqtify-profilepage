/**
 * Created by brijq on 5/8/18.
 */
import React from 'react'
import Movie from '../../images/IMG_5225.MOV'
import RainbowImage from '../../images/IMG_0055.jpg'
import questionMarkImage from '../../images/questionmark.gif'
import brijqtifyImage from '../../images/brijqtify.gif'
import dialogflow from '../../images/dialogflow.png'
import chatbot from '../../images/chatbot.MP4'
//import apiphoto from '../../images/apiphoto.jpg'
//import logoreact from '../../images/logoforreact.png'
import {
  BrowserView,
  MobileView,
} from "react-device-detect";

class projectsPage extends React.Component {
  render() {
    return (
      <body>
        <div className="page-container">
          <main className="main-container">
            <div className="hero">
              <div className="hero-inner text-center">
                <div className="content content-full bg-gray-light overflow-hidden">
                  <div className="col-md-12 privacyPagecontent">
                    <div className="block">
                      <h1 className="h2 block-header block-title"><strong>Welcome To <img src={brijqtifyImage} alt='' /> Projects Page!</strong></h1>
                      <p className="block-content experiencesector">Contact me at brijq91@gmail.com</p>
                    </div>
                  </div>
                  <div className="col-xs-12 col-sm-12 col-md-6">
                    <div className="block">
                      <h1 className="block-header block-title bg-info">Google Assistant Voice Kit!</h1>
                      <video className="photo" width="400" height="300" controls>
                        <source className="block-content experiencesector" src={Movie} type="video/mp4">
                        </source>
                      </video>
                      <h3 className="h3 text-info block-header block-title"> Hey Google Tell Me A Joke !</h3>
                      <p className="block-content experiencesector"><strong> Google AIY Project</strong><br /><br />
                        This Voice Kit is a self made kit from Google which I build with my
                        own natural language processor and connect it to the Google Assistant. All of this fits in a handy little cardboard cube,
                                                   powered by a Raspberry Pi.<br />
                        Don;t wait now, build your very own customise Google Assistant and have a taste of having your own personal assistant!
                                                   </p>

                      <p className="block-content pointform words"><strong>What is required</strong><img height="25px" src={questionMarkImage} alt='' /></p>
                      <div className="bullet block-content pointform words">
                        <ul>
                          <li>Raspberry Pi 2/3</li>
                          <li>AIY Voice Kit</li>
                        </ul>
                      </div>

                      <p className="block-content experiencesector">
                        Check it out <a href="https://aiyprojects.withgoogle.com/voice/">here</a> for more details!
                                                  </p>

                    </div>
                  </div>

                  <div className="col-xs-12 col-sm-12 col-md-6">
                    <div className="block">
                      <h1 className="block-header block-title bg-info">Your Own Personal Themometer!</h1>
                      <img className="projectsphoto photo" height="275px" src={RainbowImage} alt='' />
                      <h3 className="h3 text-info block-header block-title"> Whats my room temperature now <img height="25px" src={questionMarkImage} alt='' /></h3>
                      <p className="block-content experiencesector"><strong>Getting Started with Rainbow HAT</strong><br /><br />
                        Rainbow HAT's rainbow is a single sweep of 7 APA102 RGB LED pixels that can be controlled individually through the Rainbow HAT Python library.
                                                  The BMP280 sensor on Rainbow HAT measures both temperature and pressure. It's really simple to read the current temperature and pressure.<br />
                        Powered by a raspberry pi zero.
                                                  </p>

                      <p className="block-content pointform words"><strong>What is required</strong><img height="25px" src={questionMarkImage} alt='' /></p>
                      <div className="bullet block-content pointform words">
                        <ul>
                          <li>Raspberry Pi zero</li>
                          <li>Rainbow HAT with Android Things</li>
                        </ul>
                      </div>

                      <p className="block-content experiencesector">
                        Check it out <a href="https://shop.pimoroni.com/products/rainbow-hat-for-android-things">here</a> for more details!
                                                  </p>
                    </div>
                  </div>

                  <div className="col-xs-12 col-sm-12 col-md-6">
                    <div className="block">
                      <h1 className="block-header block-title bg-info">ChatBot with Dialogflow!, Integrate it in Facebook Messenger!</h1>
                      <img className="projectsphoto photo" height="50px" width="300px" src={dialogflow} alt='' />
                      <h3 className="h3 text-info block-header block-title"> Feeling Lazy to reply? No Problem Just Allow the bot to handle it! <img height="25px" src={questionMarkImage} alt='' /></h3>
                      <p className="block-content experiencesector"><strong>Your very own assistant in chatbot! </strong><br /><br />
                        Give users new ways to interact with your product by building engaging voice and text-based conversational interfaces, such as voice apps and chatbots, powered by AI.
                        Connect with users on your website, mobile app, the Google Assistant, Amazon Alexa, Facebook Messenger, and other popular platforms and devices.
                      </p>

                      <BrowserView>
                        <video className="photo" width="400" height="600" autoPlay muted loop preload="auto">
                          <source className="block-content experiencesector" src={chatbot} type="video/mp4">
                          </source>
                        </video>
                      </BrowserView>

                      <MobileView>
                        <video className="photo" width="400" height="600" controls autoPlay muted loop preload="auto">
                          <source className="block-content experiencesector" src={chatbot} type="video/mp4">
                          </source>
                        </video>
                      </MobileView>

                      <img className="projectsphoto photo" height="50px" width="300px" src={dialogflow} alt='' />

                      <p className="block-content experiencesector">
                        Check it out <a href="https://dialogflow.com">here</a> for more details!
                                                  </p>
                    </div>
                  </div>

                  <div className="col-xs-12 col-sm-12 col-md-6">
                    <div className="block">
                      <h1 className="block-header block-title bg-info">How is Node Js doing in 2020? </h1>
                      <h3 className="h3 text-info block-header block-title"> So Why Node Js? <img height="25px" src={questionMarkImage} alt='' /></h3>
                      <p className="block-content experiencesector"><strong>Just a short introduction</strong><br /><br />
                        Node.js open-source JavaScript run-time environment. Allowing us to leverage on Javascript runtime for server side scripting, also a command line tool
                        that can work as a regular server and it uses the V8 Javascript Engine. It is also easy to allow developers to communicate with database easily.
                        <br /><br />
                        
                        So why is so great and what can you do with it?
                        <br/>
                        <br/>
                    

                         <li>Social media platform (LinkedIn uses Node.js)</li>
                         <li>Streaming services (Best example: Netflix)</li>
                         <li>Online payment system (PayPal uses Node.js)</li>
                         <li>Real-time project collaboration and management tool (Trello)</li>
                         <li>Ecommerce platform (Walmart) </li>
                         <li>Single-page applications with complex functionality</li>
                         <li>Real-time applications</li>
                         <li>IoT applications</li>
                         <li>Applications using a microservices architecture</li>

                        <br/>
                      </p>

                      <p className="block-content pointform words"><strong>Strenths</strong></p>
                      <div className="bullet block-content pointform words">
                        <ul>
                          <li>Suitable for Modern Web Development</li>
                          <li>Scalability and Performance</li>
                          <li>Cross-Platform, Mobile-Friendly, And Developer-Friendly Platform</li>
                          <li>Easy Learning Curve</li>
                        </ul>
                      </div>

                      <br/>
                      <br/>

                      <h4>So what are you waiting for! Get started now!</h4>

                      <img className="projectsphoto photo" height="355px" src={questionMarkImage} alt='' />
                      <img className="projectsphoto photo" height="100px" src={questionMarkImage} alt='' />

                    </div>
                  </div>
                </div>
                
                <div className="content content-full font-size-sm text-muted">
                  <p className="mb-1">
                    Would you like to let us know about it?
                        </p>
                  Contact me at brijq91@gmail.com or <a class="link-fx" href="/">Go Back to Main Page</a>
                </div>
              </div>
              </div>
          </main>
        </div>
      </body>
    )
  }
}
export default projectsPage;
