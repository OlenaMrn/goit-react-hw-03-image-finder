import PropTypes from 'prop-types';
import styles from './ImageGalleryItem.module.css';

export function ImageGalleryItem({ url, tags, largeImageURL, onClick }) {
  return (
    <>
      <li className={styles.item}>
        <img src={url} alt={tags} onClick={() => onClick(largeImageURL)} />
      </li>
    </>
  );
}

ImageGalleryItem.propTypes = {
  url: PropTypes.string.isRequired,
  tags: PropTypes.string.isRequired,
  largeImageURL: PropTypes.string.isRequired,
  onClick: PropTypes.func.isRequired,
};




