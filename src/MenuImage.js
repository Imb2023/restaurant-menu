import React from 'react';

const MenuImage = ({ src, alt }) => {
  return (
    <div style={styles.container}>
      <img src={src} alt={alt} style={styles.image} />
    </div>
  );
};

const styles = {
  container: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    height: '100vh',
    overflow: 'auto',
  },
  image: {
    maxWidth: '100%',
    maxHeight: '100%',
  },
};

export default MenuImage;
