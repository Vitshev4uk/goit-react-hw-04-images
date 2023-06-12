import React from "react";
import css from './Searchbar.module.css';
import PropTypes from 'prop-types';

function Searchbar(props) {
  const [value, setValue] = React.useState('');
  const [submitted, setSubmitted] = React.useState(false);

  const  handleInputValue = event => {
    const { value } = event.target;
    setValue(value);
  };

  const onClickBtn = () => {
    setSubmitted(!submitted);
  };

  const { onSubmit } = props;

  return (
      <>
        <header className={css.Searchbar}>
          <form
            className={css.SearchForm}
            onSubmit={(e) => { e.preventDefault(); onSubmit(value)} }
          >
            <button
              type="submit"
              onClick={onClickBtn}
              className={css.SearchFormButton}
            >
              <span className={css.SearchFormButtonLabel}>Search</span>
            </button>

            <input
              onInput={handleInputValue}
              className={css.SearchFormInput}
              type="text"
              autoComplete="off"
              autoFocus
              placeholder="Search images and photos"
              value={value}
            />
          </form>
        </header>
      </>
    );



}

Searchbar.propTypes = {
  onSubmit: PropTypes.func.isRequired,
};

export default Searchbar;
