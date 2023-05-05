import { Component } from 'react';
import { ToastContainer, toast } from 'react-toastify';
import { Searchbar } from './Searchbar/Searchbar';
import { ImageGallery } from './ImageGallery/ImageGallery';
import BlockLoader from './Loader/Loader';

// const API_KEY = '34494219-18836f66a27c5c5fdb378157c';
// const BASE_URL = 'https://pixabay.com/api/';

export class App extends Component {
  state = {
    imagelist: [],
    page: 1,
    filter: '',
    loading: false,
    showModal: false,
  };

  //   componentDidMount() {
  //     this.setState({ loading: true });
  //     fetch(
  //    `${BASE_URL}?q=dom&page=1&key=${API_KEY}&image_type=photo&orientation=horizontal&per_page=12`
  //     )
  //      .then(res => res.json())
  //      .then(imagelist => this.setState({ imagelist }))
  //      .finally(() => this.setState({ loading: false }));
  // }

  handleSearchSubmit = filter => {
    console.log(filter);
    this.setState({ filter });
  };

  handleChange = e => {
    this.setState({ filter: e.target.value });
  };

  // handleSubmit = e => {
  //   e.preventDefault();

  //   const { filter } = this.state;

  //   this.setState({ loading: true });

  //   fetch(
  //     `${BASE_URL}?q=${filter}&page=1&key=${API_KEY}&image_type=photo&orientation=horizontal&per_page=12`
  //   )
  //     .then(res => res.json())
  //     .then(imagelist => this.setState({ imagelist }))
  //     .finally(() => this.setState({ loading: false }));
  // };

  // handleChange = e => {
  //   this.setState({ filter: e.target.value });
  // };

  render() {
    const { filter, imagelist, loading } = this.state;

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
          <ImageGallery filter={this.state.filter} images={imagelist} />
        </main>
        <ToastContainer />
      </div>
    );
  }
}






