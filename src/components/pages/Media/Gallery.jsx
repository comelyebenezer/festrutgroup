import React, { useState } from 'react';
import Header from '../../__public/__layouts/Header';
import Banner_otherpages from '../../__public/__sections/_Banner_otherpages';
import bannerImg from '../../../assets/images/otherpages/blog.jpg'; 
import './gallery.css';
import './faq.css'; // Reusing intro text styles

const Gallery = () => {
  const [activeFilter, setActiveFilter] = useState('all');

  const filterCategories = [
    { id: 'all', label: 'All' },
    { id: 'birthday', label: 'Birthday / Anniversary' },
    { id: 'site-update', label: 'Site Update' },
    { id: 'office', label: 'Office' },
    { id: 'projects', label: 'Projects' },
  ];

  const galleryItems = [
    { id: 1, type: 'image', category: 'office', title: 'Modern Workspace Culture', src: 'https://images.pexels.com/photos/3183197/pexels-photo-3183197.jpeg' },
    { id: 2, type: 'video', category: 'projects', title: 'Site Inspection Walkthrough', src: 'https://www.youtube.com/embed/NuoWOZRfENc' },
    { id: 3, type: 'image', category: 'birthday', title: 'Annual Corporate Celebration', src: 'https://images.pexels.com/photos/3184339/pexels-photo-3184339.jpeg' },
    { id: 4, type: 'image', category: 'site-update', title: 'Infrastructure Expansion', src: 'https://images.pexels.com/photos/159306/construction-site-build-construction-structure-159306.jpeg' },
    { id: 5, type: 'image', category: 'office', title: 'Conference Room Meeting', src: 'https://images.pexels.com/photos/3182812/pexels-photo-3182812.jpeg' },
    { id: 6, type: 'video', category: 'site-update', title: 'Weekly Progress Drone View', src: 'https://www.youtube.com/embed/NuoWOZRfENc' },
  ];

  const filteredItems = activeFilter === 'all' 
    ? galleryItems 
    : galleryItems.filter(item => item.category === activeFilter);

  return (
    <>
      <Header />
      <Banner_otherpages title="Our Gallery" image={bannerImg} />

      <div className="sections gallery-section">
        <div className="text-center">
          <h2>Portfolio <span>Gallery</span></h2>
          <p className="faq-intro" style={{ marginBottom: '40px' }}>
            Witness our journey through these captured moments—from site developments 
            to our vibrant office culture and milestone celebrations.
          </p>
        </div>

        <div className="gallery-filters">
          {filterCategories.map((cat) => (
            <button
              key={cat.id}
              className={`filter-btn ${activeFilter === cat.id ? 'active' : ''}`}
              onClick={() => setActiveFilter(cat.id)}
            >
              {cat.label}
            </button>
          ))}
        </div>

        <div className="gallery-grid container">
          {filteredItems.map((item) => (
            <div key={item.id} className="gallery-item">
              <div className="media-wrapper">
                {item.type === 'image' ? (
                  <img src={item.src} alt={item.title} loading="lazy" />
                ) : (
                  <iframe
                    src={item.src}
                    title={item.title}
                    frameBorder="0"
                    allowFullScreen
                    style={{ width: '100%', height: '100%' }}
                  ></iframe>
                )}
              </div>
              <div className="gallery-info">
                <span>{item.category.replace('-', ' ')}</span>
                <h4>{item.title}</h4>
              </div>
            </div>
          ))}
        </div>
      </div>
    </>
  );
};

export default Gallery;