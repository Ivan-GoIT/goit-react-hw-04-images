import css from './Searchbar.module.css';
import { ImSearch } from 'react-icons/im';
import { useState } from 'react';
import { toast } from 'react-toastify';

export const Searchbar = ({ onSubmit }) => {
  const [formSearchQuery, setFormSearchQuery] = useState('');

  const onChangeHandler = evt => {
    setFormSearchQuery(evt.currentTarget.value.trim());
  };

  const onSubmitFormHandler = evt => {
    evt.preventDefault();
    if (!formSearchQuery.length) {
      toast.warning('Enter something in the search bar');
      return;
    }
    onSubmit(formSearchQuery);
    setFormSearchQuery('');
  };

  return (
    <header className={css.searchbar}>
      <form className={css.searchForm} onSubmit={onSubmitFormHandler}>
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
          value={formSearchQuery}
          placeholder="Search images and photos"
          onChange={onChangeHandler}
        />
      </form>
    </header>
  );
};
