import React from "react";
import ImageGalleryItem from 'components/ImageGalleryItem/ImageGalleryItem';
import css from './ImageGallery.module.css';
import PropTypes from 'prop-types';

function ImageGallery(props) {
  const { images } = props;
  
  return (
        <ul className={css.ImageGallery}>
          <ImageGalleryItem images={ images } />
        </ul>
    );
} 

ImageGallery.propTypes = {
  images: PropTypes.array.isRequired
}

export default ImageGallery;
