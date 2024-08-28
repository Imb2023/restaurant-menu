import React, { useState } from 'react';
import ImageModal from './ImageModal';
import MenuTitle from './menuTitle';
import './ImageGallery.css';
import mainMenu1 from 'C:/Users/visiblyankerd/Desktop/GITHUB/restaurant-menu/src/assets/1-min.png'; // Replace with your SVG/PNG file path
import mainMenu2 from 'C:/Users/visiblyankerd/Desktop/GITHUB/restaurant-menu/src/assets/2-min.png'; // Replace with your SVG/PNG file path
import mainMenu4 from 'C:/Users/visiblyankerd/Desktop/GITHUB/restaurant-menu/src/assets/3-min.png'; // Replace with your PDF file path


function ImageGallery() {
  
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedImage, setSelectedImage] = useState(null);
  const main = [
    { src: mainMenu1, alt: 'Main menu 1' },
    { src: mainMenu2, alt: 'Main menu 2' },
    { src: mainMenu4, alt: 'Main menu 3' }
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
          <MenuTitle title={"menu "+index} />
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

export default ImageGallery;
