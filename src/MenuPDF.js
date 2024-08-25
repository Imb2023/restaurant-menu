import React from 'react';
import { Viewer, Worker } from '@react-pdf-viewer/core';
import '@react-pdf-viewer/core/lib/styles/index.css';

const MenuPDF = ({ file }) => {
  return (
    <div style={styles.container}>
      <Worker workerUrl={`https://unpkg.com/pdfjs-dist@3.11.174/build/pdf.worker.min.js`}>
        <Viewer
          fileUrl={file}
          theme={{
            viewer: {
              height: '100%', // Ensures the PDF fills the height
            },
          }}
        />
      </Worker>
    </div>
  );
};

const styles = {
  container: {
    height: '100vh',
    width: '100vw',
    overflow: 'hidden', // Prevents internal scrolling
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
  },
};

export default MenuPDF;
