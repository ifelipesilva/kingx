import React from 'react';
import PropTypes from 'prop-types';
//styles
import { Wrapper } from './Button.Styles';
import { string } from 'prop-types';

const Button = ({ text, callback }) => (
  <Wrapper type="button" onClick={callback}>
    {text}
  </Wrapper>
);

Button.propTypes = {
  text: PropTypes.string,
  callback: PropTypes.func,
};

export default Button;
