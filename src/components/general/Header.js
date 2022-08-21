import React, { useState, useEffect } from 'react';
import { connect } from 'react-redux';
import { faBars } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

import { logout } from '../../redux/actions/auth.action';
import {
  BarsIconWrapper,
  HeaderContainer,
  HeaderLink,
  HeaderList,
  HeaderLogo,
  LinksContainer,
  LogoLink,
  MobileHeaderContainer,
  MobileLink,
  MobileLinks,
  MobileLinksContainer,
} from '../styles/Header.style';
import { useWindowDimensions } from '../../util/hooks';

import logo from '../../assets/joker-mask.png';
import { useHistory } from 'react-router-dom';

const unauthLinks = [
  { link: '/login', text: 'Login' },
  { link: '/signup', text: 'Signup' },
];

const authLinks = [
  { link: '/profile', text: 'Profile' },
  { link: '/', text: 'Logout' },
];

const Header = ({ isAuthenticated, loading, logout }) => {
  const history = useHistory();
  const { width } = useWindowDimensions();
  const [isMenuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    if (width > 750) {
      setMenuOpen(false);
    }
  }, [width]);

  history.listen(() => {
    setMenuOpen(false);
  });

  if (loading) {
    return <HeaderContainer className='header-container'></HeaderContainer>;
  }

  const onBarsClick = () => setMenuOpen(!isMenuOpen);

  const desktopUnauthLinks = unauthLinks.map(({ link, text }, idx) => (
    <li key={idx}>
      <HeaderLink to={link}>{text}</HeaderLink>
    </li>
  ));

  const desktopAuthLinks = authLinks.map(({ link, text }, idx) => (
    <li key={idx}>
      <HeaderLink to={link} onClick={link === '/' ? logout : () => {}}>
        {text}
      </HeaderLink>
    </li>
  ));

  const mobileUnauthLinks = unauthLinks.map(({ link, text }, idx) => (
    <li key={idx}>
      <MobileLink to={link}>{text}</MobileLink>
    </li>
  ));

  const mobileAuthLinks = authLinks.map(({ link, text }, idx) => (
    <li key={idx}>
      <MobileLink to={link} onClick={link === '/' ? logout : () => {}}>
        {text}
      </MobileLink>
    </li>
  ));

  // Desktop
  const desktopLinks = (
    <LinksContainer className='links-container'>
      <HeaderList className='permanent-links'>
        <li>
          <HeaderLink to='/requests'>Requests</HeaderLink>
        </li>
        <li>
          <HeaderLink to='/mission'>Mission</HeaderLink>
        </li>
      </HeaderList>
      <LogoLink to='/'>
        <HeaderLogo className='header-logo' src={logo} />
      </LogoLink>
      <HeaderList className='conditional-links'>{isAuthenticated ? desktopAuthLinks : desktopUnauthLinks}</HeaderList>
    </LinksContainer>
  );

  // Mobile
  const mobileLinksMenu = (
    <MobileLinks>
      <li>
        <MobileLink to='/requests'>Requests</MobileLink>
      </li>
      <li>
        <MobileLink to='/mission'>Mission</MobileLink>
      </li>
      {isAuthenticated ? mobileAuthLinks : mobileUnauthLinks}
    </MobileLinks>
  );

  const mobileLinks = (
    <MobileHeaderContainer>
      <MobileLinksContainer className='links-container'>
        <LogoLink to='/'>
          <HeaderLogo className='header-logo' src={logo} />
        </LogoLink>
        <BarsIconWrapper onClick={onBarsClick}>
          <FontAwesomeIcon color='white' icon={faBars} size='lg'></FontAwesomeIcon>
        </BarsIconWrapper>
      </MobileLinksContainer>
      {isMenuOpen && mobileLinksMenu}
    </MobileHeaderContainer>
  );

  return <HeaderContainer className='header-container'>{width > 750 ? desktopLinks : mobileLinks}</HeaderContainer>;
};

const mapStateToProps = (state) => ({
  isAuthenticated: state.auth.isAuthenticated,
  loading: state.auth.loading,
});

const mapDispatchToProps = {
  logout,
};

export default connect(mapStateToProps, mapDispatchToProps)(Header);
