import React from 'react';
import { Component } from 'react';
import styles from './ImageGallery.module.css';
import { ImageGalleryItem } from 'components/ImageGalleryItem/ImageGalleryItem';

export class ImageGallery extends Component {
  state = {
    images: [],
  };

  componentDidUpdate(prevProps, prevState) {
    const API_KEY = '34494219-18836f66a27c5c5fdb378157c';
    const BASE_URL = 'https://pixabay.com/api/';

    if (prevProps.filter !== this.props.filter) {
      fetch(
        `${BASE_URL}?q=${this.props.filter}&page=1&key=${API_KEY}&image_type=photo&orientation=horizontal&per_page=12`
      )
        .then(res => res.json())
        .then(data => {
          this.setState({ images: data.hits });
        })
        .catch(error => {
          console.log(error);
        });
    }
  }

  render() {
    return (
      <ul className={styles.ImageGallery}>
        {this.state.images.map(({ id, largeImageURL, tags }) => (
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
