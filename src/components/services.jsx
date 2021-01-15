import React, { Component } from "react";


export class Services extends Component {
  render() {
    return (
      <div id="services" className="text-center ">
        <div className="container">
          <div className="section-title">
            <h2>Our Brands</h2>
          </div>
          <div className="row">
            <div className="col-md-6 col-xs">
              <div className="serv"> 
                <a classname="main-item" href="https://www.butterflytechnologies.com"><h3> Butterfly Technology Solutions </h3></a>
                <i className="fa fa-bolt fa-lg"></i>
                <p className="text-justified"> The aim is to provide consulting and professional services specialized in IT solutions and outsourcing services. Our Services are divided in two sections </p>
                <h4>Outsourced Software Development</h4>
                <p> We specialize in Outsourced Software Development. 
                 We provide integration, Software maintenance and 
                 custom software development services. Through our partners we provide a team of highly specialized
                 consultants targeting at cost effective and schedule driven solutions with a high
                 quality assurance for the deliverables.</p>
                <h4>Quality Assurance and Auditing</h4>
                <p>We have consultants trained by Standards Australia with extensive experience with working in QA related areas in Australia and Overseas. 
                We provide QA services in Software quality assurance, conducting internal auditors, preparing process documentation, 
                conducting quality process checks as well as developing quality management systems.</p>
                <button type="submit" className="btn btn-custom btn-lg">  Learn More </button>
              </div>
            </div>
            <div className="col-md-6 col-xs">
              <div className='serv'>
                <a classname="main-item" href="https://www.butterflymediasolutions.com"><h3> Butterfly Media Solutions </h3></a>
                <i className="fa fa-camera fa-lg"></i>
                <p> Our area of expertise is in delivering innovative solutions through technology and other media solutions. We focus on delivering products 
                  and services which tailor the needs of our clients. We provide a strategic media consultancy service in film production, broadcasting and other 
                  sectors of digital media.
                </p>
                <button type="submit" className="btn btn-custom btn-lg">  Learn More </button>
              </div>
            </div>
          </div>
          <div className="row">
            <div className="col-md-6 col-xs">
              <div className='serv'>
                  <a classname="main-item" href="https://www.butterflybuildings.com"><h3> Butterfly Buildings <i className="fa fa-building fa-lg"></i></h3></a>
                  <p>
                    The aim is to build houses and buildings for our clients like we are building our own. Our team comprises of qualified professionals from the building 
                    and construction industry. We are a construction company honestly and reliably. Along with high-quality construction work, we offer a much personalised 
                    service so that you will direclty work with our customer relationship manager who will help you from day one till your keys are handed over.
                  </p> 
              </div>
            </div> 
            <div className="col-md-6 col-xs">
              <img src="../img/analytics.png" alt="business" id="business" />
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Services;
