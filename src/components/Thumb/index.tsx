import React from 'react';
import { Link } from 'react-router-dom';
//styles
import { Image, Title, Year } from './Thumb.Styles';

//types
type Props = {
  title: string,
  image:  string,
  year:  string,
  movieId: number,
  clickable: boolean,
}

const Thumb: React.FC<Props> = ({ title, year, image, movieId, clickable }) => (
  <div>
    {clickable ? (
      <Link to={`/${movieId}`}>
        <Image src={image} alt="movie-thumb" />
      </Link>
    ) : (
      <>
        <Image src={image} alt="movie-thumb" />
      </>
    )}

    <Title>{title}</Title>
    <Year>{year}</Year>
  </div>
);

export default Thumb;
