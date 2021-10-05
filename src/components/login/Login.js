import { useState } from 'react';
import { connect } from 'react-redux';
import { Redirect } from 'react-router';
import { isEmpty, omitBy, isNil } from 'lodash';

import { login } from '../../redux/actions/auth.action';
import { GeneralXLHeader } from '../styles/App.style';
import {
  LoginButton,
  LoginContainer,
  LoginForm,
  LoginFormFooter,
  LoginFormInput,
  LogoImage,
  SignUpLink,
  SignUpText,
} from '../styles/Login.style';

import logo from '../../assets/logo-with-text.png';

const Login = ({ isAuthenticated, login }) => {
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

    return omitBy(errors, isNil);
  };

  if (isAuthenticated) {
    return <Redirect to='/' />;
  }

  return (
    <LoginContainer>
      <GeneralXLHeader>Log In</GeneralXLHeader>
      <LoginForm autoComplete='off'>
        <LoginFormInput
          className='username-input input'
          name='username'
          error={loginFormContent.errors.username}
          placeholder='Username'
          onInputChange={handleInputChange('username')}
          type='text'
          value={loginFormContent.username}
        />
        <LoginFormInput
          className='password-input input'
          name='password'
          error={loginFormContent.errors.password}
          placeholder='Password'
          onInputChange={handleInputChange('password')}
          type='password'
          value={loginFormContent.password}
        />
        <LoginFormFooter>
          <LoginButton text='Log in' onButtonClick={handleSubmitForm} />
          <SignUpText>
            New to the Phansite? <SignUpLink to='/signup'>Sign up</SignUpLink>
          </SignUpText>
        </LoginFormFooter>
      </LoginForm>
      <LogoImage src={logo} />
    </LoginContainer>
  );
};

const mapStateToProps = (state) => ({
  isAuthenticated: state.auth.isAuthenticated,
});

const mapDispatchToProps = {
  login,
};

export default connect(mapStateToProps, mapDispatchToProps)(Login);
