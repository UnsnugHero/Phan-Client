import React from 'react';
import { connect } from 'react-redux';

import { logout } from '../../redux/actions/auth.action';
import {
  HeaderContainer,
  HeaderLink,
  HeaderList,
  HeaderLogo,
  LinksContainer,
  LogoLink,
} from '../../styled-components/Header';

import logo from '../../assets/logo.png';

const Header = ({ isAuthenticated, loading, logout }) => {
  const unauthLinks = (
    <HeaderList className='conditional-links'>
      <li>
        <HeaderLink to='/login'>Login</HeaderLink>
      </li>
      <li>
        <HeaderLink to='/signup'>Signup</HeaderLink>
      </li>
    </HeaderList>
  );

  const authLinks = (
    <HeaderList className='conditional-links'>
      <li>
        <HeaderLink to='/profile'>Profile</HeaderLink>
      </li>
      <li>
        <HeaderLink to='/' onClick={logout}>
          Logout
        </HeaderLink>
      </li>
    </HeaderList>
  );

  return (
    <HeaderContainer>
      <LogoLink to='/'>
        <HeaderLogo src={logo} />
      </LogoLink>
      {!loading && (
        <LinksContainer>
          <HeaderList className='permanent-links'>
            <li>
              <HeaderLink to='/requests'>Requests</HeaderLink>
            </li>
            <li>
              <HeaderLink to='/forum'>Forum</HeaderLink>
            </li>
          </HeaderList>
          {isAuthenticated ? authLinks : unauthLinks}
        </LinksContainer>
      )}
    </HeaderContainer>
  );
};

const mapStateToProps = (state) => ({
  isAuthenticated: state.auth.isAuthenticated,
  loading: state.auth.loading,
});

const mapDispatchToProps = {
  logout,
};

export default connect(mapStateToProps, mapDispatchToProps)(Header);
