import React from 'react';

const AdvertBanner = ({ mediaSrc, mediaType }) => {
  if (!mediaSrc) {
    return null; // Don't render anything if no media source is provided
  }

  const renderMedia = () => {
    switch (mediaType) {
      case 'video':
        return (
          <iframe
            src={mediaSrc}
            title="Advertisement Video"
            frameBorder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
            className="advert-media"
            style={{ width: '100%', display: 'block' }}
          ></iframe>
        );
      case 'gif': // GIFs are typically handled as images
      case 'image':
      default:
        return (
          <img
            src={mediaSrc}
            alt="Advertisement Banner"
            className="advert-media"
            style={{ width: '100%', objectFit: 'cover', display: 'block' }}
          />
        );
    }
  };

  return (
    <div className="sections advert-banner-section" style={{ padding: '0', margin: '30px 0', overflow: 'hidden' }}>
      {renderMedia()}
    </div>
  );
};

export default AdvertBanner;