import * as S from './ImageCard.style'

const ImageCard = ({ alt, image, onClick }) => {
  return (
    <li>
      <S.Div>
        <S.Image src={image} alt={alt} onClick={onClick}/>
      </S.Div>
    </li>
  );
};

export default ImageCard;