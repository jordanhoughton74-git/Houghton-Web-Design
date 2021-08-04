import React, { useState } from "react";
import emailjs from 'emailjs-com';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button'


const ContactExpandable = () => {
  const [isExpanded, setExpanded] = useState(false);

  function makeVisible(){
    let element = document.getElementById("submitText");
    element.classList.remove("invisible");
  
  }

  function handleChange(event) {
   const { name, value } = event.target;
   setNote(() => {
      return {
        [name]: value
      };
    });
    }

  const [note, setNote] = useState({
      name: "",
      subject: "",
      email: "",
      message: "",
      phone: ""
    });

    function expand() {
      setExpanded(true);
    }

  function sendEmail(e){
    e.preventDefault();

    if (note.phone == null){

    emailjs.sendForm("service_lyxdm5a", "template_0ku1x0p", e.target, "user_JmyFU7LsCDhH5vpHThW4P")
      .then((result) => {
          console.log(result.text);
      }, (error) => {
          console.log(error.text);
      });
      setNote({
        name: "",
        subject: "",
        email: "",
        message: "",
        phone: "",
    });
    makeVisible();
  } else {
    console.log("error")
  }
  }


  return (
    <Form onSubmit={sendEmail}>
        <h2 className="h5 text-center mb-4">Let's Chat</h2>
        <div className="grey-text left">
        <Form.Group>
          <Form.Label>Your Name</Form.Label>
          <Form.Control 
          type="text" 
          placeholder="Enter Your Name" 
          value={note.name}
          name="name"
          className="form-input"
          id="name"
          onChange={e => {handleChange(e); expand()}}
          onClick={expand}
          rows={isExpanded ? 4 : 2} 
          required
          />
        </Form.Group>

        <Form.Group>
          <Form.Label>Your Email</Form.Label>
          <Form.Control 
          type="email" 
          placeholder="Enter Your Email" 
          value={note.email}
          name="email"
          className="form-input"
          id="email"
          onChange={e => {handleChange(e); expand()}}
          onClick={expand}
          required
          />
        </Form.Group>

          {isExpanded && (
            <Form.Group>
              <Form.Label>Subject</Form.Label>
              <Form.Control 
              type="text" 
              placeholder="Subject" 
              value={note.subject}
              name="subject"
              className="form-input"
              id="subject"
              onChange={handleChange}
              />
            </Form.Group>
          )}
          {isExpanded && (
             <Form.Group>
             <Form.Label>Your Message</Form.Label>
             <Form.Control 
             as="textarea" 
             rows={3}
             className="form-input"
             placeholder="Your Message" 
             value={note.message}
             name="message"
             id="message"
             onChange={handleChange}
             />
           </Form.Group>
          )}
          <Form.Group>
              <Form.Control
                onChange={e => {handleChange(e); expand()}}
                onClick={expand}
                value={note.phone}
                name="phone"
                type="phone"                
                error="wrong"
                success="right"
                tabIndex="-1" 
                className="input-fax"
                autoComplete="off"
              />
          </Form.Group>
         

        </div>
        <div className="text-right">
            <p id="submitText" className="green-text invisible">Thank You! I'll get back to you shortly.</p>

            <Button className="contact-button" type="submit" variant="primary">Send</Button>{' '}


        </div>
      </Form> 
     );
};

export default ContactExpandable;
