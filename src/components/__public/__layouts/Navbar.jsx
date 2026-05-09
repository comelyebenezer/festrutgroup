import { useState, useEffect } from 'react';
import { UilBars, UilTimes, UilAngleDown } from '@iconscout/react-unicons';
import { Link, useLocation } from 'react-router-dom';
import logo from '../../../assets/images/logo/festrut-logo.png';

const Navbar = () => {
  const location = useLocation();

  const categories = [
    {
      title: 'Festrut Oil and Gas',
      slug: 'festrut-oil-gas',
    },
    {
      title: 'Festrut Communication Limited',
      slug: 'festrut-communication',
    },
    {
      title: 'Festrut Transport Nig Ltd',
      slug: 'festrut-transport',
    },
    {
      title: 'Festrut African Talent Hunt',
      slug: 'festrut-talent-hunt',
    },
    {
      title: 'Festrut Shopping Mall',
      slug: 'festrut-shopping-mall',
    },
    {
      title: 'Festrut Apartments',
      slug: '',
    },
    {
      title: 'Festrut Security Guards Limited',
      slug: 'festrut-security',
    },
    {
      title: 'Festrut Construction Ltd',
      slug: 'festrut-construction',
    },
    {
      title: 'Festrut Facility and Development Firm Ltd',
      slug: 'festrut-facility-development',
    },
    {
      title: 'Festrut Consultant Ltd',
      slug: 'festrut-consultant',
    },
    {
      title: 'Festrut Klass Hospital and Laboratory Services',
      slug: 'first-klass-hospital',
    },
    {
      title: 'Festrut Charity Foundation',
      slug: 'festrut-charity',
    },
    {
      title: 'Festrut Courier Services Limited',
      slug: 'festrut-courier',
    },
    {
      title: 'Festrut Hospital and Laboratory Service',
      slug: 'festrut-hospital',
    },
    {
      title: 'Festrut Lead University Foundation',
      slug: 'festrut-lead-foundation',
    },
    {
      title: 'Festrut International Management Institute',
      slug: 'festrut-management-institute',
    },
    {
      title: 'Prestigious Elites Organization',
      slug: 'pelites',
    },
    {
      title: 'Festrut Food and Drink International Ltd',
      slug: 'festrut-food-drink',
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

  const closeMenu = () => {
    setIsOpen(false);
    setOpenDropdown(null);
  };

  useEffect(() => {
    document.body.style.overflow = isOpen ? 'hidden' : '';
    return () => { document.body.style.overflow = ''; };
  }, [isOpen]);

  return (
    <nav className="navbar">
      <Link to="/" id="logo">
        <img src={logo} className="logo" title="Festrut Group Logo" alt="Festrut Group Logo" />

        <div title="Welcome to Festrut Group">
          Festrut <span>Group</span>
        </div>
      </Link>

     
      <li className="dvs-header__trigger" onClick={toggleMenu}>
        {isOpen ? <UilTimes /> : <UilBars />}
      </li>

      <div className={`menu-overlay ${isOpen ? 'is-visible' : ''}`} onClick={closeMenu} />

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
                  <li><Link to="/about" onClick={closeMenu}>About Us</Link></li>
                  <li><Link to="/about#core_values" onClick={closeMenu}>Services</Link></li>
                  <li><Link to="/about#commitment_to_sustainability" onClick={closeMenu}>Achievements</Link></li>
                  <li><Link to="/footer" onClick={closeMenu}>Contact</Link></li>
                  <li><Link to="/footer" onClick={closeMenu}>Book Inspection</Link></li>
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
                        to={categ.slug ? `/business/${categ.slug}` : '/all-businesses'} 
                        onClick={closeMenu}
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
                  <li><Link to="/footer" onClick={closeMenu}>Blog</Link></li>
                  <li><Link to="/faq#faq" onClick={closeMenu}>FAQ</Link></li>
                  <li><Link to="/gallery" onClick={closeMenu}>Gallery</Link></li>
                </ul>
              </div>
            </div>
          )}
        </li>

 {/* <li> Login </li> */}

        <li className="menu-item" title="Browse Login opportunities">
          <button onClick={() => toggleDropdown('Login')} className="menu-button">
            Login <span className={`caret ${openDropdown === 'Login' ? 'rotate' : ''}`}><UilAngleDown /></span>
          </button>
          {openDropdown === 'Login' && (
            <div className="dropdown">
              <div className="dropdown-content">
                <ul>
                  <li><Link to="/buy-shares" onClick={closeMenu}>Client</Link></li>
                  <li><Link to="/invest-with-us" onClick={closeMenu}>Staff</Link></li>
                </ul>
              </div>
            </div>
          )}
        </li>

        

{/* <li> Register </li> */}

         <li className="menu-item" title="Browse Register opportunities">
          <button onClick={() => toggleDropdown('Register')} className="menu-button">
            Register <span className={`caret ${openDropdown === 'Register' ? 'rotate' : ''}`}><UilAngleDown /></span>
          </button>
          {openDropdown === 'Register' && (
            <div className="dropdown">
              <div className="dropdown-content">
                <ul>
                  <li><Link to="/buy-shares" onClick={closeMenu}>Client</Link></li>
                  <li><Link to="/invest-with-us" onClick={closeMenu}>Earn with us</Link></li>
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
