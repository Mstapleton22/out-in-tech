import React from 'react';
import Events from './Events'
import Team from './Team'



function Contact() {
  return (
    <section className="contact">
    <div className="row">
      <div className="col-lg-4 col-md-2 col-sm-1"></div>
      <div className="contact-header col-lg-5 col-md-8 col-sm-1">Contact us:</div>
      <div className="col-lg-3 col-md-2 col-sm-1"></div>
   </div>
      <div className="row">
      <div className="col-lg-4 col-md-4 col-sm-1"></div>
      <a href="outintech.slack.com" target="_blank">
      <i class="fab fa-slack slack-icon col-lg-5 col-md-4 col-sm-1" alt="outintech.slack.com"> #Denver</i></a>
      <div className="col-lg-3 col-md-4 col-sm-1"></div>
      </div>
   </section>
  );
}

export default Contact;