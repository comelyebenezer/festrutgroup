import { useParams, Link, useNavigate } from 'react-router-dom';
import { UilArrowLeft } from '@iconscout/react-unicons';
import biz1 from './../../../assets/images/ourbusiness/Ride.jpg';
import biz2 from './../../../assets/images/ourbusiness/Food.jpg';
import biz3 from './../../../assets/images/ourbusiness/Travels.jpg';
import biz4 from './../../../assets/images/ourbusiness/biz4.jpg';
import placeholder from './../../../assets/images/otherpages/investor.jpg';
import Header from '../__layouts/Header';
import Banner_otherpages from './_Banner_otherpages';
    
const BusinessDetail = () => {
  const { slug } = useParams();
  const navigate = useNavigate();

  // Data for each category
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
    'festrut-communication': {
      title: 'Festrut Communication Limited',
      image: biz2,
      website: '#',
      description: 'Delivering reliable communication and media solutions that connect businesses and communities effectively.',
      details: `Festrut Communication Limited is a forward-thinking telecommunications and media company committed to bridging the communication gap across Nigeria and beyond. We provide innovative communication solutions including internet services, digital media, and broadcast solutions designed to connect businesses, communities, and individuals.

Our services are tailored to meet the evolving needs of the modern digital landscape, ensuring reliable connectivity, seamless communication, and access to quality media content. We leverage cutting-edge technology and industry best practices to deliver exceptional value to our clients.

Whether it's through high-speed internet connectivity, digital advertising, or content creation, Festrut Communication Limited is your trusted partner for all your communication and media needs.`,
    },
    'festrut-oil-gas': {
      title: 'Festrut Oil and Gas Ltd',
      image: biz3,
      website: '#',
      description: 'Driving sustainable energy solutions through efficient exploration, supply, and distribution services.',
      details: `Festrut Oil and Gas Ltd is a dynamic energy company engaged in the exploration, production, refining, and distribution of petroleum products. We are committed to driving sustainable energy solutions that power industries, businesses, and communities across the region.

Our operations adhere to the highest standards of safety, environmental responsibility, and operational excellence. We leverage advanced technology and industry expertise to optimize our processes and deliver reliable energy products to our customers.

From upstream exploration to downstream distribution, Festrut Oil and Gas Ltd is building a vertically integrated energy platform that contributes to energy security and economic development while creating long-term value for our stakeholders.`,
    },
    'festrut-transport': {
      title: 'Festrut Transport Nig Ltd',
      image: biz4,
      website: '#',
      description: 'Providing reliable and efficient transport services for individuals and businesses.',
      details: `Festrut Transport Nig Ltd is a leading transportation company dedicated to providing safe, reliable, and efficient transport services across Nigeria. Our fleet of modern vehicles is equipped with state-of-the-art safety features and tracking systems to ensure timely and secure delivery of passengers and goods.

We offer a comprehensive range of transport solutions including intercity and intracity passenger services, cargo and logistics services, and specialized transportation for corporate clients. Our team of experienced professionals is committed to delivering exceptional service and ensuring customer satisfaction at every touchpoint.

At Festrut Transport, we understand the importance of mobility in driving economic growth and social development, and we are proud to play our part in connecting people and businesses across the nation.`,
    },
    'festrut-talent-hunt': {
      title: 'Festrut African Talent Hunt',
      image: placeholder,
      website: '#',
      description: 'Empowering and discovering talents across Africa through structured platforms and opportunities.',
      details: `Festrut African Talent Hunt is a dynamic platform dedicated to discovering, nurturing, and showcasing the immense talent that Africa has to offer. Through organized competitions, workshops, and mentorship programs, we provide a structured pathway for talented individuals to develop their skills and gain exposure.

Our programs span various fields including music, arts, sports, technology, and entrepreneurship, ensuring that talent from all disciplines has the opportunity to shine. We work with industry experts, sponsors, and partners to create meaningful opportunities for participants.

Beyond discovery, we are committed to providing ongoing support and resources to help talents build sustainable careers and make a positive impact in their communities and beyond.`,
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
    'festrut-courier': {
      title: 'Festrut Courier Services Limited',
      image: placeholder,
      website: '#',
      description: 'Fast, secure, and reliable delivery services for parcels and logistics needs.',
      details: `Festrut Courier Services Limited is a professional courier and logistics company committed to providing fast, secure, and reliable delivery solutions. We handle everything from document delivery and parcel shipping to freight and logistics management for businesses of all sizes.

Our network spans across major cities and regions, ensuring timely delivery and real-time tracking for every shipment. We leverage modern technology and efficient processes to optimize our operations and minimize delivery times.

With a focus on customer satisfaction and operational excellence, Festrut Courier Services is your trusted partner for all your courier and logistics needs.`,
    },
    'festrut-security': {
      title: 'Festrut Security Guards Limited',
      image: placeholder,
      website: '#',
      description: 'Providing professional security services to protect lives, properties, and assets.',
      details: `Festrut Security Guards Limited is a trusted security service provider dedicated to protecting lives, properties, and assets. We offer a comprehensive range of security solutions including manned guarding, surveillance systems, risk assessment, and security consulting.

Our team of highly trained and vetted security professionals is equipped with the latest tools and technology to deliver effective security solutions tailored to the unique needs of each client. We serve a diverse clientele including residential estates, commercial properties, industrial facilities, and government institutions.

At Festrut Security Guards Limited, we understand the importance of safety and security in today's world, and we are committed to providing peace of mind through our reliable and professional services.`,
    },
    'festrut-shopping-mall': {
      title: 'Festrut Shopping Mall',
      image: placeholder,
      website: '#',
      description: 'A modern retail hub offering a wide range of products and services for everyday needs.',
      details: `Festrut Shopping Mall is a modern retail destination that offers a wide range of products and services under one roof. From fashion and electronics to groceries and household items, our mall provides a convenient and enjoyable shopping experience for the whole family.

We house a carefully curated selection of local and international brands, ensuring that our customers have access to quality products at competitive prices. Our food court, entertainment facilities, and customer service amenities make every visit a memorable one.

Festrut Shopping Mall is more than just a shopping center — it's a community hub where people come together to shop, dine, and connect.`,
    },
    'festrut-hospital': {
      title: 'Festrut Hospital and Laboratory Services',
      image: placeholder,
      website: '#',
      description: 'Delivering quality healthcare and diagnostic services with modern medical facilities.',
      details: `Festrut Hospital and Laboratory Services is a modern healthcare facility committed to delivering quality medical care and diagnostic services. Our team of experienced doctors, nurses, and healthcare professionals provides comprehensive medical services ranging from general consultations and emergency care to specialized treatments and surgical procedures.

Our laboratory is equipped with state-of-the-art diagnostic equipment, enabling accurate and timely test results that support effective treatment decisions. We maintain the highest standards of hygiene, safety, and patient care in all our operations.

At Festrut Hospital, we believe that quality healthcare should be accessible to all, and we are dedicated to improving health outcomes in our community through compassionate care and medical excellence.`,
    },
    'festrut-food-drink': {
      title: 'Festrut Food and Drink International Ltd',
      image: placeholder,
      website: '#',
      description: 'Providing quality food and beverage services with a focus on taste and hygiene.',
      details: `Festrut Food and Drink International Ltd is a food and beverage company dedicated to delivering quality products and services that delight customers. From restaurant operations and catering services to food processing and distribution, we are building a comprehensive food ecosystem that serves diverse customer needs.

Our commitment to quality, hygiene, and customer satisfaction drives everything we do. We source the finest ingredients, employ skilled culinary professionals, and maintain rigorous quality control standards to ensure that every product and service meets our high standards.

Whether you're dining in at one of our establishments, ordering catering for a special event, or purchasing our packaged products, Festrut Food and Drink International Ltd promises a delightful culinary experience every time.`,
    },
    'festrut-construction': {
      title: 'Festrut Construction Ltd',
      image: placeholder,
      website: '#',
      description: 'Building durable and innovative structures with excellence in construction and engineering.',
      details: `Festrut Construction Ltd is a leading construction and engineering company that delivers high-quality building and infrastructure projects. From residential developments and commercial buildings to roads, bridges, and industrial facilities, we have the expertise and resources to handle projects of any scale.

Our team of experienced architects, engineers, and project managers works closely with clients to understand their vision and deliver results that exceed expectations. We prioritize quality, safety, and timely delivery in every project we undertake.

Festrut Construction Ltd is committed to building a better future through innovative construction solutions, sustainable practices, and unwavering commitment to excellence.`,
    },
    'festrut-consultant': {
      title: 'Festrut Consultant Ltd',
      image: placeholder,
      website: '#',
      description: 'Offering expert advisory services across business, management, and development sectors.',
      details: `Festrut Consultant Ltd is a professional consulting firm that provides expert advisory services to businesses, organizations, and government agencies. Our areas of expertise include business strategy, management consulting, financial advisory, human resources, and organizational development.

We work closely with our clients to understand their unique challenges and develop tailored solutions that drive growth, improve efficiency, and enhance competitiveness. Our team of seasoned consultants brings a wealth of experience and industry knowledge to every engagement.

At Festrut Consultant Ltd, we are committed to helping our clients achieve their goals and realize their full potential through strategic guidance and practical solutions.`,
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
    'festrut-facility-development': {
      title: 'Festrut Facility and Development Firm Ltd',
      image: placeholder,
      website: '#',
      description: 'Managing and developing facilities with a focus on efficiency and sustainability.',
      details: `Festrut Facility and Development Firm Ltd is a comprehensive facility management and development company that provides end-to-end solutions for property owners and managers. Our services include facility maintenance, property management, renovation and refurbishment, and development consulting.

We help our clients optimize the performance and value of their properties through proactive maintenance, efficient operations, and strategic improvements. Our team of skilled professionals ensures that every facility under our care operates at peak efficiency.

Festrut Facility and Development Firm Ltd is your partner in creating and maintaining spaces that are functional, sustainable, and valuable.`,
    },
    'first-klass-hospital': {
      title: 'First Klass Hospital and Laboratory Service',
      image: placeholder,
      website: '#',
      description: 'Delivering premium healthcare and laboratory services with a commitment to excellence.',
      details: `First Klass Hospital and Laboratory Service is a premium healthcare provider dedicated to delivering exceptional medical care and diagnostic services. Our facility is equipped with modern medical technology and staffed by highly qualified healthcare professionals who are committed to patient well-being.

We offer a comprehensive range of medical services including general medicine, pediatrics, gynecology, surgery, and specialized diagnostic laboratory services. Our patient-centered approach ensures that every individual receives personalized care tailored to their specific needs.

At First Klass Hospital, we strive to set the standard for healthcare excellence, providing compassionate care and advanced medical services to our community.`,
    },
    pelites: {
      title: 'Prestigious Elites Organization (PELITES)',
      image: placeholder,
      website: '#',
      description: 'A platform for leadership, networking, and elite community development initiatives.',
      details: `Prestigious Elites Organization (PELITES) is an exclusive platform that brings together accomplished individuals from various fields for networking, mentorship, and community development. We provide a space where leaders, innovators, and change-makers can connect, collaborate, and create positive impact.

Our programs include leadership summits, networking events, mentorship initiatives, and community development projects. Members gain access to a valuable network of professionals, exclusive opportunities, and resources that support personal and professional growth.

PELITES is more than an organization — it is a community of excellence committed to shaping the future through leadership and collaboration.`,
    },
    'hall-of-mercy': {
      title: 'Hall of Mercy',
      image: placeholder,
      website: '#',
      description: 'Focused on compassion-driven outreach and humanitarian support for the less privileged.',
      details: `Hall of Mercy is a humanitarian organization dedicated to providing compassion-driven support and outreach to the less privileged members of society. Our initiatives focus on providing food, shelter, clothing, medical assistance, and educational support to individuals and families in need.

We believe in the dignity of every person and are committed to making a tangible difference in the lives of those facing hardship. Through our outreach programs and partnerships with like-minded organizations, we extend a helping hand to the most vulnerable members of our community.

Hall of Mercy is driven by the belief that compassion and kindness can transform lives and build stronger, more caring communities.`,
    },
    'festrut-lead-foundation': {
      title: 'Festrut Lead University Foundation',
      image: placeholder,
      website: '#',
      description: 'Promoting research, education, and innovation to solve institutional and societal challenges.',
      details: `Festrut Lead University Foundation is an educational foundation dedicated to promoting research, learning, and innovation. We support academic institutions, researchers, and students through scholarships, research grants, and capacity-building programs.

Our foundation focuses on addressing critical challenges in education, healthcare, technology, and sustainable development through research and innovation. We partner with universities, research institutes, and industry leaders to drive impactful initiatives.

Festrut Lead University Foundation is committed to advancing knowledge and empowering the next generation of thinkers, researchers, and leaders who will shape the future.`,
    },
    ridesmash: {
      title: 'Ridesmash',
      image: biz1,
      website: 'https://ridesmash.com',
      description: 'Get a safe and affordable ride anytime, anywhere with our user-friendly ride-hailing platform.',
      details: `RideSmash is not only transforming the e-hailing industry but also offering flexible hire 
      purchase options, allowing people to access high-quality vehicles through affordable installment plans. 
      Your investment helps fuel the development of this dual platform, enabling us to expand our fleet and 
      improve our service offerings. By supporting RideSmash, you contribute to making transportation more 
      accessible with affordable cost while also benefiting from the profitable returns generated through our 
      E-hailing services and hire purchase agreements. Our customers’ regular payments and the steady demand for 
      reliable rides ensure strong profitability, which directly impacts the returns for our investors. Investing 
      in RideSmash places you at the forefront of the rapidly growing ehailing and hire purchase market. Your funds are protected, 
      ensuring that you benefit from secure, consistent returns. With increasing demand for affordable, flexible transportation, 
      your investment will generate monthly returns as RideSmash expands. As we grow, your investment will continue to provide you 
      with profitable returns, supported by a loyal customer base. RideSmash offers not only security for your funds but also an exciting 
      opportunity for continued growth, offering long-term stability and returns in the booming mobility sector.`,
    },
    smashfood: {
        title: 'Smashfood',
        image: biz2,
        website: 'https://smashfood.com',
        description: 'Delicious meals, delivered fast. Order your favorites and enjoy culinary delights at your doorstep.',
        details: `SmashFood is your go-to app for fast and reliable food delivery, offering a wide variety of fresh, diverse meal 
        options delivered straight to your door. SmashFood aims to dominate the market by ensuring faster deliveries of foods and a 
        seamless customer experience. Your investment helps us build and maintain our app, enhance our platform's features, and drive 
        advertising efforts to reach more customers and vendors. This not only boosts the app's visibility and user base but also enables 
        local food vendors to sell more, increasing their revenue. With your support, we can continue to scale our operations and make SmashFood 
        a profitable investment, delivering attractive returns for all investors. SmashFood offers investors the opportunity to tap into the 
        lucrative food delivery industry with high potential for monthly returns. Your funds are securely invested, ensuring both your capital 
        and profits are protected. As the demand for food delivery grows, your investment will generate consistent returns, backed by a secure 
        and transparent business model. With growing market penetration, your returns will increase as the brand expands. SmashFood provides 
        you with peace of mind, knowing that your funds are in safe hands while benefiting from an industry poised for continued growth.`,
    },
    smashtravels: {
      title: 'Smash Travels',
      image: biz3,
      website: 'https://smashtravels.com',
      description: 'UNLOCKING INTERNATIONAL CAREERS ADVENTURE WITH SMASH TRAVELS',
      details: `Smash Travels is a travel platform specializing in processing work permit visas for clients seeking employment opportunities across Canada and several European countries. With a focus on simplifying the visa application process, Smash Travels aims to support individuals in navigating the complex requirements of securing work permits abroad.

        The platform is designed to offer a seamless experience for clients, whether they are looking to move to Canada for career growth or explore professional prospects in European nations. Smash Travels is committed to ensuring that clients have access to up-to-date information, expert guidance, and a transparent process to facilitate the approval of work permits.`,
    },
    smashbookings: {
        title: 'Smash Bookings',
        image: '',
        website: 'https://www.smashbookings.com',
        description: 'Business summary',
        details: `More Detail`
    },
    smashwise: {
        title: 'Smashwise',
        image: '',
        website: '#',
        description: 'Business summary',
        details: `More Detail`
    },
    smashbuy247: {
        title: 'Smashbuy247',
        image: '',
        website: '#',
        description: 'Business summary',
        details: `More Detail`
    },  
    smashapartments: {
        title: 'Smash Apartments',
        image: '',
        website: '#',
        description: 'Business summary',
        details: `More Detail`
    },  
    smashproperties: {
        title: 'Smash Properties',
        image: '',
        website: '#',
        description: 'YOUR GATEWAY TO STREAMLINED AND SECURE PROPERTY DEALS',
        details: `Smash Properties is a comprehensive platform designed to facilitate the buying and selling of houses and land with security, efficiency, and trust. The platform allows property vendors to easily register and list their properties for sale, reaching a broad audience of potential buyers. At the same time, clients seeking to purchase properties can also register, explore listings, and make informed decisions.

        To ensure seamless and secure transactions, Smash Properties integrates an escrow system. This system acts as a trusted intermediary, safeguarding funds until all conditions of the transaction are met, protecting both buyers and sellers. By leveraging this approach, Smash Properties guarantees transparency, reduces risks, and fosters trust between parties.

        Smash Properties serves as the ideal solution for anyone looking to buy or sell properties with confidence and ease.`,
    },                 
    smashhire: {
        title: 'Smash Hire',
        image: '',
        website: '#',
        description: 'Business summary',
        details: `Smash Hire is an innovative platform designed to bridge the gap between individuals in need of skilled services and talented artisans available nearby. 
          Smash Hire connects you to reliable professionals within your vicinity. By offering a simple, intuitive platform, we make it easier than ever to find trusted artisans for a wide range of needs, ensuring quality service at your doorstep.
          Our mission is to make skilled labor more accessible, efficient, and reliable for everyone by connecting trusted local artisans with individuals in need of services. We strive to create a platform that fosters trust, transparency, and convenience—empowering customers to find the right help when they need it and helping artisans expand their businesses with ease.`
    },                 
    smashlogistics: {
        title: 'Smash Logistics',
        image: '',
        website: '#',
        description: 'Revolutionizing Pickup Services with Location-Based Solutions',
        details: `Smash Logistics is an innovative logistics platform that streamlines the process of picking up goods by leveraging real-time location data. Designed to meet the growing demand for efficient, location-based pickup services, Smash Logistics offers a flexible and reliable solution for businesses and individuals alike.`
    },                 
    smashlaundry: {
        title: 'Smash Laundry',
        image: '',
        website: '#',
        description: 'Business summary',
        details: `More Detail`
    },                 
    owenas: {
        title: 'Owenas',
        image: '',
        website: '#',
        description: 'Business summary',
        details: `More Detail`
    },                 
    qiimeet: {
        title: 'Qiimeet',
        image: '',
        website: '#',
        description: 'Business summary',
        details: `More Detail`
    },
  };

  // Fetch the details for the specific slug
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
        <Link to={category.website} className="smashtech-button swipe-button">Visit {category.title} Website</Link>
      </div>
    </div>
    </>
  );
};
export default BusinessDetail;