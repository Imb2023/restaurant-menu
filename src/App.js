import React from 'react';
import ImageGallery from './Components/ImageGallery'
import MenuTitle from './Components/menuTitle';
import MainGallery from './Components/mainMenu';
import './App.css';
import AppMenu from './Components/appMenu';
const App = () => {

  return (
    <div className={App}>
      <MenuTitle title="   " />
      <MenuTitle title="Menu" />
      <MenuTitle title="   " />
      <ImageGallery/>
      <MainGallery/>
      <AppMenu/>
      </div>
  );
};

export default App;
