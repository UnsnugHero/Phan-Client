import React from 'react';
import PropTypes from 'prop-types';

import { FooterColumnContainer, FooterColumnHeader, FooterColumnLinks, FooterLink } from '../styles/Footer.style';

const FooterColumn = ({ columnHeader, links }) => {
  return (
    <FooterColumnContainer>
      <FooterColumnHeader>{columnHeader}</FooterColumnHeader>
      <FooterColumnLinks>
        {links.map((link, idx) => (
          <li id={idx}>
            <FooterLink to={link.path}>{link.displayText}</FooterLink>
          </li>
        ))}
      </FooterColumnLinks>
    </FooterColumnContainer>
  );
};

FooterColumn.propTypes = {
  columnHeader: PropTypes.string.isRequired,
  links: PropTypes.array.isRequired,
};

export default FooterColumn;
