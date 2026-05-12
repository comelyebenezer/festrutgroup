import { useState } from 'react';
import { UilFacebook, UilInstagram, UilWhatsapp, UilEnvelope, UilPhone, UilYoutube } from '@iconscout/react-unicons';
import { UilTimes } from '@iconscout/react-unicons';
import { Link } from 'react-router-dom';
import logo from '../../../assets/images/logo/footer-logo.png';

const Footer = () => {
  const [showLaunchModal, setShowLaunchModal] = useState(false);
  const categories = [
   
    {
      title: 'Festrut Charity Foundation',
      slug: 'festrutcharityfoundation',
    },
                    ,
    {
      title: 'Festrut International Manager Institute',
      slug: 'festrutinternationalmanagerinstitute',
    },  
     {
      title: 'Festrut Global Shelter Nigeria Ltd',
      slug: 'festrutglobalshelternigerialtd',
    },                  ,                ,
  ];

  return (
    <>
    <div className="sections footer" id="footer">
      <div className="row">
          <div className="col-md-6 col-lg-3">
              <div className="footer-about">
                <h2 className="p-0">Location</h2>
                <h5 style={{ color: '#eee' }}>Corporate Headquarters, <br />Abuja</h5>
                <p className="mt-2">Plot 2311, Festrut Corporate Headquaters, <br />Festrut Estate, Katampe, <br />Abuja, Nigeria.</p>
              
                <h5 style={{ color: '#eee' }}>Nasarawa Office</h5>
                <p className="mt-2 mb-2">Site Office ,Festrut Street, Festrut Kingdom Estate, Badna Orozo<br />Nasarawa, Nigeria. </p>
              </div>
          </div>
          <div className="col-md-6 col-lg-9">
              <div className="row">                                
                  <div className="col-sm-6 col-md-6 col-lg-4">
                      <div className="footer-link">
                          <h2>Company</h2>
                          <Link to="/">Home</Link>
                          <Link to="/about">About Us</Link>
                          <a href="/all-businesses">Our Businesses</a>
                          <Link to="/careers">Career</Link>
                          <Link to="/gallery">Media</Link>
                          <a href="#!" onClick={(e) => { e.preventDefault(); setShowLaunchModal(true); }} className="earn-footer-link">Earn with us</a>
                          <Link to="/blog">Blog</Link>
                          <Link to="/#faq">FAQ</Link>
                          
                          <div className="footer-link">
                            <p style={{ lineHeight: '40px'}}><a href="tel:+23409169740288" title="Call our Hotline" className="_070smash mb-0"><span>OUR HOTLINE</span><br />
                            <UilPhone /> 0809-176-9651</a></p>
                          </div>
                          {/* </div> */}
                      </div>
                  </div>
                  <div className="col-sm-6 col-md-6 col-lg-4">
                      <div className="footer-link">
                          <h2>Our Businesses</h2>

                          {categories.map((categ, index) => (
                            <div key={index}>
                              <Link to={`/business/${categ.slug}`}>{categ.title}</Link> 
                            </div>
                          ))}
                          
                      </div>
                  </div>
                  <div className="col-sm-6 col-md-6 col-lg-4">
                      <div className="footer-link">
                          <h2>Contact Us</h2>                         
                          
                          <a href="tel:+234809-176-9651" title="Click to call" className="0809-176-9651 mb-0">080<span>FESTRUT</span></a>

                          <p className="branch-labels">Corporate Head Office</p>

                          {/* <a href="tel:+234809-176-9651" title="Call"><UilPhone />  */}
                          <a href="tel:+234809-176-9651" title="Call Us"><UilPhone /> +234 809-176-9651</a>

                          <a href="https://wa.me/2348091769651" title="Chat Festrut Group on WhatsApp"><UilWhatsapp /> +234 8091769651 (Festrut Group)</a>
                          
                          <a href="https://wa.me/+2348090222043" title="Chat Festrut Group on WhatsApp"><UilWhatsapp /> +234 8090222043 (Festrut Group)</a>

                          <a href="https://wa.me/+2348188881854" title="Chat Festrut Customercare line on WhatsApp"><UilWhatsapp /> +234 8188881854 (Festrut Customercare line)</a>
                          
                          <p className="branch-labels">Nasarawa Business Office</p>
                          <a href="tel:+2348188881852" title="Call Nasarawa Office"> <UilPhone /> +234 8188881852</a><br />

                          <a href="mailto:info@festrutgroup.com" title="Email us - Info"><UilEnvelope /> info@festrutgroup.com</a>
                          <a href="mailto:support@festrutgroup.com" title="Email us - Support"><UilEnvelope /> support@festrutgroup.com</a>
                          
                          <div style={{ display: 'flex', gap: '1rem', alignItems: 'center' }}>
                            <a href="https://www.tiktok.com/@festrutgroup" title="Follow us on TikTok" style={{ fontSize: '20px' }}>TikTok</a>
                            <a href="https://web.facebook.com/festrutgroup"><UilFacebook /></a>
                            <a href="https://www.instagram.com/festrut_group"><UilInstagram /></a>
                            <a href="https://www.youtube.com/@festrutgroupltd" title="Subscribe to our YouTube channel"><UilYoutube /></a>
                            <a href="https://wa.me/+2348091769651" title="Click to chat on WhatsApp"><UilWhatsapp /></a>
                          </div>
                      </div>
                  </div>
              </div>
          </div>
      </div>
      
      <hr />

      <div className="footer-menu">
        <div className="row">
          <div className="col-md-6">
            <Link to="/" id="logo">
              <img src={logo} style={{width: '50px', height: '50px' }} title="Logo" alt="Logo" />
            </Link>
            Copyright &copy; Festrut Group. All Rights Reserved. 
          </div>
          <div className="col-md-6 footer-menu">
            <div className="f-menu">
              <Link to="/privacypolicy" style={{ color: '#eee' }}>Privacy Policy</Link>
              <Link to="/termsandconditions" style={{ color: '#eee' }}>Terms of Use</Link>
              <Link to="/passwordpolicy" style={{ color: '#eee' }}>Password Policy</Link>
            </div>
          </div>
        </div>
      </div>
    </div>

      {showLaunchModal && (
        <div className="launch-modal-overlay" onClick={() => setShowLaunchModal(false)}>
          <div className="launch-modal" onClick={e => e.stopPropagation()}>
            <button className="launch-modal-close" onClick={() => setShowLaunchModal(false)}><UilTimes /></button>
            <div className="launch-modal-icon">🚀</div>
            <h2>Launching Soon</h2>
            <p className="launch-modal-sub">We're working on something exciting!</p>
            <p className="launch-modal-body">
              Our "Earn with Us" program is currently under development. We're crafting a seamless experience that will let you partner with Festrut Group and earn rewarding returns. Stay tuned — we'll be launching very soon!
            </p>
            <div className="launch-modal-dots">
              <span></span><span></span><span></span>
            </div>
            <button className="launch-modal-btn" onClick={() => setShowLaunchModal(false)}>Got it!</button>
          </div>
        </div>
      )}
  </>
  )
}
export default Footer;