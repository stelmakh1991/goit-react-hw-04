import { useEffect, useState } from "react";
import Loader from "./components/Loader/Loader";
import { requestPhotos } from "./components/Services/Api";
import ErrorMessage from "./components/ErrorMessage/ErrorMessage";
import ImageGallery from "./components/ImageGallery/ImageGallery";
import SearchBar from "./components/SearchBar/SearchBar";
import LoadMoreBtn from "./components/LoadMoreBtn/LoadMoreBtn";
import ImageModal from "./components/ImageModal/ImageModal";
import { GlobalCSS } from "./styles/Global";
import 'izitoast/dist/css/iziToast.min.css';
import iziToast from "izitoast";

const App = () => {
  const [photos, setPhotos] = useState([]);
  const [loading, setLoading] = useState(false);
  const [isError, setIsError] = useState(false);
  const [errorMessage, setErrorMessage] = useState('');
  const [currentPage, setCurrentPage] = useState(1);
  const [value, setValue] = useState("");
  const [openModal, setOpenModal] = useState(false);
  const [selectedPhoto, setSelectedPhoto] = useState(null);

  async function fetchImages(value, page) {
    try {
      setLoading(true);

      const data = await requestPhotos({
        queryValue: value,
        page,
      });

      setPhotos((prevPhotos) => [...prevPhotos, ...data.results]);
    } catch (e) {
      setIsError(true);
      setErrorMessage(e.message)
    } finally {
      setLoading(false);
    }
  }

  useEffect(() => {
    if (value.trim() !== "") {
      fetchImages(value, currentPage);
    }
  }, [value, currentPage]);

  const handleSubmit = (value) => {
    if (value === "") {
      iziToast.error({
          title: 'Error',
          message: 'Enter the value before submitting.',
          position: 'topRight'
      });
      return;}
    setPhotos([]);
    setCurrentPage(1);
    setValue(value);
  };

  return (
    <>
      <GlobalCSS />
      <SearchBar onSubmit={handleSubmit} />
      {loading && <Loader />}
      {isError && <ErrorMessage message={errorMessage} />}
      <ImageGallery
        photos={photos}
        openModal={(photo) => {
          setSelectedPhoto(photo); 
          setOpenModal(true);
        }}
      />
      {photos.length !== 0 && (
        <LoadMoreBtn onClick={() => setCurrentPage(currentPage + 1)} />
      )}
      <ImageModal isOpen={openModal} photo={selectedPhoto} onClose={() => setOpenModal(false)} />
    </>
  );
};

export default App;