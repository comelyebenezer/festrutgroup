import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { Helmet } from 'react-helmet';
import Header from '../../__public/__layouts/Header';
import Banner_otherpages from '../../__public/__sections/_Banner_otherpages';
import image from '../../../assets/images/otherpages/investmentwithroi.jpg';

const PrivacyPolicy = (props) => {
  useEffect(() => {
      document.title = `${props.company} — Privacy Policy`;
  }, []);

  return (
  <>     
  <Helmet>
    <script src="/js/bootstrap.min.js"></script>
  </Helmet>

  <Header />    
  <Banner_otherpages title="Privacy Policy" image={image} />

  <div className="sections" id="ourcorepurpose">
    <h2>Privacy Policy</h2>

    <div className="sections" id="about_people">
      <div className="text-center">
          <p>Text here</p>
      </div>
    </div>
  </div>
    </>
   );
 }
export default PrivacyPolicy;      
