import React from "react";
import css from './imageGalleryItem.module.css';
import Modal from 'components/Modal/Modal';
import PropTypes from 'prop-types';

function ImageGalleryItem(props) {
  const [isModalOpen, setIsModalOpen] = React.useState(false);
  const [selectedImage, setSelectedImage] = React.useState('');

  const openModal = (selectedImage) => {
    setIsModalOpen(!isModalOpen);
    setSelectedImage(selectedImage)
  };

  const closeModal = () => {
    setIsModalOpen(!isModalOpen);
    setSelectedImage('')
  };

  const { images } = props;

  return (
      <>
        {images.map(({ id, webformatURL, largeImageURL }) => (
          // <li className={css.ImageGalleryItem} key={id}>
            <li key={id}>
            <img className={css.imageGalleryItemImage} src={webformatURL} alt=''  onClick={() => {openModal(largeImageURL)}}/>
          </li>
        ))}
        {selectedImage && (
        <Modal close={closeModal}>
          <img src={selectedImage} alt='' />
        </Modal>
      )}

      </>
    );




}

ImageGalleryItem.propTypes = {
  images: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
      webformatURL: PropTypes.string.isRequired,
      largeImageURL: PropTypes.string.isRequired
    })
  )
}
  



export default ImageGalleryItem;
