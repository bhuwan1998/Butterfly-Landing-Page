import React, {Component} from 'react'; 

export default class ContactUs extends Component {
    constructor(props){
        super(props);
        
        this.state= {
            user: {
                name: props.name, 
                email: props.email, 
                message: props.message

            }
        }
    }


    handleNameChange(event) {
        // var extract current value of user 
        var user = this.state.user;

        // extract modified value from input element
        user.name = event.target.value;

        // Update the state object
        this.setState({user: user});
    }

    handleEmailChange(event){
        var user = this.state.user;

        user.email = event.target.value;

        this.setState = ({user: user}); 

    }

    handleMessageInput(event){
        var user = this.state.user;

        user.message = user; 

        this.setState({user: user});
    }


    handleButtonClicked() {
        console.log(this.state.user);

    }



    render() {
        return(
            <div id="contact">
                <div className="container">
                    <div className="col-md-8">
                        <div className="row">
                                <div className="section-title">
                                <h2> Get In Touch</h2>
                                <p>
                                         Please fill out the form below to send us an email and we
                                         will get back to you as soon as possible.
                                </p>
                                </div>
                                <form name="sentMessage" id="contactForm" noValidate>
                                    <div className="row">
                                        <div className="col-md-6">
                                            <div className="form-group">
                                                <input 
                                                type="text"  
                                                value={this.state.user.name} 
                                                onChange={this.handleNameChange.bind(this)}
                                                id="name"
                                                className="form-control"
                                                required="required"
                                                placeholder="Name"
                                                />
                                                <p className="help-block text-danger"></p>
                                            </div>
                                        </div>
                                        <div className="col-md-6">
                                                <div className="form-group">
                                                    <input 
                                                    type="email"  
                                                    value={this.state.user.email} 
                                                    onChange={this.handleEmailChange.bind(this)}
                                                    id="email"
                                                    className="form-control"
                                                    required="required"
                                                    placeholder="Email"
                                                    />
                                                    <p className="help-block text-danger"></p>
                                                </div>
                                        </div>
                                        <div className="col-md-6">
                                            <div className="form-group">
                                                <textarea 
                                                    rows="4"
                                                    name="message"
                                                    value={this.state.user.email} 
                                                    onChange={this.handleEmailChange.bind(this)}
                                                    id="message"
                                                    className="form-control"
                                                    required
                                                    placeholder="Enquiry"
                                                    ></textarea>
                                                <p className="help-block text-danger"></p>
                                            </div>
                                        </div>
                                        <div id="success"></div>
                                        <button type="submit" onClick={this.handleButtonClicked.bind(this)} className="btn btn-custom btn-lg">
                                                Send Message
                                        </button>
                                    </div>
                                </form>
                        </div>       
                    </div>
                </div>
            </div>                    
        );
    }
}