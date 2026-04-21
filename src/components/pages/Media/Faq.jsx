import { useState } from 'react';
import { UilPlus, UilMinus } from '@iconscout/react-unicons';
import '../../../styles/App.css';

const faqData = [
  {
    question: "Who is Festrut Group?",
    answer: "Festrut Group is a dynamic and diversified organization committed to delivering excellence across various sectors including real estate, construction, oil & gas, healthcare, logistics, and transportation."
  },
  {
    question: "What makes Festrut Group different?",
    answer: "We combine innovation, professionalism, and a client-focused approach to deliver high-quality solutions that meet global standards."
  },
  {
    question: "What services does Festrut Group provide?",
    answer: "Our services span real estate development, construction, logistics, transportation, healthcare solutions, and other strategic business services."
  },
  {
    question: "Where does Festrut Group operate?",
    answer: "We are headquartered in Nigeria with operations and partnerships extending across multiple regions."
  },
  {
    question: "How can I get in touch with Festrut Group?",
    answer: "You can contact us through our official website, email, or customer support channels available on our platform."
  },
  {
    question: "Does Festrut Group offer career opportunities?",
    answer: "Yes, we provide opportunities for talented professionals to join our growing team. Kindly check our careers page for openings."
  },
  {
    question: "Can I partner or invest in Festrut Group?",
    answer: "Absolutely. We welcome strategic partnerships and investment opportunities. Please reach out through our official contact channels for further discussions."
  },
  {
    question: "How do I stay updated with Festrut Group?",
    answer: "Stay connected by following us on our social media platforms or subscribing via our website for the latest updates."
  }
];

const FAQ = () => {
  const [activeIndex, setActiveIndex] = useState(null);

  const toggleFaq = (index) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  return (
    <div className="sections" id="faq">
      <div className="container">
        <div className="row justify-content-center">
          <div className="col-lg-8">
            <div className="text-center mb-5" style={{ margin: '0 auto' }}>
              <h2 style={{ 
                fontWeight: 600, 
                fontSize: '48px', 
                lineHeight: '58.5px', 
                color: '#1E60AA',
                marginBottom: '1rem'
              }}>Frequently Asked Questions</h2>
              <p className="text-muted" style={{ maxWidth: '600px', margin: '0 auto' }}>Discover everything you need to know about our mission, services, and how we are shaping the future.</p>
            </div>

            <div className="faq-wrapper">
              {faqData.map((item, index) => (
                <div 
                  key={index} 
                  className={`faq-item ${activeIndex === index ? 'active' : ''}`}
                >
                  <button 
                    className="faq-question"
                    type="button"
                    aria-expanded={activeIndex === index}
                    aria-controls={`faq-answer-${index}`}
                    onClick={() => toggleFaq(index)}
                  >
                    <span className="faq-text">{item.question}</span>
                    <span className="faq-icon">
                      {activeIndex === index ? <UilMinus size="24" /> : <UilPlus size="24" />}
                    </span>
                  </button>
                  <div 
                    id={`faq-answer-${index}`}
                    className={`faq-answer ${activeIndex === index ? 'open' : ''}`}
                    role="region"
                  >
                    <p>{item.answer}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FAQ;