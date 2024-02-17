import React, { Component } from 'react';
export default class About extends Component {
   render() {
      let resumeData = this.props.resumeData;
      return (
         <section id="about">
            <div className="row">

               <div className="three columns">

                  <img className="profile-pic" src="images/profilepic.jpg" alt="" />

               </div>

               <div className="nine columns main-col">

                  <h2>About Me</h2>
                  <p>
                     {
                        resumeData.aboutme
                     }
                  </p>

                  <div className="row">

                     <div className="columns contact-details">
                        <a href='#contact'><button class="learn-more">
                           <span class="circle" aria-hidden="true">
                              <span class="icon arrow"></span>
                           </span>
                           <span class="button-text">Contact Me</span>
                        </button></a>
                     </div>
                  </div>
               </div>
            </div>
         </section>
      );
   }
}