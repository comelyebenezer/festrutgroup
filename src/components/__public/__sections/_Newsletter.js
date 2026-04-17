import React, { useState } from 'react';
import { UilEnvelope } from '@iconscout/react-unicons';

const Newsletter = () => {
  const [email, setEmail] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    if (email) {
      alert(`Thank you for subscribing! We'll send updates to ${email}`);
      setEmail('');
    } else {
      alert('Please enter a valid email address.');
    }
  };

  return (
    <section className="newsletter-section">
      <div className="sections">
        <div className="newsletter-text">
          <h2>Subscribe to our <span>Newsletter</span></h2>
          <p>Stay updated with the latest news, insights, and updates from Smash Technology Group.</p>
        </div>
        <form onSubmit={handleSubmit} className="input-group-custom">
          <UilEnvelope className="mail-icon" />
          <input 
            type="email" 
            placeholder="Enter your email address" 
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
          <button type="submit" className="smashtech-button">Subscribe</button>
        </form>
      </div>
    </section>
  );
};

export default Newsletter;