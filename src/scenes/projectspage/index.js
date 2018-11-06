/**
 * Created by brijq on 5/8/18.
 */
import React from 'react'
import Movie from '../../images/IMG_5225.MOV'
import RainbowImage from '../../images/IMG_0055.jpg'
import questionMarkImage from '../../images/questionmark.gif'

class projectsPage extends React.Component{
    render(){
      return (
        <body>
            <div className="page-container">
              <main className="main-container">
                <div className="hero">
                    <div className="hero-inner text-center">
                        <div className="content content-full bg-gray-light overflow-hidden">
                            <div className="py-4">
                                <h1 className="display-1 text-city" data-toggle="appear" data-className="animated flipInX">My Projects To Share</h1>
                                <h2 className="h4 font-w300 text-muted mb-5" data-toggle="appear" data-className="animated fadeInUp">Please feel free to contact me if there are any questions</h2>
                            </div>
                            <div className="col-md-12 privacyPagecontent">
                                        <div className="block">
                                                  <h1 className="block-header block-title">Welcome To Brijqtify Projects Page!</h1>
                                                  <p className="block-content experiencesector">Contact me at brijq91@gmail.com</p>
                                        </div>
                            </div>
                            <div className="col-xs-12 col-sm-12 col-md-6">
                                        <div className="block">
                                                  <h1 className="block-header block-title bg-info">Google Assistant Voice Kit!</h1>
                                                  <video width="400" height="300" controls>
                                                      <source className="block-content experiencesector" src={Movie} type="video/mp4">
                                                      </source>
                                                  </video>
                                                  <h3 className="h3 text-info block-header block-title"> Hey Google Tell Me A Joke !</h3>
                                                  <p className="block-content experiencesector"><strong> Google AIY Project</strong><br/><br/>
                                                   This Voice Kit is a self made kit from Google which I build with my
                                                   own natural language processor and connect it to the Google Assistant. All of this fits in a handy little cardboard cube,
                                                   powered by a Raspberry Pi.<br/>
                                                   Don;t wait now, build your very own customise Google Assistant and have a taste of having your own personal assistant!
                                                   </p>

                                                   <p className="block-content pointform"><strong>What is required</strong><img height="25px" src={questionMarkImage}/></p>
                                                   <div className="bullet block-content pointform">
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
                                                  <img className="projectsphoto" height="275px" src={RainbowImage}/>
                                                  <h3 className="h3 text-info block-header block-title"> Whats my room temperature now <img height="25px" src={questionMarkImage}/></h3>
                                                  <p className="block-content experiencesector"><strong>Getting Started with Rainbow HAT</strong><br/><br/>
                                                  Rainbow HAT's rainbow is a single sweep of 7 APA102 RGB LED pixels that can be controlled individually through the Rainbow HAT Python library.
                                                  The BMP280 sensor on Rainbow HAT measures both temperature and pressure. It's really simple to read the current temperature and pressure.<br/>
                                                  Powered by a raspberry pi zero.
                                                  </p>

                                                  <p className="block-content pointform"><strong>What is required</strong><img height="25px" src={questionMarkImage}/></p>
                                                  <div className="bullet block-content pointform">
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
