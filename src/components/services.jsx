import React, { Component } from "react";


export class Services extends Component {
  render() {
    return (
      <div id="services" className="text-center">
        <div className="container">
          <div className="section-title">
            <h2>Our Brands</h2>
          </div>
          <div className="row">
            
          <div className="col-md col-xs">
            <div className="serv"> 
              <a classname="main-item" href="https://www.butterflytechnologies.com"><h3> Butterfly Technology Solutions <span className="fa fa-bolt fa-lg"></span></h3></a>
              <p> The aim is to provide consulting and professional services specialized in IT solutions and outsourcing services. Our Services are divided in two sections </p>
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
            <div className="served">
            <a classname="main-item" href="https://www.butterflytechnologies.com"><h3> Butterfly Media Solutions <span className="fa fa-camera fa-lg"></span></h3></a>

            </div>
          {/* {this.props.data
              ? this.props.data.map((d, i) => (
                  <div  key={`${d.name}-${i}`} className="col-md-6 col-xs">
                    {" "}
                    <a href={d.link} > <i className={d.icon}></i> </a> 
                    <div className="service-desc">
                      <h3>{d.name}</h3>
                      <p>{d.text}</p>
                      <h5> {d.subheading} </h5>
                      <p> {d.subdescription}</p>
                      <h5> {d.second}</h5>
                      <p> {d.desc}</p>
                    </div>
                  </div>
                ))
              : "loading"} */}
          </div>
            
          </div>
        </div>
      </div>
    );
  }
}

export default Services;
