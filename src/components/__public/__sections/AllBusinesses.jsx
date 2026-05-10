import { UilArrowRight } from '@iconscout/react-unicons';
import { Link, useNavigate } from 'react-router-dom';
import biz1 from './../../../assets/images/ourbusiness/Ride.jpg';
import placeholder from './../../../assets/images/otherpages/investor.jpg';
import Header from '../__layouts/Header';
import Banner_otherpages from '../__sections/_Banner_otherpages';
import image from './../../../assets/images/corepurpose/core_purpose__.jpg';

const AllBusinesses = () => {
  const navigate = useNavigate();
  const categories = [
    {
      title: 'Festrut Global Shelter Nig Ltd',
      description: 'Providing safe, affordable, and premium housing solutions designed for modern living and long-term investment.',
      image: biz1,
      slug: 'festrut-global-shelter',
    },
    {
      title: 'Festrut Charity Foundation',
      description: 'Driving humanitarian initiatives and community development through impactful programs.',
      image: placeholder,
      slug: 'festrut-charity',
    },
    {
      title: 'Festrut International Management Institute',
      description: 'Providing professional training and leadership development for individuals and organizations.',
      image: placeholder,
      slug: 'festrut-management-institute',
    },
  ];

  return (
    <>    
    <Header />
    <Banner_otherpages title="Our Businesses" image={image} />

    <div className="sections" id="ourbusiness">
        <h2>All Our Businesses</h2>
        <p>Festrut Group is a diversified conglomerate delivering integrated solutions across real estate, construction, healthcare, logistics, energy, security, and social development. Through our network of subsidiaries, we provide essential services designed to improve lives, drive growth, and create lasting value for individuals and communities both locally and internationally.
        </p>
        
      <div className="c3 c2-sm c1-xs" id="cover">
      
        {categories.map((categ, index) => (
          <div key={index} className="business-container" onClick={() => navigate(`/business/${categ.slug}`)}>
            <img src={categ.image} title="" alt="" />
            <h3 style={{ textAlign: 'left' }}>{categ.title}</h3>
            <p>{categ.description}</p>
            <span className="read-more-trigger">Learn more <UilArrowRight /></span>
          </div>
        ))}
      </div>

      <div className="text-center">
        <p><b><Link to="/" style={{ color: '#333' }}>Back to Homepage <UilArrowRight /></Link></b></p>
      </div>
    </div>
    </>
  )
}
export default AllBusinesses;