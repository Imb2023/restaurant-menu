import React from 'react';
import MenuImage from './MenuImage';
import menuSVG from 'C:/Users/visiblyankerd/Desktop/GITHUB/restaurant-menu/src/assets/Yellow and Black Minimalist Fresh Smoothie Your Story.jpg'; // Replace with your SVG/PNG file path
import menuPDF from 'C:/Users/visiblyankerd/Desktop/GITHUB/restaurant-menu/src/assets/Yellow and Black Minimalist Fresh Smoothie Your Story(1).jpg'; // Replace with your PDF file path

const App = () => {
  const isPDF = false; // Set to true if using a PDF file

  return (
    <div>
         <MenuImage src={menuSVG} alt="Restaurant Menu" />
      <MenuImage src={menuPDF} alt="Restaurant Menu" />
  
    </div>
  );
};

export default App;
