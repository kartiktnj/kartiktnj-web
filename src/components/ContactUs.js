import React, { Component } from 'react';
import { ToastContainer, toast, Slide } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css'

const form = document.querySelector('form');
export default class ContactUs extends Component {
  state = {
    fullName: '',
    emailAddress: '',
    phoneNumber: '',
    subject: '',
    message: '',
  };

  handleInputChange = (e) => {
    this.setState({ [e.target.name]: e.target.value });
  };

  componentDidMount() {

    // Wait for the script to be loaded
    const waitForScriptLoad = setInterval(() => {
      if (window.Email) {
        clearInterval(waitForScriptLoad);

        // Now the script is loaded, and you can use the Email object here
        console.log('SMTP.js is loaded');
      }
    }, 100);
  }

  sendEmail = (e) => {
    e.preventDefault();
    // Check if Email is defined before using it
    const { fullName, emailAddress, phoneNumber, subject, message } = this.state;

    let body = `Full Name: ${fullName} <br> Email: ${emailAddress} <br> Phone Number: ${phoneNumber} <br> Message: ${message}`;
    console.log(body);
    if (window.Email) {
      window.Email.send({
        Host: "smtp.elasticemail.com",
        Username: "kartik1409@gmail.com",
        Password: "72C1036425D18D8FC9996CCA646A70202710",
        To: 'kartik.taneja1409@gmail.com',
        From: "kartik.taneja1409@gmail.com",
        Subject: subject,
        Body: body
      }).then(
        message => {
          console.log(message);
          toast.success('Email sent successfully!', {
            position: "bottom-center",
            autoClose: 1500,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
            theme: "dark",
            transition: Slide,
          })
          this.setState({
            fullName: '',
            emailAddress: '',
            phoneNumber: '',
            subject: '',
            message: '',
          })
        }
      ).catch(error => {
        toast.error('Failed to send email. Please try again later.', {
          position: "bottom-center",
          autoClose: 1500,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
          theme: "dark",
          transition: 'Slide',
        })
        console.error(error);
      })
    } else {
      console.error('SMTP.js is not yet loaded.');
    }
  }

  render() {
    let resumeData = this.props.resumeData;
    return (
      <section id="contact">
        <div className="row section-head">
          <div className="ten columns">
            <p className="lead">
              Feel free to contact me for any work or suggestions below
            </p>
            <form action='#' onSubmit={this.sendEmail} ref={this.form}>
              <div className='contactus-input-box'>
                <div className='input-field field'>
                  <input type='text' placeholder='Full Name' name='fullName' id='name' className='item' autoComplete='off' value={this.state.fullName} onChange={this.handleInputChange} />
                  <div className='error-txt'>Full Name cannot be empty</div>
                </div>
                <div className='input-field field'>
                  <input type='text' placeholder='Email Address' name='emailAddress' id='email' className='item' autoComplete='off' value={this.state.emailAddress}
                    onChange={this.handleInputChange} />
                  <div className='error-txt'>Email Address cannot be empty</div>
                </div>
                <div className='input-field field'>
                  <input type='text' placeholder='Phone Number' name='phoneNumber' id='phone' className='item' autoComplete='off' value={this.state.phoneNumber}
                    onChange={this.handleInputChange} />
                  <div className='error-txt'>Phone Number cannot be empty</div>
                </div>
                <div className='input-field field'>
                  <input type='text' placeholder='Subject' name='subject' id='subject' className='item' autoComplete='off' value={this.state.subject}
                    onChange={this.handleInputChange} />
                  <div className='error-txt'>Subject cannot be empty</div>
                </div>
              </div>
              <div className='textarea-field field'>
                <textarea name='message' id='message' cols={30} rows={10} placeholder='Your Message' className='item' autoComplete='off' value={this.state.message}
                  onChange={this.handleInputChange} />
                <div className='error-txt'>Message cannot be empty</div>
              </div>
              <button type='submit' value='send'>Send Message</button>
            </form>
          </div>
        </div>
        <ToastContainer />
        <div className="row">
          <aside className="eigth columns footer-widgets">
            <div className="widget">
              <h4>LinkedIn : <a href={resumeData.linkedinId}>Kartik Taneja</a>
                {/* {resumeData.linkedinId} */}
              </h4>
            </div>
          </aside>
        </div>
        <script src="https://smtpjs.com/v3/smtp.js"></script>
      </section>
    );
  }
}