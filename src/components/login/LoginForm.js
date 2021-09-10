import React, { useState } from 'react';
import { connect } from 'react-redux';

import Button from '../general/Button';
import TextInput from '../general/TextInput';
import { login } from '../../redux/actions/auth.action';
import { Redirect } from 'react-router';

const LoginForm = ({ isAuthenticated, login }) => {
  const [loginFormContent, setForm] = useState({
    username: '',
    password: '',
  });

  const handleInputChange = (event) => setForm({ ...loginFormContent, [event.target.name]: event.target.value });

  const handleSubmitForm = (event) => {
    event.preventDefault();

    login(loginFormContent);
  };

  if (isAuthenticated) {
    return <Redirect to='/' />;
  }

  return (
    <>
      <form autoComplete='off'>
        <TextInput
          name='username'
          placeholder='Username'
          onInputChange={handleInputChange}
          type='text'
          value={loginFormContent.username}
        />
        <TextInput
          name='password'
          placeholder='Password'
          onInputChange={handleInputChange}
          type='password'
          value={loginFormContent.password}
        />
        <Button text='Submit' onButtonClick={handleSubmitForm} />
      </form>
    </>
  );
};

const mapStateToProps = (state) => ({
  isAuthenticated: state.auth.isAuthenticated,
});

const mapDispatchToProps = {
  login,
};

export default connect(mapStateToProps, mapDispatchToProps)(LoginForm);
