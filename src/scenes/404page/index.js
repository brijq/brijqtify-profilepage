/**
 * Created by brijq on 5/8/18.
 */
import React from 'react'

class notFoundPage extends React.Component{
    render(){
      return (
        <body>
            <div className="page-container">
              <main className="main-container">
                <div className="hero">
                    <div className="hero-inner text-center">
                        <div className="content content-full bg-white overflow-hidden">
                            <div className="py-4">
                                <h1 className="display-1 text-city" data-toggle="appear" data-className="animated flipInX">404</h1>
                                <h2 className="h3 font-w300 text-muted mb-5" data-toggle="appear" data-className="animated fadeInUp">We are sorry but the page you are looking for was not found..</h2>
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
export default notFoundPage;
