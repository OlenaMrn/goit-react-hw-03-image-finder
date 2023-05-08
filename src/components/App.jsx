import { Component } from 'react';
import { ToastContainer, toast } from 'react-toastify';
import { Searchbar } from './Searchbar/Searchbar';
import { ImageGallery } from './ImageGallery/ImageGallery';
import { Modal } from './Modal/Modal';



export class App extends Component {
  state = {
    imagelist: [],
    page: 1,
    filter: '',
    loading: false,
    showModal: false,
    selectedImageURL: '',
  };

  handleSearchSubmit = filter => {
    // console.log(filter);
    this.setState({ filter });
  };

  handleChange = e => {
    this.setState({ filter: e.target.value });
  };

  toggleModal = largeImageURL => {
    this.setState(prevState => ({
      showModal: !prevState.showModal,
      largeImageURL,
    }));
  };

  render() {
    const { filter, imagelist, showModal, largeImageURL } = this.state;

    return (
      <div>
        <header>
          <Searchbar
            value={filter}
            onSubmit={this.handleSearchSubmit}
            onChange={this.handleChange}
          />
        </header>
        {/* {loading && <BlockLoader />} */}
        <main>
          <ImageGallery
            filter={filter}
            images={imagelist}
            onClick={() => this.toggleModal(largeImageURL)}
          />
          {showModal && (
            <Modal onClose={this.toggleModal} largeImageURL={largeImageURL} />
          )}
        </main>
        <ToastContainer />
      </div>
    );
  }
}






