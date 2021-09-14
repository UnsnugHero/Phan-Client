import React from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';

import { logout } from '../../redux/actions/auth.action';

const Header = ({ isAuthenticated, loading, logout }) => {
  const unauthLinks = (
    <ul className='unauth-links'>
      <li>
        <Link to='/login'>Login</Link>
      </li>
      <li>
        <Link to='/signup'>Signup</Link>
      </li>
    </ul>
  );

  const authLinks = (
    <ul className='auth-links'>
      <li>
        <Link to='/profile'>Profile</Link>
      </li>
      <li>
        <Link to='/' onClick={logout}>
          Logout
        </Link>
      </li>
    </ul>
  );

  return (
    <div className='phan-header'>
      {/* something for the home button here? the phan thieves icon */}
      {!loading && (
        <div className='links'>
          <ul className='permanent-links'>
            <li>
              <Link to='/requests'>Requests</Link>
            </li>
            <li>
              <Link to='/forum'>Forum</Link>
            </li>
          </ul>
          {isAuthenticated ? authLinks : unauthLinks}
        </div>
      )}
    </div>
  );
};

const mapStateToProps = (state) => ({
  isAuthenticated: state.auth.isAuthenticated,
  loading: state.auth.loading
});

const mapDispatchToProps = {
  logout
};

export default connect(mapStateToProps, mapDispatchToProps)(Header);
