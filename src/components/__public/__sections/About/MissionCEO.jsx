import { useState } from 'react';
import ceo from './../../../../assets/images/_about/CEO.png';
import vivian from './../../../../assets/images/_about/Vivian.png';

const MissionCEO = () => {
  // State to track the active tab
  const [activeTab, setActiveTab] = useState('Trust');

  // Tab content data
  const tabContent = {
    Trust: "We build lasting relationships through reliability and consistency. By keeping our word and delivering on our promises, we earn the confidence of our clients, partners, and communities.",
    Innovation: "We embrace innovation by continuously seeking smarter, more efficient ways to develop and deliver real estate solutions. Our forward-thinking approach allows us to create modern, sustainable properties that meet the needs of today and tomorrow.",
    Excellence: "We are driven by a passion for excellence in every project we undertake. From planning to delivery, we maintain superior standards, ensuring quality, durability, and satisfaction that consistently exceed expectations.",
    Integrity: "At the heart of Festrut Group Limited is an unwavering commitment to integrity. We uphold the highest standards of honesty, transparency, and accountability in every transaction, ensuring that our clients and partners can trust us to deliver on our promise",
  };
  
  return (
    <>
    <div className="sections" id="about_missionceo">
        <h2>Our Mission &amp; Vision</h2>
        
        <div className="zy-c1 zy-c1-sm zy-c1-xs text-center">
          <p>To become a globally recognized real estate conglomerate by delivering high-quality projects and services that meet international standards, while providing accessible, value-driven shelter across all levels because we believe in building trust, excellence, and lasting communities.</p>
        </div>
    </div>

    <div className="c2 c1-sm c1-xs ceo-div">
        <img src={ceo} title="" alt="" />
        
        <div>
            <h2>Festus Uwakhemen A. PhDs</h2>
            <h4>Chief Executive Officer (CEO), Festrut group</h4>
            <hr />
            
            <p>Dr. Festus Uwakhemen Asikhia is the visionary CEO of Festrut Group, 
                a diversified conglomerate spanning real estate, construction, oil and gas, 
                healthcare, logistics, security, and investment services. With a strong 
                foundation in academia and leadership, he brings strategic insight and 
                intellectual depth to every venture.

Driven by excellence and a passion for sustainable growth, he has expanded Festrut Group into multiple subsidiaries delivering innovative, value-driven solutions across various sectors.</p>


        </div>
    </div>

    <div className="sections" id="about_missionceo">
        {/* Our Core Values */}
        <h2 id="core_values">Our Core Values</h2>
        
        <div className="tab-container">
            {/* Tabs */}
            <div className="tabs">
                {Object.keys(tabContent).map((tab) => (
                <button
                    key={tab}
                    className={`tab-button ${activeTab === tab ? 'active' : ''}`}
                    onClick={() => setActiveTab(tab)}
                >
                    {tab}
                </button>
                ))}
            </div>
        </div>

        <div className="tab-content zy-c1 zy-c1-sm zy-c1-xs text-center">
            <p>{tabContent[activeTab]}</p>
        </div>
    </div>

    <div class="grey" id="commitment_to_sustainability">
        <div className="sections" id="about_missionceo">
            <h2>Sustainability</h2>
            
            <div className="zy-c1 zy-c1-sm zy-c1-xs text-center">
            <p>We are committed to developing properties that support long term environmental 
                and social well being, 
                creating communities that are not only livable today but sustainable for future 
                generations.</p>
            </div>
        </div>

        <div className="sections commitment-quality" id="about_missionceo">
            {/* Commitment to Quality */}
            <h2 id="commitment_to_quality">Built on Excellence</h2>
        </div>

        <div className="c3 c1-sm c1-xs text-center commitment-quality">
            <div>
                <h4>Excellence in Execution</h4>
                <p>At Festrut Group, we are committed to delivering high-quality real estate developments and services with precision and excellence. Every project is carefully planned and executed to meet the highest standards of safety, durability, and value.</p>
            </div>

            <div>
                <h4>Continuous Improvement</h4>
                <p>We are constantly improving our systems, processes, and services to stay ahead of industry demands. By embracing feedback, innovation, and modern practices, we ensure continuous growth and better value delivery to our clients.</p>
            </div>

            <div>
                <h4>Trusted Standards</h4>
                <p>Our operations are guided by strong professional standards and best practices that ensure reliability, consistency, and transparency. We are committed to delivering services that clients can trust across all our subsidiaries.</p>
            </div>
        </div>

        {/* Exceptional Customer Service */}
        <div className="sections exceptional-customer" id="about_missionceo">
            <h2>Exceptional Customer Service</h2>
        </div>

        <div className="c2 c1-sm c1-xs exceptional-customer" id="exceptional_cs">
            <img src={vivian} title="" alt="" />
        
            <div>
                <p>At Festrut Group, our customers are at the heart of everything we do. 
                    Our dedicated customer service team is always available to respond promptly to inquiries, provide guidance, and ensure a 
                    seamless experience at every stage of your journey with us. </p><br />
                
                <p>We take pride in delivering personalized solutions, understanding that each client has unique needs whether in property acquisition, 
                    investment, or development. By listening closely and working collaboratively, 
                    we provide tailored services that guarantee value, efficiency, and long-term 
                    satisfaction.

Our commitment is not just to serve, but to build lasting relationships founded on 
trust, reliability, and exceptional service delivery.</p>
            </div>
        </div>
    </div>
    </>
  )
}
export default MissionCEO;