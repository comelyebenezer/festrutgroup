import leadership from './../../../assets/images/corevalues/Leadership.jpg';
import entrepreneurship from './../../../assets/images/corevalues/Entrepreneurship.jpg';
import customer_service_experience from './../../../assets/images/corevalues/Customer Service Experience.jpg';
import excellence_through_teamwork from './../../../assets/images/corevalues/Excellence through teamwork.jpg';

const CoreValues = () => {
  const values = [
    {
  title: 'Customer Service',
  description: 'At Festrut Group, our customers are at the heart of everything we do. We are committed to delivering exceptional service through responsiveness, transparency, and a deep understanding of our clients’ needs, ensuring satisfaction at every stage.',
  image: customer_service_experience
},
{
  title: 'Entrepreneurship',
  description: 'We embrace innovation and continuously explore opportunities to grow across real estate and diverse sectors. Through strategic thinking and forward-looking initiatives, we deliver solutions that drive sustainable value and long-term success.',
  image: entrepreneurship
},
{
  title: 'Teamwork',
  description: 'We believe in the power of collaboration, working together with unity, respect, and shared purpose to deliver outstanding results. Our collective strength enables us to meet the needs of our clients and stakeholders effectively.',
  image: excellence_through_teamwork
},
{
  title: 'Leadership',
  description: 'We are committed to leading with excellence across all our businesses and communities. Through professionalism, continuous improvement, and strong partnerships, we set standards and drive growth in every sector we operate in.',
  image: leadership
}
  ];

  return (
    <>
    <div className="sections" id="ourcorevalues" style={{ padding: '60px 0' }}>
      <div className="text-center">
        <h2 style={{ marginBottom: '1.5rem' }}>Our Core <span>Values</span></h2>
        <p style={{ maxWidth: '800px', margin: '0 auto 3rem', color: '#666', lineHeight: '1.7' }}>
          Our operations are anchored on a foundation of integrity and excellence. 
          These values drive our commitment to transforming industries and delivering unparalleled value to our clients.
        </p>
      </div>

      <div className="c4 c2-md c1-sm c1-xs cover" style={{ display: 'flex', flexWrap: 'wrap', gap: '25px', justifyContent: 'center' }}>
        {values.map((val, index) => (
          <div key={index} className="business-container" style={{ flex: '1 1 260px', maxWidth: '300px', marginBottom: '10px', display: 'flex', flexDirection: 'column', border: '1px solid #eee', borderRadius: '12px', overflow: 'hidden', boxShadow: '0 4px 15px rgba(0,0,0,0.05)', backgroundColor: '#fff' }}>
            <div style={{ height: '200px', overflow: 'hidden' }}>
              <img src={val.image} alt={val.title} style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
            </div>
            <div style={{ padding: '5px 20px 20px', textAlign: 'left', flex: 1 }}>
              <h3 style={{ fontSize: '1.1rem', marginBottom: '6px', color: '#0056b3', fontWeight: '700', textAlign: 'left' }}>{val.title}</h3>
              <p style={{ fontSize: '0.9rem', color: '#666', lineHeight: '1.5', margin: 0 }}>{val.description}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
    </>
  )
}
export default CoreValues;