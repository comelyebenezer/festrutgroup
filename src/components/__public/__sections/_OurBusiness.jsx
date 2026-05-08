import { UilArrowRight } from '@iconscout/react-unicons';
import { Link, useNavigate } from 'react-router-dom';
import biz1 from './../../../assets/images/ourbusiness/Ride.jpg';
import biz2 from './../../../assets/images/ourbusiness/Food.jpg';
import biz3 from './../../../assets/images/ourbusiness/Travels.jpg';

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
  title: 'Festrut Communication Ltd',
  description: 'Delivering reliable communication and media solutions that connect businesses and communities effectively.',
  image: biz2,
  slug: 'festrut-communication',
},
{
  title: 'Festrut Oil & Gas Ltd',
  description: 'Driving sustainable energy solutions through efficient exploration, supply, and distribution services.',
  image: biz3,
  slug: 'festrut-oil-gas',
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