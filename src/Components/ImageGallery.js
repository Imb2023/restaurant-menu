import React from 'react';
import './ImageGallery.css';
import menuSVG from 'C:/Users/visiblyankerd/Desktop/GITHUB/restaurant-menu/src/assets/22.jpg'; // Replace with your SVG/PNG file path
import menuPDF from 'C:/Users/visiblyankerd/Desktop/GITHUB/restaurant-menu/src/assets/24.jpg'; // Replace with your PDF file path


function ImageGallery() {
  const images = [
    { src: menuPDF, alt: 'Image 1' },
    { src: menuSVG, alt: 'Image 2' },
    { src: menuPDF, alt: 'Image 3' },
    { src: menuSVG, alt: 'Image 2' },
  ];

  return (
    <div className="image-gallery">
      {images.map((image, index) => (
        <div key={index} className="image-container">
          <img src={image.src} alt={image.alt} />
        </div>
      ))}
    </div>
  );
}

export default ImageGallery;
