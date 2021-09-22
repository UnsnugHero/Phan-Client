import React from 'react';
import { Link } from 'react-router-dom';

import { FooterContainer } from '../styles/Footer.style';

const Footer = () => {
  return (
    <FooterContainer>
      <Link to='/about'>About</Link>
    </FooterContainer>
  );
};

export default Footer;
