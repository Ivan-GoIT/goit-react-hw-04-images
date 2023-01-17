import css from './Searchbar.module.css';
import { ImSearch } from 'react-icons/im';
import { Component } from 'react';
import { toast } from 'react-toastify';

export class Searchbar extends Component {
  state = {
    formSearchQuery: '',
  };

  onChangeHandler = evt => {
    this.setState({ formSearchQuery: evt.currentTarget.value.trim() });
  };

  onSubmitFormHandler = evt => {
    evt.preventDefault();
    const{formSearchQuery}=this.state
    if (!formSearchQuery.length) {
      toast.warning('Enter something in the search bar');
      return;
    }
    this.props.onSubmit(formSearchQuery);
    this.setState({formSearchQuery:''})
  };

  render() {
    return (
      <header className={css.searchbar}>
        <form className={css.searchForm} onSubmit={this.onSubmitFormHandler}>
          <button type="submit" className={css['searchForm-button']}>
            <span className={css['button-labe']}>
              <ImSearch className={css.icon} />
            </span>
          </button>

          <input
            className={css.input}
            type="text"
            autoComplete="off"
            autoFocus
            value={this.state.formSearchQuery}
            placeholder="Search images and photos"
            onChange={this.onChangeHandler}
          />
        </form>
      </header>
    );
  }
}
