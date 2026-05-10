import { UilArrowRight } from '@iconscout/react-unicons';
import { Link, useNavigate } from 'react-router-dom';
import biz1 from './../../../assets/images/ourbusiness/Ride.jpg';
import placeholder from './../../../assets/images/otherpages/investor.jpg';

const OurBusiness = () => {
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
    <div className="sections" id="ourbusiness">
        <h2>Our Business</h2>
        <p>Festrut Group is a dynamic network of diversified subsidiaries committed to improving everyday life through innovative and value-driven services. We have evolved from traditional operations into a modern, structured enterprise, delivering essential solutions across real estate, construction, healthcare, logistics, energy, and social development for both local and international communities.
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
        <p><b><Link to="/all-businesses" style={{ color: '#333' }}>View All Our Businesses <UilArrowRight /></Link></b></p>
      </div>
    </div>
    </>
  )
}
export default OurBusiness;