import { useState, useEffect, useCallback } from 'react';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

import { fetchApiImg } from '../services/api';
import Searchbar from './Searchbar';
import ImageGallery from './ImageGallery';
import Button from './Button';
import Modal from './Modal';
import Loader from './Loader';

import css from './App.module.css';
// import ImageGalleryItem from './ImageGalleryItem';

const App = () => {
  const [images, setImages] = useState([]);
  const [search, setSearch] = useState('');
  const [page, setPage] = useState(1);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const [currentImage, setCurrentImage] = useState(null);
  

  useEffect(() => {
    if (!search) {
      return;
    }
    const getImages = async () => {
      try {
        setLoading(true);
        const data = await fetchApiImg(search, page);

        if (data.hits.length === 0) {
          return toast.error('Oops, there are no such pictures. Try again');
        }

        setImages(prevState => [...prevState, ...data.hits]);
      } catch (error) {
        setError(error.message);
      } finally {
        setLoading(false);
      }
    };
    getImages();
  }, [search, page, setLoading, setImages, setError, setImages]);

  const onSearchImages = ({ search }) => {
    if (search.trim() === '') {
      setImages([]);
      setPage(1);
      return toast.error('Repeat the question again please');
    }
    setSearch(search);
    setImages([]);
    setPage(1);
  };

  const showImage = data => {
    setCurrentImage(data);
   };

  const loadMore = () => {
    setPage(prevPage => prevPage + 1);
  };

  const onClose = () => {
       setCurrentImage(null);
  };

  return (
    <>
      <Searchbar onSubmit={onSearchImages} />

      {error && <p>Something went wrong. Try reloading the page</p>}

      {images.length > 0 && (
        <ImageGallery images={images} openModal={showImage} search={search} />
      )}

      {images.length > 0 && !loading && <Button onLoadMore={loadMore} />}

      <ToastContainer />

      {loading && <Loader />}

      {currentImage && (
        <Modal
          className={css.CurrentImage}
          onClose={onClose}
          currentImage={currentImage}
          search={search}
        />
        )}
    </>
  );
};

export default App;
