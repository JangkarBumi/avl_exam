import axios from 'axios';
import React, { useState } from 'react';


const Contact = () => {
  const [formData, setFormData] = useState({
    subject: '',
    content: '',
  });

  const { subject, content } = formData;

  const onChange = (e) =>
    setFormData({ ...formData, [e.target.name]: e.target.value });

  const onSubmit = (e) => {
    e.preventDefault();

    try {
      axios({
        method: 'post',
        url: '/send',
        data: {
          subject,
          content,
        },
      });
      alert('Email sent successfully!');
    } catch (error) {
      alert(`Email failed,${error} `);
    }
  };

  let name = ' Jen';

  return (
    <div>
      <div className="contact-container">
        <form className="contact-form" onSubmit={onSubmit}>
          <h1 className="contact-title">
            <span>Hello</span>
            {name}
          </h1>
          <h3 className="contact-subtitle">Feel free to ask us anything!</h3>
          <div>
            <div className="length-limit">
              <span>Topic</span>
              <span>{subject.length}/30</span>
            </div>

            <input
              type="text"
              placeholder="Hello"
              name="subject"
              value={subject}
              onChange={onChange}
              maxLength="30"
              required
            />
          </div>
          <div>
            <div className="length-limit">
              <span>Content</span>
              <span>{content.length}/300</span>
            </div>
            <input
              type="text"
              placeholder="Blah blah blah."
              name="content"
              value={content}
              onChange={onChange}
              required
              className="content-area"
              maxLength="300"
            />
          </div>
          <input className="submit-button" type="submit" value="Send" />
        </form>
      </div>
    </div>
  );
};

export default Contact;
