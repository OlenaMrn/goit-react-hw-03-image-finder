import React from 'react';
import { Component } from 'react';
import styles from './ImageGallery.module.css';
import { ImageGalleryItem } from 'components/ImageGalleryItem/ImageGalleryItem';
import { BlocksLoader } from 'components/Loader/Loader';

export class ImageGallery extends Component {
  state = {
    images: [],
    loading: false,
  };

  componentDidUpdate(prevProps, prevState) {
    const API_KEY = '34494219-18836f66a27c5c5fdb378157c';
    const BASE_URL = 'https://pixabay.com/api/';

    if (prevProps.filter !== this.props.filter) {
      this.setState({ loading: true });

      fetch(
        `${BASE_URL}?q=${this.props.filter}&page=1&key=${API_KEY}&image_type=photo&orientation=horizontal&per_page=12`
      )
        .then(res => res.json())
        .then(data => {
          this.setState({ images: data.hits }, () => {
            this.setState({ loading: false });
          });
        })
        .catch(error => {
          console.log(error);
          this.setState({ loading: false });
        });
    }
  }

  render() {
    const { images, loading } = this.state;
    console.log('loading state:', loading);

    return (
      <ul className={styles.ImageGallery}>
        {loading && <BlocksLoader />}
        {/* {images.length === 0 && <p>Nothing found.</p>} */}
        {images.map(({ id, largeImageURL, tags }) => (
          <ImageGalleryItem
            key={id}
            url={largeImageURL}
            tags={tags}
            onClick={this.props.onClick}
          />
        ))}
      </ul>
    );
  }
}
