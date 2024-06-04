import ImageCard from "../ImageCard/ImageCard";
import * as S from './ImageGallery.style'


function ImageGallery({ photos, openModal }) {
  return (
    <S.List>
      {photos?.map((photo) => (
        <ImageCard
          key={photo.id}
          image={photo.urls.small}
          alt={photo.alt_description}
          onClick={() => openModal(photo)}
        />
      ))}
    </S.List>
  );
}

export default ImageGallery;