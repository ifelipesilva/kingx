import react from 'react';
//styles
import { Image, Title, Year } from './Thumb.Styles';

const Thumb = ({ title, year, image, movieId, Clickable }) => (
  <div>
    <Image src={image} alt="movie-thumb" />
    <Title>{title}</Title>
    <Year>{year}</Year>
  </div>
);

export default Thumb;
