import PropTypes from 'prop-types';
import css from './ImageGalleryItem.module.css';

 const ImageGalleryItem = ({
  webformatURL,
  largeImageURL,
  showImage,
  id,
  tags,
}) => {
  return (
    <li
      className={css.ImageGalleryItem}
      onClick={() => showImage({ src: largeImageURL, alt: id })}
    >
      <img
        className={css.ImageGalleryItemImage}
        src={webformatURL}
        alt={tags}
        id={id}
      />
    </li>
  );
};


export default ImageGalleryItem;

ImageGalleryItem.propTypes = {
  webformatURL: PropTypes.string,
  tags: PropTypes.string.isRequired,
  largeImageURL: PropTypes.string,
  showImage: PropTypes.func.isRequired,
};
