import React, { useState } from 'react';
import ImageModal from './ImageModal';
import './ImageGallery.css';
import mainMenu1 from 'C:/Users/visiblyankerd/Desktop/GITHUB/restaurant-menu/src/assets/5-min.png'; // Replace with your SVG/PNG file path
import mainMenu2 from 'C:/Users/visiblyankerd/Desktop/GITHUB/restaurant-menu/src/assets/6-min.png'; // Replace with your PDF file path
import mainMenu3 from 'C:/Users/visiblyankerd/Desktop/GITHUB/restaurant-menu/src/assets/7-min.png'; // Replace with your SVG/PNG file path
import mainMenu4 from 'C:/Users/visiblyankerd/Desktop/GITHUB/restaurant-menu/src/assets/8-min.png'; // Replace with your PDF file path


function MainGallery() {
  
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedImage, setSelectedImage] = useState(null);
  const main = [
    { src: mainMenu1, alt: 'Image 1' },
    { src: mainMenu2, alt: 'Image 2' },
    { src: mainMenu3, alt: 'Image 1' },
    { src: mainMenu4, alt: 'Image 2' }
  ];
  const openModal = (image) => {
    setSelectedImage(image);
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
    setSelectedImage(null);
  };
  return (
    <div className="image-gallery">
      {main.map((image, index) => (
        <div key={index} className="image-container" onClick={() => openModal(image)}>
          <img src={image.src} alt={image.alt} />
        </div>
      ))}
      {selectedImage && (
        <ImageModal
          isOpen={isModalOpen}
          onRequestClose={closeModal}
          imageSrc={selectedImage.src}
          imageAlt={selectedImage.alt}
        />
      )}
    </div>
  );
}

export default MainGallery;
