import React from "react";
import Grid from "@material-ui/core/Grid";
import "./ContactUs.css";

import Footer from "./Footer.js";
import emailjs from 'emailjs-com'
import {useState} from "react";

const ContactUs = () => {
  const [result, showResult] =useState(false)
 
   function sendEmail (e){
       e.preventDefault();

     
       emailjs.sendForm('service_fku05b2',
       'template_5orbbtz',e.target, 
       'user_HpEusqGzMkCwcQou0kwcg'
       ).then((result)=>{
           console.log(result.text);
       },(error)=>{
           console.log(error.text)
       }
       );
      e.target.reset();
      showResult(true)
      }
  return (
    <div>
    <div className="contact-container">
      <div className="contact-head">
        <h1>Contact Me</h1>
      </div>
      <Grid container justifyContent="center" alignItems="center" spacing={2}>
        <Grid item xm={12} md={6}>
          <div className="contact-form">
            <form onSubmit={sendEmail}>
              <div className="mb-3">
                <label for="name" className="form-label">
                  Name
                </label>
                <input
                name='name'
                  type="name"
                  className="form-control"
                  id="name"
                  placeholder='Enter your name'
                  
                  aria-describedby="emailHelp"
                />
              </div>
              <div className="mb-3">
                <label for="name" className="form-label">
                  Email address
                </label>
                <input
                name='email'
                  type="email"
                  className="form-control"
                  id="name"
                  placeholder='Enter email'
                  aria-describedby="emailHelp"
                />
              </div>
              <div className="mb-3">
                <label for="textarea" className="form-label">
                  Message
                </label>
                <textarea
                name='message'
                  type="text"
                  className="form-control"
                  row="4"
                ></textarea>
              </div>

              <button type="submit" className="btn btn-primary">
                Submit
              </button>
            </form>
          </div>
        </Grid>
        <Grid item xm={12} md={6}>
          <div className="contact-details">
            <h1>Contacts</h1>
            <div className="list-items">
              <h3>
                <i class="fas fa-phone-volume"></i>+00 268 445 8136
              </h3>
              <h3>
                <i class="fas fa-phone-volume"></i>+00 268 445 8136
              </h3>
             
              <h3>
                <i class="fas fa-envelope"></i>baneleblessed94@gmail.com
              </h3>
              <h3>
                <i class="fas fa-envelope"></i>sibandablessed724@gmail.com
              </h3>
            </div>
          </div>
        </Grid>
      </Grid>
    
    </div>
    <Footer />;
    </div>
  );
 
};

export default ContactUs;
