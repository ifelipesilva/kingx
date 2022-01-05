import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
//styles
import { Image, Title, Year } from './Thumb.Styles';

const Thumb = ({ title, year, image, movieId, clickable }) => (
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

Thumb.propTypes = {
  title: PropTypes.string,
  image: PropTypes.string,
  year: PropTypes.string,
  movieId: PropTypes.number,
  clickable: PropTypes.bool,
};

export default Thumb;
