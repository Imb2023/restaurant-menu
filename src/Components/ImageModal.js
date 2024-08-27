import React from 'react';
import Modal from 'react-modal';
import './ImageModal.css';

// Required for accessibility
Modal.setAppElement('#root');

function ImageModal({ isOpen, onRequestClose, imageSrc, imageAlt }) {
  return (
    <Modal
      isOpen={isOpen}
      onRequestClose={onRequestClose}
      contentLabel="Image Modal"
      className="Modal"
      overlayClassName="Overlay"
    >
      <div className="modal-content">
        <img src={imageSrc} alt={imageAlt} />
        <button onClick={onRequestClose} className="close-button">
          Close
        </button>
      </div>
    </Modal>
  );
}

export default ImageModal;
