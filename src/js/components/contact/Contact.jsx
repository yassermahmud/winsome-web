import React from 'react';
import Discover from '../discover/Discover';
import News from '../News/News';
import Hero from '../hero/HeroImage';
import axios from 'axios'

export default class Contact extends React.Component {
  constructor() {
    super();
    this.state = {
      sending: false,
      value: '',
      firstName: '',
      lastName: '',
      email: '',
      subject: '',
      message: ''
    };
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }
  handleChange(e) {
    this.setState({ value: e.target.value });
  }
  handleSubmit(e) {
    e.preventDefault();
    console.log(this.state, 'test')
    this.setState({
      sending: true
    })
    axios.post('/contact', {
      firstName: this.state.firstName,
      lastName: this.state.lastName,
      email: this.state.email,
      subject: this.state.subject,
      message: this.state.message
    }).then(function(response) {
      console.log('done')
      this.setState({
        sending: false
      })
    }.bind(this))
  }
  handleFirstName(e) {
    this.setState({
      firstName: e.target.value
    });
  }
  handleLastName(e) {
    this.setState({
      lastName: e.target.value
    });
  }
  handleEmail(e) {
    this.setState({
      email: e.target.value
    });
  }
  handleSubject(e) {
    this.setState({
      subject: e.target.value
    });
  }
  handleMessage(e) {
    this.setState({
      message: e.target.value
    });
  }
  render() {
    var submit;
    if (this.state.sending) {
      submit = (<div className="lds-ripple"><div></div><div></div></div>)
    } else {
      submit = (
        <button type="submit" className="contact-submit-btn">
          Submit
        </button>
      )
    }
    return (
      <div id="contact">
        <Hero style={'contact-img'} />
        <div className="contact">
          <div className="row">
            <div className="col-md-6 contactInfo">
              <h2 className="contactH2">Get In Touch</h2>
              <div className="yellowBox" />
              <p className="contactP">
                We are always happy to answer questions about life at School.
                Please do not hesitate to get in touch by telephone or email
              </p>
              <br />
              <br />
              <p className="contactP">
                <b>Pakistan:</b> 01883 343028
              </p>
              <p className="contactP">
                <b>International:</b> +44 1883 343028
              </p>
            </div>

            <div className="col-md-6 location">
              <div className="col-md-1 glyphicon">
                <p>
                  <span className="glyphicon glyphicon-map-marker" />
                </p>
              </div>
              <div className="col-md-5 address">
                <p>
                  <b>Winsome Radical School</b>
                </p>
                <p>Harestone Valley Road</p>
                <p>Caterham</p>
                <p>Surrey CR3 6YA</p>
              </div>
            </div>
          </div>
          <div className="row">
            <div className="contactUs">
              <div className="contactForm">
                <h2 className="contactH2">Contact Us</h2>
                <div className="yellowBox" />
                <form
                  className="userInfo"
                  onSubmit={this.handleSubmit.bind(this)}
                >
                  <input type="text" placeholder="First Name" value={this.state.firstName} onChange={this.handleFirstName.bind(this)} />
                  <br />
                  <input type="text" placeholder="Last Name" value={this.state.lastName} onChange={this.handleLastName.bind(this)} />
                  <br />
                  <input type="text" placeholder="Email" value={this.state.email} onChange={this.handleEmail.bind(this)} />
                  <br />
                  <input type="text" placeholder="Subject" value={this.state.subject} onChange={this.handleSubject.bind(this)} />
                  <br />
                  <textarea placeholder="Message" value={this.state.message} onChange={this.handleMessage.bind(this)} />
                  <br />
                  {submit}
                </form>
              </div>
            </div>
          </div>
        </div>
        <div className="contact-news">
          <News />
        </div>
        <div className="clear">
          <Discover />
        </div>
      </div>
    );
  }
}
