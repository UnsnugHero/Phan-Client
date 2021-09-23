import React from 'react';
import { Link } from 'react-router-dom';

import { FooterContainer } from '../styles/Footer.style';
import { FOOTER_ABOUT_LINKS, FOOTER_COMMUNITY_LINKS, FOOTER_SOCIAL_LINKS } from './Footer.constants';
import FooterColumn from './FooterColumn';

const Footer = () => {
  return (
    <FooterContainer>
      <FooterColumn columnHeader='About' links={FOOTER_ABOUT_LINKS} />
      <FooterColumn columnHeader='Community' links={FOOTER_COMMUNITY_LINKS} />
      <FooterColumn columnHeader='Socials' links={FOOTER_SOCIAL_LINKS} />
    </FooterContainer>
  );
};

export default Footer;
