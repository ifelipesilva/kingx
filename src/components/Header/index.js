import React from 'react';

import logo from '../../images/logo.svg';
import TMDBLogo from '../../images/tmdb_logo.svg';

import { Wrapper, Content, LogoImg, TMDBLogoImg } from './Header.styles';

const Header = () => {
  return (
    <Wrapper>
      <Content>
        <LogoImg src={logo} alt="kingX" />

        <TMDBLogoImg src={TMDBLogo} alt="tmdbLogo" />
      </Content>
    </Wrapper>
  );
};

export default Header;
