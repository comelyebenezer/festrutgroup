import { useEffect } from 'react';
import Banner_otherpages from '../../__public/__sections/_Banner_otherpages';
import image from '../../../assets/images/_about/about_banner.jpg';
import icon from '../../../assets/images/icons/rocket.png';
import { Link } from 'react-router-dom';
import Header from '../../__public/__layouts/Header';
import { UilBriefcase, UilLocationPoint } from '@iconscout/react-unicons';
import Map from '../../__public/__sections/_Map';

const Careers = (props) => {
    useEffect(() => {
        document.title = `${props.company} — Careers`;
    }, []);

    return (
    <>      
    <Header />    
    <Banner_otherpages title="Careers" image={image} />

    <div className="sections" id="about_people">
        <div className="flex careers-flex">
            <img src={icon} className="careers-icon" /> 
            <h2>Launch Your <span>Career</span> With Us</h2>
        </div>

        <div className="flex careers-flex">
            <span className="nbsp">&nbsp; </span>
            <p>Are you passionate about real estate, infrastructure, and impactful development? Do you thrive in a dynamic and fast-growing environment? &nbsp;
<b>Festrut Group</b> is a diversified conglomerate seeking talented and driven individuals to join our expanding team. 
We offer a unique opportunity to work across multiple industries including real estate, construction, healthcare, logistics, energy, and more, while contributing to meaningful projects that shape communities and improve lives.</p>
        </div>
    </div>
    
    <div className="sections" id="careers">
        <h2>Current Openings</h2>
        <p className="text-center">We are currently seeking qualified candidates for these positions</p>

        <h5>Vacant Positions: 3</h5>

        <div className="c1">
            <div className="careers-cards">
                <div className="flex">
                    <h3>Business Developer</h3>
                    1 days ago
                </div>
                <div>
                    <span><UilBriefcase /> Full Time</span> &nbsp; 
                    <span><UilLocationPoint /> Abuja</span>
                </div>
                <div>
                    <p>A dynamic and fast-growing conglomerate seeking talented individuals to join our team. 
                        We offer a unique opportunity to drive business growth across real estate and diversified sectors, 
                        build strategic partnerships, and contribute to shaping impactful development projects. <Link to="/" className="">Read more </Link> 
                    </p>
                    <Link to="/job-application" className="smashtech-button swipe-button">Apply</Link>
                </div>
            </div>

            <div className="careers-cards">
                <div className="flex">
                    <h3>Driver</h3>
                    1 days ago
                </div>
                <div>
                    <span><UilBriefcase /> Full Time</span> &nbsp; 
                    <span><UilLocationPoint /> Abuja</span>
                </div>
                <div>
                    <p>A fast-growing and diversified conglomerate seeking reliable and professional individuals to join 
                        our team. We offer a great opportunity to support daily operations across our various subsidiaries, ensuring safe, 
                        timely, and efficient transportation services that contribute to smooth business activities. <Link to="/" className="">Read more </Link> 
                    </p>
                    <Link to="/job-application" className="smashtech-button swipe-button">Apply</Link>
                </div>
            </div>

            <div className="careers-cards">
                <div className="flex">
                    <h3>Customer Service Representative</h3>
                    1 days ago
                </div>
                <div>
                    <span><UilBriefcase /> Full Time</span> &nbsp; 
                    <span><UilLocationPoint /> Abuja</span>
                </div>
                <div>
                    <p>A fast-growing and diversified conglomerate seeking passionate and professional individuals to join 
                        our team. We offer a great opportunity to engage with clients across our various subsidiaries, 
                        provide exceptional support, and contribute to delivering excellent service experiences that 
                        reflect the values of Festrut Group.<Link to="/" className="">Read more </Link> 
                    </p>
                    <Link to="/job-application" className="smashtech-button swipe-button">Apply</Link>
                </div>
            </div>
        </div>
    </div>

    <div className="sections" id="about_people">
        <h2>Why Choose Festrut Group?</h2>
        
        <div className="flex careers" style={{ justifyContent: 'center' }}>
            <div className="careers-cards" style={{ maxWidth: '1000px', width: '100%' }}>
                <div>
                    <h3 className="text-center">Work on impactful real estate and infrastructure projects</h3>
                </div>

                <p>Be part of a team developing and delivering innovative solutions across real estate, 
                    construction and other sectors that serve communities and 
                    drive sustainable growth.</p>
            </div>
        </div>
    </div>

    <Map />
    </>
  )
}
export default Careers;