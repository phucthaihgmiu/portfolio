import React, { useState } from 'react';
import {addContact} from '../API/ContactAPI';
import { Form, Button, Alert } from 'react-bootstrap';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const Contact = () => {
  const [contactDetail, setContactDetail] = useState({
    contactName: '',
    contactEmail: '',
    contactSubject: '',
    contactMessage: '',
  });

  const [okMessage, setOkMessage] = useState('');
  const [koMessage, setKoMessage] = useState('');


  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setContactDetail((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };

  const handleSubmit = async(e) => {
    e.preventDefault();
    // Handle form submission logic here
    console.log('Form submitted:', contactDetail);
    const response = await addContact(contactDetail);
    if(response.status === 200){
      //setOkMessage('Message was sent');
      //setKoMessage('');
      toast.success('Form submitted successfully!');
      setContactDetail({
        contactName: '',
        contactEmail: '',
        contactSubject: '',
        contactMessage: '',
      });
    }else{
      //setOkMessage('');
      //setKoMessage('Something wrong happened, please try again');
      alert('Something wrong happened, please try again');
    }
  };

  return (
    <section id="contact">
      <div className="row section-intro">
        <div className="col-twelve">
          <h5>Contact</h5>
          <h1>I'd Love To Hear From You.</h1>
        </div>
      </div>

      <div className="row contact-form">
        <div className="col-twelve">
          <form
            name="contactForm"
            id="contactForm"
            method="post"
            action=""
            onSubmit={handleSubmit}
          >
            <fieldset>
              <div className="form-field">
                <input
                  name="contactName"
                  type="text"
                  id="contactName"
                  placeholder="Name"
                  value={contactDetail.contactName}
                  minLength="2"
                  required
                  onChange={handleInputChange}
                />
              </div>
              <div className="form-field">
                <input
                  name="contactEmail"
                  type="email"
                  id="contactEmail"
                  placeholder="Email"
                  value={contactDetail.contactEmail}
                  required
                  onChange={handleInputChange}
                />
              </div>
              <div className="form-field">
                <input
                  name="contactSubject"
                  type="text"
                  id="contactSubject"
                  placeholder="Subject"
                  value={contactDetail.contactSubject}
                  onChange={handleInputChange}
                />
              </div>
              <div className="form-field">
                <textarea
                  name="contactMessage"
                  id="contactMessage"
                  placeholder="Message"
                  rows="10"
                  cols="50"
                  required
                  value={contactDetail.contactMessage}
                  onChange={handleInputChange}
                ></textarea>
              </div>
              <div className="form-field">
                <button className="submitform" type="submit">
                  Submit
                </button>
                <div id="submit-loader">
                  <div className="text-loader">Sending...</div>
                  <div className="s-loader">
                    <div className="bounce1"></div>
                    <div className="bounce2"></div>
                    <div className="bounce3"></div>
                  </div>
                </div>
              </div>
            </fieldset>
          </form>
{/*          <div id="message-warning">{koMessage}</div>
          <div id="message-success">{okMessage}</div>
  */}
          <ToastContainer />
        </div>
      </div>

      <div className="row contact-info">
        <div className="col-four tab-full">
          <div className="icon">
            <i className="icon-pin"></i>
          </div>
          <h5>Where to find me</h5>
          <p>
            Louisville, KY <br />
            Houston, TX
          </p>
        </div>
        <div className="col-four tab-full collapse">
          <div className="icon">
            <i className="icon-mail"></i>
          </div>
          <h5>Email Me At</h5>
          <p>phucthaihg@gmail.com</p>
        </div>
        <div className="col-four tab-full">
          <div className="icon">
            <i className="icon-phone"></i>
          </div>
          <h5>Call Me At</h5>
          <p>Phone: (+1) 641 819 2508</p>
        </div>
      </div>
    </section>
  );
};

export default Contact;
