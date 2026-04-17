
import { useState } from 'react';
import { UilAngleDown, UilAngleUp } from '@iconscout/react-unicons';

const FAQ = () => {
  const [activeIndex, setActiveIndex] = useState(null);

  const faqs = [
   
  {
    question: "What services does Festrut Group offer?",
    answer: "Festrut Group operates as a diversified conglomerate providing services across real estate development, construction, oil and gas, healthcare, transportation, logistics, security, consulting, and education, delivering value-driven solutions across multiple sectors."
  },
  {
    question: "How can I invest in Festrut Group?",
    answer: "You can invest in Festrut Group through our real estate projects, development partnerships, and other investment opportunities. Kindly contact our team or visit the investment section on our platform for more details."
  },
  {
    question: "Where are your offices located?",
    answer: "Festrut Group operates across multiple locations in Nigeria, with a strong presence in Abuja and other key regions. For specific office addresses, please refer to the contact section on our website."
  },
  {
    question: "How can I become a client or partner?",
    answer: "Becoming a client or partner is simple. You can reach out through our website, contact channels, or visit any of our offices to explore available opportunities and services tailored to your needs."
  },
  {
    question: "Do you offer customer support?",
    answer: "Yes, our dedicated customer service team is always available to attend to your inquiries, provide guidance, and ensure a seamless experience across all our services."
  },
  {
    question: "What is Festrut Apartments?",
    answer: "Festrut Apartments is the residential development arm of Festrut Group, focused on providing modern, secure, and affordable housing solutions that promote comfort, convenience, and quality living."
  }
  ];

  const toggleFAQ = (index) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  return (
    <div className="sections faq-section" id="faq">
      <div className="text-center">
        <h2 style={{ marginBottom: '1rem' }}>Frequently Asked <span>Questions</span></h2>
        <p style={{ maxWidth: '700px', margin: '0 auto', color: '#666' }}>
          Have questions about our projects, real estate developments, or services?
We’ve compiled answers to some of the most common inquiries to help you better understand how Festrut Group operates and delivers value across its diverse sectors.
        </p>
      </div>

      <div className="faq-container" style={{ maxWidth: '900px', margin: '3rem auto 0' }}>
        {faqs.map((faq, index) => (
          <div 
            key={index} 
            className={`faq-item ${activeIndex === index ? 'active' : ''}`}
            style={{ 
              backgroundColor: '#fff', 
              marginBottom: '1rem', 
              borderRadius: '12px', 
              boxShadow: activeIndex === index ? '0 10px 25px rgba(0,0,0,0.08)' : '0 2px 15px rgba(0,0,0,0.04)',
              overflow: 'hidden',
              transition: 'all 0.3s ease',
              border: activeIndex === index ? '1px solid #0056b3' : '1px solid transparent'
            }}
          >
            <div 
              className="faq-question" 
              onClick={() => toggleFAQ(index)}
              style={{ 
                padding: '1.2rem 1.8rem', 
                display: 'flex', 
                justifyContent: 'space-between', 
                alignItems: 'center',
                cursor: 'pointer',
                backgroundColor: activeIndex === index ? '#f8fbff' : '#fff'
              }}
            >
              <h3 style={{ 
                fontSize: '1.1rem', 
                margin: 0, 
                color: activeIndex === index ? '#0056b3' : '#222', 
                fontWeight: '600' 
              }}>
                {faq.question}
              </h3>
              <span style={{ color: activeIndex === index ? '#0056b3' : '#999', transition: 'transform 0.3s ease' }}>
                {activeIndex === index ? <UilAngleUp /> : <UilAngleDown />}
              </span>
            </div>
            
            <div 
              className="faq-answer" 
              style={{ 
                maxHeight: activeIndex === index ? '500px' : '0',
                overflow: 'hidden',
                transition: 'max-height 0.4s cubic-bezier(0.4, 0, 0.2, 1)',
              }}
            >
              <div style={{ padding: '0 1.8rem 1.5rem', color: '#555', lineHeight: '1.8' }}>
                <p style={{ margin: 0 }}>{faq.answer}</p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default FAQ;