import React, { Component } from 'react'
import Navigation from './navigation';
import Header from './header';
import Features from './features';
import About from './about';
import Services from './services';
import Gallery from './gallery';
import Testimonials from './testimonials';
import Team from './Team';
import Contact from './contact';
import $ from 'jquery';
import ContactUs from './contactUs';

export class App extends Component {
  state = {
    resumeData : {},
  }
  getResumeData(){
    $.ajax({
      url:'/data.json',
      dataType:'json',
      cache: false,
      success: function(data){
        this.setState({resumeData: data});
      }.bind(this),
      error: function(xhr, status, err){
        console.log(err);
        alert(err);
      }
    });
  }

  componentDidMount(){
    this.getResumeData();
  }

  render() {
    return (
      <div className="row">
      <div className="col-md col-xs">
        <Navigation />
        <Header data={this.state.resumeData.Header}/>
        <Features data={this.state.resumeData.Features}/>
        <About  data={this.state.resumeData.About}/>
        <Services  data={this.state.resumeData.Services}/>
        <Contact  data={this.state.resumeData.Contact}/>
        <ContactUs data={this.state.resumeData.ContactUs} />
      </div>
      </div>
    )
  }
}

export default App
