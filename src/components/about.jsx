import React, { Component } from 'react'


export class about extends Component {
  render() {
    return (
        <div id="about">
        <div className="container">
          <div className="row">
            <div className="col-xs-12 col-md-8">
              <div className="about-text">
                
                <div className="col-md col-xs-12">
                <h2>About Us</h2>
                <p>{this.props.data ? this.props.data.paragraph : 'loading...'}</p>
  
                </div>
              </div>
            </div>
            <div className="col-xs-12 col-md-4"> <img src="img/about.jpg" className="img-responsive" alt=""/> </div>

          </div>
        </div>
      </div>
    )
  }
}

export default about
