import React from 'react';
import { UilEnvelope } from '@iconscout/react-unicons';

const Newsletter = () => {
  return (
    <div className="sections newsletter-section">
      <div className="c2 c1-sm c1-xs tester">
        <div className="newsletter-text">
          <h2 style={{ textAlign: 'left', width: '100%', margin: '0' }}>Subscribe to our <span>Newsletter</span></h2>
          <p style={{ textAlign: 'left', marginBlock: '1rem', width: '100%' }}>
            Stay updated with our latest news, business updates, and investment opportunities delivered straight to your inbox.
          </p>
        </div>
        <div className="newsletter-action">
          <form className="newsletter-form" onSubmit={(e) => e.preventDefault()}>
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