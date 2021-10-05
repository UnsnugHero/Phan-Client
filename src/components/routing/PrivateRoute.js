import React from 'react';
import { Redirect, Route } from 'react-router';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { LoadingGif } from '../styles/Request.style';

const PrivateRoute = ({ component: Component, isAuthenticated, loading, ...rest }) => (
  <Route
    {...rest}
    render={(props) =>
      loading ? <LoadingGif /> : isAuthenticated ? <Component {...props} /> : <Redirect to='/login' />
    }
  />
);

PrivateRoute.propTypes = {
  component: PropTypes.func.isRequired,
  isAuthenticated: PropTypes.bool.isRequired,
  loading: PropTypes.bool.isRequired,
};

const mapStateToProps = (state) => ({
  isAuthenticated: state.auth.isAuthenticated,
  loading: state.auth.loading,
});

export default connect(mapStateToProps)(PrivateRoute);
