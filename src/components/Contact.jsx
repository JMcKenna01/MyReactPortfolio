import React, { useState } from 'react';

function Contact() {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');
  const [nameError, setNameError] = useState('');
  const [emailError, setEmailError] = useState('');

  const handleNameChange = (event) => {
    setName(event.target.value);
    if (!event.target.value.trim()) {
      setNameError('Name is required');
    } else {
      setNameError('');
    }
  };

  const handleEmailChange = (event) => {
    setEmail(event.target.value);
    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!event.target.value.trim()) {
      setEmailError('Email is required');
    } else if (!emailPattern.test(event.target.value)) {
      setEmailError('Invalid email address');
    } else {
      setEmailError('');
    }
  };

  const handleFormSubmit = (event) => {
    event.preventDefault();
    
  };

  return (
    <div style={{ maxWidth: '600px', margin: '0 auto', padding: '20px' }}>
      <h1 style={{ textAlign: 'center' }}>Contact</h1>
      <p style={{ textAlign: 'center' }}>I'm currently open to new opportunities, collaborations, or just a chat. Feel free to reach out!</p>
      
      {/* Contact Form */}
      <form onSubmit={handleFormSubmit} style={{ display: 'flex', flexDirection: 'column', gap: '10px' }}>
        <input 
          type="text" 
          placeholder="Your Name" 
          value={name}
          onChange={handleNameChange}
          onBlur={handleNameChange} 
          style={{ padding: '10px', borderRadius: '5px', border: '1px solid #ccc' }} 
        />
        {nameError && <span style={{ color: 'red' }}>{nameError}</span>}
        <input 
          type="email" 
          placeholder="Your Email" 
          value={email}
          onChange={handleEmailChange}
          style={{ padding: '10px', borderRadius: '5px', border: '1px solid #ccc' }} 
        />
        {emailError && <span style={{ color: 'red' }}>{emailError}</span>}
        <textarea 
          placeholder="Your Message" 
          value={message}
          onChange={(event) => setMessage(event.target.value)}
          rows="4" 
          style={{ padding: '10px', borderRadius: '5px', border: '1px solid #ccc' }}
        ></textarea>
        
        <button 
          type="submit" 
          disabled={!name || !email || !message || emailError}
          style={{ 
            padding: '10px', 
            borderRadius: '5px', 
            border: 'none', 
            backgroundColor: '#61dafb', 
            color: 'white', 
            cursor: 'pointer',
            transition: 'background-color 200ms ease-in-out',
            width: '100%', 
          }}
          onMouseOver={(e) => e.currentTarget.style.backgroundColor = '#004080'} 
          onMouseOut={(e) => e.currentTarget.style.backgroundColor = '#61dafb'} 
          onFocus={(e) => e.currentTarget.style.backgroundColor = '#004080'} 
          onBlur={(e) => e.currentTarget.style.backgroundColor = '#61dafb'} 
        >
          Send Message
        </button>
      </form>
    </div>
  );
}

export default Contact;
