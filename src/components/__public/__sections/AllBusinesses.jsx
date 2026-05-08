import { UilArrowRight } from '@iconscout/react-unicons';
import { Link, useNavigate } from 'react-router-dom';
import biz1 from './../../../assets/images/ourbusiness/Ride.jpg';
import biz2 from './../../../assets/images/ourbusiness/Food.jpg';
import biz3 from './../../../assets/images/ourbusiness/Travels.jpg';
import biz4 from './../../../assets/images/ourbusiness/biz4.jpg';
import placeholder from './../../../assets/images/otherpages/investor.jpg';
import Header from '../__layouts/Header';
import Banner_otherpages from '../__sections/_Banner_otherpages';
import image from './../../../assets/images/corepurpose/core_purpose__.jpg';

const AllBusinesses = () => {
  const navigate = useNavigate();
  const categories = [

  {
    title: 'Festrut Global Shelter Ltd',
    description: 'Providing affordable and premium housing solutions with a focus on modern, sustainable living.',
    image: biz1,
    slug: 'festrut-global-shelter',
  },
  {
    title: 'Festrut Communication Limited',
    description: 'Delivering innovative communication and media solutions for businesses and communities.',
    image: biz2,
    slug: 'festrut-communication',
  },
  {
    title: 'Festrut Oil and Gas Ltd',
    description: 'Driving energy solutions through exploration, supply, and distribution in the oil and gas sector.',
    image: biz3,
    slug: 'festrut-oil-gas',
  },
  {
    title: 'Festrut Transport Nig Ltd',
    description: 'Providing reliable and efficient transport services for individuals and businesses.',
    image: biz4,
    slug: 'festrut-transport',
  },
  {
    title: 'Festrut African Talent Hunt',
    description: 'Empowering and discovering talents across Africa through structured platforms and opportunities.',
    image: placeholder,
    slug: 'festrut-talent-hunt',
  },
  {
    title: 'Festrut Charity Foundation',
    description: 'Driving humanitarian initiatives and community development through impactful programs.',
    image: placeholder,
    slug: 'festrut-charity',
  },
  {
    title: 'Festrut Courier Services Limited',
    description: 'Fast, secure, and reliable delivery services for parcels and logistics needs.',
    image: placeholder,
    slug: 'festrut-courier',
  },
  {
    title: 'Festrut Security Guards Limited',
    description: 'Providing professional security services to protect lives, properties, and assets.',
    image: placeholder,
    slug: 'festrut-security',
  },
  {
    title: 'Festrut Shopping Mall',
    description: 'A modern retail hub offering a wide range of products and services for everyday needs.',
    image: placeholder,
    slug: 'festrut-shopping-mall',
  },
  {
    title: 'Festrut Hospital & Laboratory Services',
    description: 'Delivering quality healthcare and diagnostic services with modern medical facilities.',
    image: placeholder,
    slug: 'festrut-hospital',
  },
  {
    title: 'Festrut Food and Drink International Ltd',
    description: 'Providing quality food and beverage services with a focus on taste and hygiene.',
    image: placeholder,
    slug: 'festrut-food-drink',
  },
  {
    title: 'Festrut Construction Ltd',
    description: 'Building durable and innovative structures with excellence in construction and engineering.',
    image: placeholder,
    slug: 'festrut-construction',
  },
  {
    title: 'Festrut Consultant Ltd',
    description: 'Offering expert advisory services across business, management, and development sectors.',
    image: placeholder,
    slug: 'festrut-consultant',
  },
  {
    title: 'Festrut International Management Institute',
    description: 'Providing professional training and leadership development for individuals and organizations.',
    image: placeholder,
    slug: 'festrut-management-institute',
  },
  {
    title: 'Festrut Facility and Development Firm Ltd',
    description: 'Managing and developing facilities with a focus on efficiency and sustainability.',
    image: placeholder,
    slug: 'festrut-facility-development',
  },
  {
    title: 'First Klass Hospital and Laboratory Service',
    description: 'Delivering premium healthcare and laboratory services with a commitment to excellence.',
    image: placeholder,
    slug: 'first-klass-hospital',
  },
  {
    title: 'Prestigious Elites Organization (PELITES)',
    description: 'A platform for leadership, networking, and elite community development initiatives.',
    image: placeholder,
    slug: 'pelites',
  },
  {
    title: 'Hall of Mercy',
    description: 'Focused on compassion-driven outreach and humanitarian support for the less privileged.',
    image: placeholder,
    slug: 'hall-of-mercy',
  },
  {
    title: 'Festrut Lead University Foundation',
    description: 'Promoting research, education, and innovation to solve institutional and societal challenges.',
    image: placeholder,
    slug: 'festrut-lead-foundation',
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