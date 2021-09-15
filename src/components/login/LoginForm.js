import React, { useState } from 'react';
import { connect } from 'react-redux';
import { Redirect } from 'react-router';

import Button from '../general/Button';
import TextInput from '../general/TextInput';
import { login } from '../../redux/actions/auth.action';

const LoginForm = ({ isAuthenticated, login }) => {
  const [loginFormContent, setForm] = useState({
    username: '',
    password: '',
    errors: {},
  });

  const handleInputChange = (formFieldKey) => (event) =>
    setForm({
      ...loginFormContent,
      [formFieldKey]: event.target.value,
    });

  const handleSubmitForm = (event) => {
    event.preventDefault();

    if (handleFormValidation()) {
      const loginPayload = {
        username: loginFormContent.username,
        password: loginFormContent.password,
      };

      login(loginPayload);
    }
  };

  const handleFormValidation = () => {
    let isValidForm = true;
    const errors = {};

    // username validations
    if (loginFormContent.username === '') {
      errors['username'] = 'Field is required';
      isValidForm = false;
    }

    // password validations
    if (loginFormContent.password === '') {
      errors['password'] = 'Field is required';
      isValidForm = false;
    }

    setForm({ ...loginFormContent, errors });
    return isValidForm;
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
          onInputChange={handleInputChange('username')}
          type='text'
          value={loginFormContent.username.value}
        />
        <TextInput
          name='password'
          placeholder='Password'
          onInputChange={handleInputChange('password')}
          type='password'
          value={loginFormContent.password.value}
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
