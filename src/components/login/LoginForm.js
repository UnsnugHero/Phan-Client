import { useState } from 'react';
import { connect } from 'react-redux';
import { Redirect } from 'react-router';
import { isEmpty } from 'lodash';

import { login } from '../../redux/actions/auth.action';
import Button from '../general/Button';
import TextInput from '../general/TextInput';

const LoginForm = ({ isAuthenticated, login }) => {
  const [loginFormContent, setForm] = useState({
    username: '',
    password: '',
    errors: { username: null, password: null },
  });

  const handleInputChange = (formFieldKey) => (event) =>
    setForm({
      ...loginFormContent,
      [formFieldKey]: event.target.value,
    });

  const handleSubmitForm = (event) => {
    event.preventDefault();
    console.log('nee');

    const errors = getFormErrors();
    setForm({ ...loginFormContent, errors });

    if (isEmpty(errors)) {
      const loginPayload = {
        username: loginFormContent.username,
        password: loginFormContent.password,
      };

      login(loginPayload);
    }
  };

  const getFormErrors = () => {
    const errors = { username: null, password: null };

    // username validations
    if (loginFormContent.username === '') {
      errors['username'] = 'Field is required';
    }

    // password validations
    if (loginFormContent.password === '') {
      errors['password'] = 'Field is required';
    }

    setForm({ ...loginFormContent, errors });
    return isEmpty(errors);
  };

  if (isAuthenticated) {
    return <Redirect to='/' />;
  }

  return (
    <>
      <form autoComplete='off'>
        <TextInput
          name='username'
          error={loginFormContent.errors.username}
          placeholder='Username'
          onInputChange={handleInputChange('username')}
          type='text'
          value={loginFormContent.username.value}
        />
        <TextInput
          name='password'
          error={loginFormContent.errors.password}
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
