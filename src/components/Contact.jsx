import React from 'react';

function Contact() {
  return (
    <div style={{ maxWidth: '600px', margin: '0 auto', padding: '20px' }}>
      <h1 style={{ textAlign: 'center' }}>Contact</h1>
      <p style={{ textAlign: 'center' }}>I'm currently open to new opportunities, collaborations, or just a chat. Feel free to reach out!</p>
      
      {/* Email */}
      <div style={{ textAlign: 'center', marginBottom: '20px' }}>
        <a href="mailto:JMcKenna2026@gmail.com" style={{ color: '#004080', textDecoration: 'none' }}>
       JMcKenna2026@gmail.com
        </a>
      </div>
      
      {/* Contact Form */}
      <form style={{ display: 'flex', flexDirection: 'column', gap: '10px' }}>
        <input type="text" placeholder="Your Name" style={{ padding: '10px', borderRadius: '5px', border: '1px solid #ccc' }} />
        <input type="email" placeholder="Your Email" style={{ padding: '10px', borderRadius: '5px', border: '1px solid #ccc' }} />
        <textarea placeholder="Your Message" rows="4" style={{ padding: '10px', borderRadius: '5px', border: '1px solid #ccc' }}></textarea>
        
        <button 
          type="submit" 
          style={{ 
            padding: '10px', 
            borderRadius: '5px', 
            border: 'none', 
            backgroundColor: '#61dafb', 
            color: 'white', 
            cursor: 'pointer',
            transition: 'background-color 200ms ease-in-out',
            width: '100%', // Ensures button width is responsive to its container
          }}
          onMouseOver={(e) => e.currentTarget.style.backgroundColor = '#004080'} // Darker shade on hover
          onMouseOut={(e) => e.currentTarget.style.backgroundColor = '#61dafb'} // Original color
          onFocus={(e) => e.currentTarget.style.backgroundColor = '#004080'} // Darker shade on focus
          onBlur={(e) => e.currentTarget.style.backgroundColor = '#61dafb'} // Original color
        >
          Send Message
        </button>
      </form>
    </div>
  );
}

export default Contact;
