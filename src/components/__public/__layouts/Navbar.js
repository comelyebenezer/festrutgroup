import { useState, useEffect } from 'react';
import { UilApps, UilAngleDown } from '@iconscout/react-unicons';
import { Link, useLocation } from 'react-router-dom';
import logo from '../../../assets/images/logo/festrut-logo.png';
import { UilPhone } from '@iconscout/react-unicons';

const Navbar = () => {
  const location = useLocation();

  const categories = [
     {
      title: 'Festrut Oil and Gas',
      slug: 'festrut-oil-and-gas',
    },
    {
      title: 'Festrut Communication Limited',
      slug: 'festrutcommunicationLimited',
    },
    {
      title: 'Festrut Transport Nig Ltd',
      slug: 'festruttransportnigltd',
    },
    {
      title: 'Festrut African Talent Hunt',
      slug: 'festrut-african-talent-hunt',
    },
    {
      title: 'Festrut Shopping Mall',
      slug: 'festrutshoppingmall',
    },
    {
      title: 'Festrut Apartments',
      slug: 'festrutapartments',
    },
    {
      title: ' Festrut Security Guards Limited',
      slug: 'festrutsecurityguardslimited',
    },
    {
      title: 'Festrut Construction Ltd',
      slug: 'festrutconstructionltd',
    },
    {
      title: 'Festrut Facility and Development Firm Ltd',
      slug: 'festrutfacilityanddevelopmentfirmltd',
    },
    {
      title: 'Festrut Consultant Ltd',
      slug: 'festrutconsultantltd',
    },
    {
      title: 'Festrut Klass Hospital and Laboratory Services',
      slug: 'festrutklasshospitalandlaboratoryservices',
    },
    {
      title: 'Festrut Charity Foundation',
      slug: 'festrutcharityfoundation',
    },
    {
      title: 'Festrut Courier Services Limited',
      slug: 'festrutcourierserviceslimited',
    },
    {
      title: 'Festrut Hospital and Laboratory Service',
      slug: 'festruthospitalandlaboratoryservice',
    },
    {
      title: 'Festrut Lead University Foundation',
      slug: 'festrutleaduniversityfoundation',
    },
    {
      title: 'Festrut International Manager Institute',
      slug: 'festrutinternationalmanagerinstitute',
    },
    {
      title: 'Prestigious Elites Organization',
      slug: 'prestigiouselitesorganization',
    },
    {
      title: 'Festrut Food and Drink International Ltd',
      slug: 'festrutfoodanddrinkinternationalltd',
    }, 
  ];

  useEffect(() => {
    // Scroll to the top of the page on route change
    window.scrollTo({ top: 0, behavior: 'smooth' });
  
    // If there's a hash in the location, scroll to the associated element
    if (location.hash) {
      const element = document.getElementById(location.hash.replace('#', ''));
      if (element) {
        element.scrollIntoView({ behavior: 'smooth' });
      }
    }
  }, [location]);

  const [isOpen, setIsOpen] = useState(false);
  const [openDropdown, setOpenDropdown] = useState(null);

  const toggleDropdown = (dropdownId) => {
    setOpenDropdown(openDropdown === dropdownId ? null : dropdownId);
  };

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (!event.target.closest('.menu-item')) {
        setOpenDropdown(null);
      }
    };

    document.addEventListener('click', handleClickOutside);
    return () => document.removeEventListener('click', handleClickOutside);
  }, []);

  const toggleMenu = () => {
    setIsOpen((open) => !open);
  };

  return (
    <nav className="navbar">
      <Link to="/" id="logo">
        <img src={logo} className="logo" title="Festrut Group Logo" alt="Festrut Group Logo" />

        <div title="Welcome to Festrut Group">
          Festrut <span>Group</span>
        </div>
      </Link>

     
      <li className="dvs-header__trigger" onClick={toggleMenu}><UilApps /></li>

      <ul className={`menu ${isOpen ? 'is-open' : ''}`}>
        <li className="menu-item" title="Click to browse company">
          <button
            onClick={() => toggleDropdown('company')}
            className={`menu-button ${openDropdown === 'company' ? 'active' : ''}`}
          >
            Company<span className={`caret ${openDropdown === 'company' ? 'rotate' : ''}`}><UilAngleDown /></span>
          </button>
          {openDropdown === 'company' && (
            <div className="dropdown">
              <div className="dropdown-content">
                <ul>
                  <li><Link to="/about">About Us</Link></li>
                  <li><Link to="/about#core_values">Services</Link></li>
                  <li><Link to="/about#commitment_to_sustainability">Achievements</Link></li>
                  <li><Link to="/footer">Contact</Link></li>
                  <li><Link to="/footer">Book Inspection</Link></li>
                 
                  
                </ul>
              </div>
            </div>
          )}
        </li>

        <li className="menu-item" title="Browse our businesses">
          <button onClick={() => toggleDropdown('ourBusiness')} className="menu-button">
            Our Business<span className={`caret ${openDropdown === 'ourBusiness' ? 'rotate' : ''}`}><UilAngleDown /></span>
          </button>
          {openDropdown === 'ourBusiness' && (
            <div className="dropdown">
              <div className="dropdown-content">
                
                <ul>
                {categories.map((categ, index) => (
                  categ && (
                    <li key={index}>
                      <Link 
                        to="/all-businesses" 
                        onClick={() => { setIsOpen(false); setOpenDropdown(null); }}
                      >
                        {categ.title}
                      </Link>
                    </li>
                  )
                ))}
                </ul>
                  
              </div>
            </div>
          )}
        </li>
       
        <li className="menu-item" title="Browse our careers">
          <Link to="/careers" className="menu-button" id="careers">Careers</Link>
        </li>
        <li className="menu-item" title="Media">
          <button onClick={() => toggleDropdown('media')} className="menu-button">
            Media<span className={`caret ${openDropdown === 'media' ? 'rotate' : ''}`}><UilAngleDown /></span>
          </button>
          {openDropdown === 'media' && (
            <div className="dropdown">
              <div className="dropdown-content">
                <ul>
                  <li><Link to="/footer" onClick={() => { setIsOpen(false); setOpenDropdown(null); }}>Blog</Link></li>
                  <li><Link to="/faq" onClick={() => { setIsOpen(false); setOpenDropdown(null); }}>FAQ</Link></li>
                  <li><Link to="/gallery" onClick={() => { setIsOpen(false); setOpenDropdown(null); }}>Gallery</Link></li>
                </ul>
              </div>
            </div>
          )}
        </li>

 {/* <li> Login </li> */}

         <li className="menu-item" title="Browse Login  opportunities">
          <button onClick={() => toggleDropdown('Login ')} className="menu-button">
            Login <span className={`caret ${openDropdown === 'Login ' ? 'rotate' : ''}`}><UilAngleDown /></span>
          </button>
          {openDropdown === 'Login ' && (
            <div className="dropdown">
              <div className="dropdown-content">
                <ul>
                  <li><Link to="/buy-shares">Client</Link></li>
                  <li><Link to="/invest-with-us">Staff</Link></li>
      
            
                </ul>
              </div>
            </div>
          )}
        </li>

        

{/* <li> Register </li> */}

         <li className="menu-item" title="Browse Register  opportunities">
          <button onClick={() => toggleDropdown('Register ')} className="menu-button">
            Register <span className={`caret ${openDropdown === 'Register ' ? 'rotate' : ''}`}><UilAngleDown /></span>
          </button>
          {openDropdown === 'Register ' && (
            <div className="dropdown">
              <div className="dropdown-content">
                <ul>
                  <li><Link to="/buy-shares">Client</Link></li>
                  <li><Link to="/invest-with-us">Earn with us</Link></li>
                  {/* <li><Link to="/investor-signup">Investor Signup</Link></li> */}

            
                </ul>
              </div>
            </div>
          )}
        </li>
      </ul>

      <div className="contacts">
        {/* <div className="footer-link">
          <p style={{ lineHeight: '40px'}}><a href="tel:+23409169740288" title="Call our Hotline" className="_070Festrut mb-0"><span><UilPhone /> 0916-974-0288</span></a></p>
        </div> */}
        <div style={{ fontSize: '16px' }}>
          <a href="#footer" title="Contact us" className="Festruttech-button swipe-button">Earn with us</a>
        </div>
        
      </div>

    
    </nav>
  );
};

export default Navbar;
