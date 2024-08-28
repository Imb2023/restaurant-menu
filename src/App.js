import React from 'react';
import ImageGallery from './Components/ImageGallery'
import MenuTitle from './Components/menuTitle';
import './App.css';
const App = () => {

  return (
    <div className={App}>
      <MenuTitle title="restaurant" />
      <ImageGallery/>
      </div>
  );
};

export default App;
