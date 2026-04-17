import { UilCheck } from '@iconscout/react-unicons';
import { Link } from 'react-router-dom';
import { Autoplay } from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import missionvision from './../../../assets/images/logo/missionvision.png';

const MissionVision = () => {
  const missionStatements = [
  { text: "To become a world-leading conglomerate delivering innovative, high-quality projects and services that consistently meet international standards.", image: missionvision },
  { text: "To provide affordable, sustainable, and value-driven real estate solutions that improve lives and build thriving communities.", image: missionvision },
  { text: "To deliver excellence across all our subsidiaries through professionalism, integrity, and customer-focused service delivery.", image: missionvision },
  { text: "To drive economic growth and development by creating opportunities in real estate, construction, healthcare, logistics, and related sectors.", image: missionvision },
  { text: "To continuously innovate and adopt modern technologies that enhance efficiency, quality, and long-term value for our clients.", image: missionvision },
  { text: "To build lasting relationships with clients, partners, and stakeholders based on trust, transparency, and reliability.", image: missionvision },
  { text: "To empower our workforce and create an environment that fosters growth, leadership, and professional excellence.", image: missionvision },
  { text: "To contribute meaningfully to society through sustainable development, community impact, and humanitarian initiatives.", image: missionvision },
]

  const visionStatements = [
  { text: "To provide accessible, high-quality shelter and real estate solutions that deliver value at every level of society.", image: missionvision },
  { text: "To be a globally recognized conglomerate known for excellence in real estate, infrastructure, and service delivery.", image: missionvision },
  { text: "To build sustainable communities and developments that enhance lives and create long-term impact.", image: missionvision },
  { text: "To be the preferred partner in property development, investment, and essential services across industries.", image: missionvision },
  { text: "To uphold our belief in trust, integrity, and quality as the foundation of everything we build and deliver.", image: missionvision },
  { text: "To continuously expand our reach while maintaining world-class standards in all our projects and services.", image: missionvision },
]

  return (
    <>
    <div className="sections mission-desktop" id="missionvision">
      <h2>Mission Statement</h2>

      <Swiper 
        spaceBetween={1} 
        breakpoints={{
          1206: {
              slidesPerView: 3, /* 5. NORMAL LAPTOPS (E.G MY OWN) TO LARGE @media screen and (min-width: 1207px)*/
          },
          1024: {
            slidesPerView: 3, /* 4. SMALL LAPTOP SCREENS @media screen and (min-width: 1025px) and (max-width: 1206px) */
          },
          767: {
              slidesPerView: 2, /* 3. MEDIUM SCREENS @media screen and (min-width: 768px) and (max-width: 1024px) */
          },
          576: {
          slidesPerView: 2, /* 2. TABLETS @media screen and (min-width: 577px) and (max-width: 767px) */
          },
          350: {
              slidesPerView: 1, /* 1. SMALL/MOBILE @media screen and (min-width: 351px) and (max-width: 576px) */
          },
          // when window width is >= 0px (default for all sizes)
          0: {
            slidesPerView: 1,
          },
        }}
        autoplay={{
          delay: 0,
          disableOnInteraction: false,
        }}
          speed={3500} 
          loop={true} 
          modules={[Autoplay]}
        >

        {missionStatements.map((mission, index) => (
          <SwiperSlide key={index}>
            <Link to="">              
              <div className="swipe">
                <p>{mission.text}</p>
                <img src={mission.image} title="" alt="" />
              </div>
            </Link>
          </SwiperSlide>
        ))}
      </Swiper>
      </div>


      {/* mission - mobile */}
      <h2 className="missionvision" id="mission-mobile">Mission Statement</h2>

      <div id="mission-mobile">
        {missionStatements.map((mission, index) => (
          <div key={index}>
            <UilCheck className="icon" /> 
            <p>{mission.text}</p>
          </div>
        ))}
      </div>

      {/* Vision */}

      <div className="sections mission-desktop" id="vision-section">
      <h2>Vision Statement</h2>

      <Swiper 
        spaceBetween={1}
        breakpoints={{
          1206: {
              slidesPerView: 3, /* 5. NORMAL LAPTOPS (E.G MY OWN) TO LARGE @media screen and (min-width: 1207px)*/
          },
          1024: {
            slidesPerView: 3, /* 4. SMALL LAPTOP SCREENS @media screen and (min-width: 1025px) and (max-width: 1206px) */
          },
          767: {
              slidesPerView: 2, /* 3. MEDIUM SCREENS @media screen and (min-width: 768px) and (max-width: 1024px) */
          },
          576: {
          slidesPerView: 2, /* 2. TABLETS @media screen and (min-width: 577px) and (max-width: 767px) */
          },
          350: {
              slidesPerView: 1.3, /* 1. SMALL/MOBILE @media screen and (min-width: 351px) and (max-width: 576px) */
          },
          // when window width is >= 0px (default for all sizes)
          0: {
            slidesPerView: 1.3,
          },
        }}
        autoplay={{
          delay: 3000,
          disableOnInteraction: false,
          reverseDirection: true, 
        }}
          speed={2500} 
          loop={true} 
          modules={[Autoplay]}
        >

        {visionStatements.map((vision, index) => (
          <SwiperSlide key={index}>
            <Link to="">              
              <div className="swipe">
                <p>{vision.text}</p>
                <img src={vision.image} title="" alt="" />
              </div>
            </Link>
          </SwiperSlide>
        ))}
      </Swiper>

      </div>

      {/* vision - mobile */}
      <h2 className="missionvision" id="mission-mobile">Vision Statement</h2>
      <div id="vision-mobile">
        {visionStatements.map((vision, index) => (
          <div key={index}>
            <UilCheck className="icon" /> 
            <p>{vision.text}</p>
          </div>
        ))}
      </div>
    </>
  )
}
export default MissionVision;