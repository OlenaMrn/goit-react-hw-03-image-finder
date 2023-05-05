import React, { Component } from 'react';
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import styles from './Searchbar.module.css';
import { ImSearch } from 'react-icons/im';

export class Searchbar extends Component {
  state = {
    filter: '',
  };

  handleFilterChange = event => {
    this.setState({ filter: event.currentTarget.value.toLowerCase() });
  };

  handleSubmit = event => {
    
    event.preventDefault();
    if (this.state.filter.trim() === '') {
         return toast.info('Type something for search');
   
    };

    this.props.onSubmit(this.state.filter);
    this.setState({ filter: '' });
  };

  render() {
    return (
      <header className={styles.Searchbar}>
        <form className={styles.SearchForm} onSubmit={this.handleSubmit}>
          <button type="submit" className={styles.SearchForm_button}>
            <ImSearch size={20} />
            <span className={styles.SearchForm_button_label}>Search</span>
          </button>

          <input
            className={styles.SearchForm_input}
            type="text"
            autoComplete="off"
            autoFocus
            placeholder="Search images and photos"
            value={this.state.filter}
            onChange={this.handleFilterChange}
          />
        </form>
      </header>
    );
  }
}


