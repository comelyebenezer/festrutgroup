import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { Helmet } from 'react-helmet';
import Header from '../../__public/__layouts/Header';
import Banner_otherpages from '../../__public/__sections/_Banner_otherpages';
import image from '../../../assets/images/otherpages/investmentwithroi.jpg';

const PasswordPolicy = (props) => {
  useEffect(() => {
      document.title = `${props.company} — Password Policy`;
  }, []);

  return (
  <>     
  <Helmet>
    <script src="/js/bootstrap.min.js"></script>
  </Helmet>

  <Header />    
  <Banner_otherpages title="Password Policy" image={image} />

  <div className="sections" id="ourcorepurpose">
    <h2>Password Policy</h2>

    <div className="sections" id="about_people">
      <div className="text-center">
          <p></p>

        <ol>
          <li>Password Requirements</li>
          <ul>
            <li>Minimum Length: Passwords must be a minimum of 8 characters in length.</li>
            <li>Recommended Length: It is recommended that passwords be 15 characters or more for strong security.</li>
            <li>Passphrase Support: Passphrases up to 64 characters are supported and encouraged for enhanced security.</li>
          </ul>
        </ol>
        
        
       cf

      </div>
    </div>
  </div>
    </>
   );
 }
export default PasswordPolicy;      
