import React, { Component } from 'react'
import Navigation from './components/navigation';
import Header from './components/header';
import About from './components/about';
import Services from './components/services';
import ContactUs from './components/contactUs';


import Contact from './components/contact';
import JsonData from './data/data.json';

export class App extends Component {
  state = {
    landingPageData: {},
  }
  getlandingPageData() {
    this.setState({landingPageData : JsonData})
  }

  componentDidMount() {
    this.getlandingPageData();


  }

  render() {
    return (
      <div className="row">
      <div className="col-xs col-md-12">
        <Navigation />
        <Header data={this.state.landingPageData.Header} />
        <About data={this.state.landingPageData.About} />
        <Services data={this.state.landingPageData.Services} />
        {/* <Contact data={this.state.landingPageData.Contact} /> */}
        <ContactUs data={this.state.landingPageData.ContactUs}/>
      </div>
      </div>
    )
  }
}

export default App;
