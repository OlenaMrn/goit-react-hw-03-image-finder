import React from 'react';
import { Component } from 'react';
import styles from './ImageGallery.module.css';
import { ImageGalleryItem } from 'components/ImageGalleryItem/ImageGalleryItem';
import { BlocksLoader } from 'components/Loader/Loader';

export class ImageGallery extends Component {
  state = {
    images: [],
    loading: false,
    error: null,
  };

  componentDidUpdate(prevProps, prevState) {
    const API_KEY = '34494219-18836f66a27c5c5fdb378157c';
    const BASE_URL = 'https://pixabay.com/api/';

    if (prevProps.filter !== this.props.filter) {
      this.setState({ loading: true, error: null });

      fetch(
        `${BASE_URL}?q=${this.props.filter}&page=1&key=${API_KEY}&image_type=photo&orientation=horizontal&per_page=12`
      )
        .then(response => {
          if (response.ok) {
            return response.json();
          }
          throw new Error('Nothing was found');
        })

        .then(data => {
          if (data.hits.length > 0) {
            this.setState({ images: data.hits });
          } else {
            throw new Error('Nothing was found');
          }
        })
        .catch(error => {
          this.setState({ error });
        })
        .finally(() => {
          this.setState({ loading: false });
        });
    }
  }

  render() {
    const { images, loading, error } = this.state;

    return (
      <ul className={styles.ImageGallery}>
        {error && <h2>{error.message}</h2>}
        {loading && <BlocksLoader />}

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
