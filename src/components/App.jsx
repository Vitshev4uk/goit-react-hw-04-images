import React, { useEffect } from 'react';
// import { Component } from 'react';
import css from 'styles.css/App/App.module.css';
import Searchbar from './Searchbar/Searchbar';
import ImageGallery from './ImageGallery/ImageGallery';
import axios from 'axios';
import Loader from './Loader/Loader';
import Button from 'components/Button/Button';

function App() {
  const [images, setImages] = React.useState([]);
  const [page, setPage] = React.useState(1);
  const [isLoading, setIsLoading] = React.useState(false);
  const [inputValue, setInputValue] = React.useState('');
  const [prevInputValue] = React.useState(inputValue);
  const [submitted, setSubmited] = React.useState(false);

  const onSubmitForm = event => {
    setInputValue(event);
    setImages([]);
    setPage(1);
    setIsLoading(true);
  };

  useEffect(() => {
    const fetchData = async() => {
    if (prevInputValue !== inputValue) {
      const key = '35632992-e10a39a36f128534b3670000b';
      const URL = 'https://pixabay.com/api/';
      const limit = 12;

      try {
        const response = await axios.get(
          `${URL}?key=${key}&q=${inputValue}&image_type=photo&orientation=horizontal&per_page=${limit}&page=${page}`
        );
        const data = response.data.hits;
        console.log(data);
        setImages(prevImages => [...prevImages, ...data]);
        setIsLoading(false);
      } catch (error) {
        console.log(error);
      } finally {
        setSubmited(true);
      }
    }
    }
    fetchData();
    
  }, [prevInputValue, inputValue, page]);

  return (
    <div className={css.App}>
      <Searchbar onSubmit={onSubmitForm} />
      {isLoading && <Loader />}
      <ImageGallery images={images} />
      {submitted && (
        <Button
          onClick={() => {
            setPage(page + 1);
          }}
        >
          Load more
        </Button>
      )}
    </div>
  );
}

export default App;
