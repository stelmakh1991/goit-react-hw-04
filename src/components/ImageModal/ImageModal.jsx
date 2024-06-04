import * as S from "./ImageModal.style";

const ImageModal = ({ isOpen, onClose, photo }) => {
  return (
    <S.Modal isOpen={!!isOpen} onRequestClose={onClose} style={{
      overlay: {
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        padding: "20px"
      }
    }}>
      { photo && ( 
        <img src={photo.urls.regular} alt={photo.alt} />
      )}
    </S.Modal>
  );
};

export default ImageModal;