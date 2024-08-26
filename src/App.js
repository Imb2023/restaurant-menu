import React from 'react';
import ImageGallery from './Components/ImageGallery'
import './App.css';
const App = () => {

  return (
    <div className={App}>
      <ImageGallery/>
      <p>space</p>
      <ImageGallery/>
      <p>space</p>
      <ImageGallery/>
      <ImageGallery/>
      <ImageGallery/>
      <ImageGallery/>
    </div>
  );
};

export default App;
