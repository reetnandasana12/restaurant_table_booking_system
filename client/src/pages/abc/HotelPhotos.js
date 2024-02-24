import React, { useState } from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import '../../style/HotelPhotos.css'; // Import your custom CSS for styling

const HotelPhotos = ({ photos }) => {
  const [selectedPhoto, setSelectedPhoto] = useState('');
  const [open, setOpen] = useState(false);

  const openModal = (photo) => {
    setSelectedPhoto(photo);
    setOpen(true);
    document.body.style.overflow = 'hidden'; // Prevent scrolling when modal is open
  };

  const closeModal = () => {
    setSelectedPhoto('');
    setOpen(false);
    document.body.style.overflow = ''; // Enable scrolling when modal is closed
  };

  const settings = {
    dots: true,
    infinite: true,
    speed: 2000, // Change slide every 2 seconds
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 2000, // Autoplay speed in milliseconds
    className: 'photo-slider' // Add custom class to the slider container
  };

  return (
    <React.Fragment>
      <Slider {...settings} className="photo-slider">
        {photos.map((photo, index) => (
          <div key={index} className="photo-item" onClick={() => openModal(photo)}>
            <img src={photo} alt={`Photo ${index + 1}`} className="img-fluid" />
          </div>
        ))}
        {/* <div  className="photo-item" onClick={() => openModal(photos)}>
            <img src={photos} alt={`Photo`} className="img-fluid" />
          </div> */}
      </Slider>
      {open && (
        <div className="modal-overlay" onClick={closeModal}>
          <div className="modal" onClick={(e) => e.stopPropagation()}>
            <span className="close-button" onClick={closeModal}>&times;</span>
            <img src={selectedPhoto} alt="Full Size" className="modal-image" />
          </div>
        </div>
      )}
    </React.Fragment>
  );
};

export default HotelPhotos;

