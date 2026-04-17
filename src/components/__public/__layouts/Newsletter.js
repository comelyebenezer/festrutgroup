import React from 'react';
import { UilEnvelope } from '@iconscout/react-unicons';

const Newsletter = () => {
  return (
    <div className="sections newsletter-section">
      <div className="row align-items-center">
        <div className="col-lg-6 newsletter-text"> 
          <h2>Subscribe to our <span>Newsletter</span></h2>
          <p>Stay updated with our latest news, business opportunities, and exclusive offers delivered straight to your inbox.</p>
        </div>
        <div className="col-lg-6">
          <form onSubmit={(e) => e.preventDefault()}>
            <div className="input-group-custom">
              <UilEnvelope className="mail-icon" />
              <input type="email" placeholder="Enter your email address" required />
              <button type="submit" className="smashtech-button">Subscribe</button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Newsletter;