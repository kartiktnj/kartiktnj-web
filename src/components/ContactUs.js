import React, { Component } from 'react';
export default class ContactUs extends Component {
  render() {
    let resumeData = this.props.resumeData;
    return (
      <section id="contact">
        <div className="row section-head">
          <div className="ten columns">
            <p className="lead">
              Feel free to contact me for any work or suggestions below
            </p>
            <form action='#'>
              <div className='contactus-input-box'>
                <div className='input-field field'>
                  <label className='label'>Full Name</label>
                  <input type='text' placeholder='Full Name' id='name' className='item' autoComplete='off' />
                </div>
                <div className='input-field field'>
                  <input type='text' placeholder='Email Address' id='email' className='item' autoComplete='off' />
                </div>
                <div className='input-field field'>
                  <input type='text' placeholder='Phone Number' id='phone' className='item' autoComplete='off' />
                </div>
                <div className='input-field field'>
                  <input type='text' placeholder='Subject' id='subject' className='item' autoComplete='off' />
                </div>
              </div>
              <div className='textarea-field field'>
                <textarea name='' id='message' cols={30} rows={10} placeholder='Your Message' className='item' autoComplete='off' />
              </div>
              <button type='submit'>Send Message</button>
            </form>
          </div>
        </div>
        <div className="row">
          <aside className="eigth columns footer-widgets">
            <div className="widget">
              <h4>LinkedIn : <a href={resumeData.linkedinId}>Kartik Taneja</a>
                {/* {resumeData.linkedinId} */}
              </h4>
            </div>
          </aside>
        </div>
      </section>
    );
  }
}