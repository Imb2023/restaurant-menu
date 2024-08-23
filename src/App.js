import React from 'react';
import MenuImage from './MenuImage';
import MenuPDF from './MenuPDF';
import menuSVG from 'C:/Users/visiblyankerd/Desktop/GITHUB/restaurant-menu/src/assets/menu.svg'; // Replace with your SVG/PNG file path
import menuPDF from 'C:/Users/visiblyankerd/Desktop/GITHUB/restaurant-menu/src/assets/menu.PDF'; // Replace with your PDF file path

const App = () => {
  const isPDF = false; // Set to true if using a PDF file

  return (
    <div>
      {isPDF ? <MenuPDF file={menuPDF} /> : <MenuImage src={menuSVG} alt="Restaurant Menu" />}
      <MenuImage src={menuSVG} alt="Restaurant Menu" />
      <MenuPDF file={menuPDF} />
    </div>
  );
};

export default App;
