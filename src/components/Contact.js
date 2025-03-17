// src/components/Contact.js
import React, { useState } from 'react';
import '../styles/Contact.css';

const Contact = () => {
  const [form, setForm] = useState({ name: '', email: '', message: '' });

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  return (
    <div className="contact">
      <h2>Contact Us</h2>
      <form>
        <input type="text" name="name" placeholder="Your Name" onChange={handleChange} />
        <input type="email" name="email" placeholder="Your Email" onChange={handleChange} />
        <textarea name="message" placeholder="Your Message" onChange={handleChange} />
        <button type="submit">Send</button>
      </form>
    </div>
  );
};

export default Contact;
