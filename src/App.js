import React from 'react';
import MenuImage from './MenuImage';
import menuSVG from 'C:/Users/visiblyankerd/Desktop/GITHUB/restaurant-menu/src/assets/22.jpg'; // Replace with your SVG/PNG file path
import menuPDF from 'C:/Users/visiblyankerd/Desktop/GITHUB/restaurant-menu/src/assets/24.jpg'; // Replace with your PDF file path

const App = () => {

  return (
    <div>
         <MenuImage src={menuSVG} alt="Restaurant Menu" />
      <MenuImage src={menuPDF} alt="Restaurant Menu" />
  
    </div>
  );
};

export default App;
