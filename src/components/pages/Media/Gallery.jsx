import { useState, useEffect } from 'react';
import { UilTimes, UilPlay, UilImage, UilVideo } from '@iconscout/react-unicons';
import Header from '../../__public/__layouts/Header';
import Banner_otherpages from '../../__public/__sections/_Banner_otherpages';
import bannerImg from '../../../assets/images/otherpages/faq.jpg';
import galleryData from '../../../data/gallery';

const Gallery = (props) => {
  const [activeTab, setActiveTab] = useState('pictures');
  const [selectedItem, setSelectedItem] = useState(null);

  useEffect(() => {
    document.title = `${props.company} — Gallery`;
  }, [props.company]);

  const items = galleryData[activeTab] || [];

  return (
    <>
      <Header />
      <Banner_otherpages title="Gallery" image={bannerImg} />

      <div className="sections" id="gallery">
        <div className="gallery-intro">
          <h2>Our Moments</h2>
          <p>Browse through our gallery to see the people, places, and projects that define Festrut Group.</p>
        </div>

        <div className="gallery-tabs">
          <button
            className={`gallery-tab ${activeTab === 'pictures' ? 'active' : ''}`}
            onClick={() => setActiveTab('pictures')}
          >
            <UilImage /> Pictures
          </button>
          <button
            className={`gallery-tab ${activeTab === 'videos' ? 'active' : ''}`}
            onClick={() => setActiveTab('videos')}
          >
            <UilVideo /> Videos
          </button>
        </div>

        <div className="gallery-grid">
          {items.map((item) => (
            <div key={item.id} className={`gallery-item ${item.orientation}`} onClick={() => setSelectedItem(item)}>
              {item.type === 'video' && item.poster ? (
                <img src={item.poster} alt={item.title} loading="lazy" />
              ) : (
                <img src={item.src} alt={item.title} loading="lazy" />
              )}
              {item.type === 'video' && (
                <div className="gallery-item-play">
                  <UilPlay />
                </div>
              )}
              <div className="gallery-item-overlay">
                <span className="gallery-item-badge">{item.type === 'video' ? 'Video' : 'Photo'}</span>
                <h3>{item.title}</h3>
                <p>{item.description}</p>
              </div>
            </div>
          ))}
        </div>

        {items.length === 0 && (
          <p className="gallery-empty">No media in this category yet.</p>
        )}
      </div>

      {selectedItem && (
        <div className="gallery-modal" onClick={() => setSelectedItem(null)}>
          <div className="gallery-modal-content" onClick={(e) => e.stopPropagation()}>
            <button className="gallery-modal-close" onClick={() => setSelectedItem(null)}><UilTimes /></button>
            {selectedItem.type === 'video' ? (
              <video src={selectedItem.src} controls autoPlay className="gallery-modal-media" poster={selectedItem.poster} />
            ) : (
              <img src={selectedItem.src} alt={selectedItem.title} className="gallery-modal-media" />
            )}
            <div className="gallery-modal-info">
              <h3>{selectedItem.title}</h3>
              <p>{selectedItem.description}</p>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default Gallery;
