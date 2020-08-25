import axios from 'axios';
import React, { useState } from 'react';
import Navbar from './Navbar'

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

  return (
    <div>
      <Navbar></Navbar>
      <form onSubmit={onSubmit}>
        <div>
          <p>Topic</p>
          <input
            type="text"
            placeholder="Subject"
            name="subject"
            value={subject}
            onChange={onChange}
            required
          />
        </div>
        <div>
          <p>Content</p>
          <input
            type="text"
            placeholder="Content"
            name="content"
            value={content}
            onChange={onChange}
            required
          />
        </div>
        <input type="submit" value="Send" />
      </form>
    </div>
  );
};

export default Contact;
