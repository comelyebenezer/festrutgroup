import { useParams, Link, useNavigate } from 'react-router-dom';
import { UilArrowLeft } from '@iconscout/react-unicons';
import biz1 from './../../../assets/images/ourbusiness/Ride.jpg';
import placeholder from './../../../assets/images/otherpages/investor.jpg';
import Header from '../__layouts/Header';
import Banner_otherpages from './_Banner_otherpages';
    
const BusinessDetail = () => {
  const { slug } = useParams();
  const navigate = useNavigate();

  const categoryDetails = {
    'festrut-global-shelter': {
      title: 'Festrut Global Shelter Nig Ltd',
      image: biz1,
      website: '#',
      description: 'Providing safe, affordable, and premium housing solutions designed for modern living and long-term investment.',
      details: `Festrut Global Shelter Nig Ltd is a premier real estate company dedicated to providing affordable and premium housing solutions with a focus on modern, sustainable living. We specialize in the development of residential and commercial properties that meet the highest standards of quality, safety, and comfort.

Our portfolio includes a diverse range of properties designed to cater to various needs and budgets, from affordable housing units for first-time homeowners to luxury estates for discerning clients. Each property is carefully planned and executed to ensure durability, functionality, and aesthetic appeal.

At Festrut Global Shelter, we believe that everyone deserves access to quality housing. Our commitment to excellence, transparency, and customer satisfaction drives every aspect of our operations, from land acquisition and construction to property management and after-sales support.`,
    },
    'festrut-charity': {
      title: 'Festrut Charity Foundation',
      image: placeholder,
      website: '#',
      description: 'Driving humanitarian initiatives and community development through impactful programs.',
      details: `Festrut Charity Foundation is the philanthropic arm of Festrut Group, dedicated to making a meaningful difference in the lives of individuals and communities. We focus on key areas including education, healthcare, poverty alleviation, and community development.

Our initiatives are designed to address pressing social challenges and create sustainable impact. From providing educational scholarships and healthcare support to organizing community outreach programs and emergency relief efforts, we are committed to being a force for positive change.

Through strategic partnerships and the generous support of donors and volunteers, Festrut Charity Foundation continues to touch lives and build hope across communities in need.`,
    },
    'festrut-management-institute': {
      title: 'Festrut International Management Institute',
      image: placeholder,
      website: '#',
      description: 'Providing professional training and leadership development for individuals and organizations.',
      details: `Festrut International Management Institute is a premier institution dedicated to providing professional training, leadership development, and capacity building programs. We offer a range of courses and certifications designed to equip individuals and organizations with the skills and knowledge needed to succeed in today's competitive business environment.

Our programs cover various areas including management, leadership, finance, marketing, human resources, and entrepreneurship. We employ experienced facilitators and use modern teaching methodologies to ensure effective learning outcomes.

Festrut International Management Institute is committed to developing the next generation of leaders and professionals who will drive growth and innovation in their respective fields.`,
    },
  };

  const category = categoryDetails[slug];

  if (!category) {
    return (
      <>
        <Header />
        <Banner_otherpages title="Business" image={placeholder} />
        <div className="sections" id="whoweare" style={{ textAlign: 'center' }}>
          <h2>Business not found</h2>
          <p>The business you are looking for does not exist or may have been removed.</p>
          <Link to="/" className="smashtech-button swipe-button">Back to Homepage</Link>
        </div>
      </>
    );
  }

  return (
    <>
    <Header />
    <Banner_otherpages title={category.title} image={category.image} />

    <div className="sections business-detail" id="whoweare">
      <h2>{category.title}</h2>
      <h3>{category.description}</h3>
      <p>{category.details}</p>
      <div style={{ display: 'flex', gap: '1rem', justifyContent: 'center', flexWrap: 'wrap' }}>
        <button onClick={() => navigate(-1)} className="smashtech-button swipe-button" style={{ cursor: 'pointer' }}><UilArrowLeft /> Back</button>
      </div>
    </div>
    </>
  );
};
export default BusinessDetail;