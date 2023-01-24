import React from "react";
import "./Contact.css";
import Input from "../../components/Elements/Input";
import TextArea from "../../components/Elements/TextArea";

function Contact() {
  return (
    <div className="contact-main-div">
      <div>
        <p className="title">GET IN TOUCH</p>
        <p className="description">
          Trysail transom furl sea Legs scallywag Jack Ketch chandler Mizzenmat
          reff sails skysail.
        </p>
      </div>
      <div className="contact-form">
        <div className="form-control">
          <p className="">Contact Form</p>
        </div>
        <div className="form-group">
          <div className="form-control">
            <Input label="Name *" />
          </div>
          <div className="form-control">
            <Input label="Email Address *" />
          </div>
        </div>
        <div className="form-group">
          <div className="form-control">
            <TextArea label="Message *" />
          </div>
        </div>
        <div className="form-group">
          <div className="form-control send-button">
            <button>Send</button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Contact;
