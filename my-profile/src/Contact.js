import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import './styles.css';

const Contact = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');
  const [confirmationMessage, setConfirmationMessage] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    setConfirmationMessage(`Thank you, ${name}, your message has been sent.`);
    setName('');
    setEmail('');
    setMessage('');
  };

  return (
    <div className="container page-container mt-5">
      <h2 className="display-4 mb-4">Contact Me</h2>
      <form onSubmit={handleSubmit}>
        <div className="form-group">
          <label htmlFor="name">Name:</label>
          <input
            type="text"
            id="name"
            name="name"
            className="form-control"
            required
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
        </div>
        <div className="form-group">
          <label htmlFor="email">Email:</label>
          <input
            type="email"
            id="email"
            name="email"
            className="form-control"
            required
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
        </div>
        <div className="form-group">
          <label htmlFor="message">Message:</label>
          <textarea
            id="message"
            name="message"
            rows="5"
            className="form-control"
            required
            value={message}
            onChange={(e) => setMessage(e.target.value)}
          ></textarea>
        </div>
        <button type="submit" className="btn btn-primary">Send Message</button>
      </form>

      {confirmationMessage && (
        <div className="alert alert-success mt-3">
          {confirmationMessage}
        </div>
      )}

      <div className="d-flex flex-column mt-4">
        <Link to="/" className="btn btn-outline-light btn-lg my-2 animate-button">Go to Home</Link>
      </div>
    </div>
  );
};

export default Contact;
