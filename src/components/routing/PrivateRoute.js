import React from 'react';
import { Redirect, Route } from 'react-router';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

const PrivateRoute = ({ component: Component, isAuthenticated, loading, ...rest }) => {
  const shouldRender = !isAuthenticated && !loading;

  return <Route {...rest} render={(props) => (shouldRender ? <Redirect to='/login' /> : <Component {...props} />)} />;
};

PrivateRoute.propTypes = {
  component: PropTypes.object.isRequired,
  isAuthenticated: PropTypes.bool.isRequired,
  loading: PropTypes.bool.isRequired
};

const mapStateToProps = (state) => ({
  isAuthenticated: state.auth.isAuthenticated,
  loading: state.auth.loading
});

export default connect(mapStateToProps)(PrivateRoute);
