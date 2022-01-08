import React from 'react';
import { Link } from 'react-router-dom';

import logo from '../../images/logo.svg';
import TMDBLogo from '../../images/tmdb_logo.svg';

import { Wrapper, Content, LogoImg, TMDBLogoImg } from './Header.styles';

const Header: React.FC = () => {
  return (
    <Wrapper>
      <Content>
        <Link to="/">
          <LogoImg src={logo} alt="kingX" />
        </Link>

        <TMDBLogoImg src={TMDBLogo} alt="tmdbLogo" />
      </Content>
    </Wrapper>
  );
};

export default Header;
