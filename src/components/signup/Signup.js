import React, { useState } from 'react';
import { Redirect } from 'react-router';
import { connect } from 'react-redux';
import { isEmpty, omitBy, isNil } from 'lodash';
import PropTypes from 'prop-types';

import { signup } from '../../redux/actions/auth.action';
import {
  LoginLink,
  LoginText,
  SignupButton,
  SignupCheckbox,
  SignupContainer,
  SignupForm,
  SignupFormInput,
  SignupHeader,
} from '../styles/Signup.style';
import { GeneralXLHeader } from '../styles/App.style';
import { LogoImage } from '../styles/Login.style';

import logo from '../../assets/logo-with-text.png';

const Signup = ({ isAuthenticated, signup }) => {
  const [signupFormContent, setForm] = useState({
    username: '',
    password: '',
    confirmPassword: '',
    isAnonymous: true,
    errors: { username: null, password: null, confirmPassword: null },
  });

  const handleCheckboxClick = (fieldKey) => (event) =>
    setForm({ ...signupFormContent, [fieldKey]: event.target.checked });

  const handleInputChange = (fieldKey) => (event) => setForm({ ...signupFormContent, [fieldKey]: event.target.value });

  const handleSubmitForm = async (event) => {
    event.preventDefault();

    const errors = getFormErrors();
    setForm({ ...signupFormContent, errors });

    if (isEmpty(errors)) {
      const signupPayload = {
        username: signupFormContent.username,
        password: signupFormContent.password,
      };

      signup(signupPayload);
    }
  };

  const getFormErrors = () => {
    const errors = { username: null, password: null, confirmPassword: null };

    if (signupFormContent.username === '') {
      errors['username'] = 'Field is required';
    }

    if (signupFormContent.password === '') {
      errors['password'] = 'Field is required';
    }

    if (signupFormContent.password !== signupFormContent.confirmPassword) {
      errors['confirmPassword'] = 'Passwords must match';
    }

    return omitBy(errors, isNil);
  };

  if (isAuthenticated) {
    return <Redirect to='/' />;
  }

  return (
    <SignupContainer>
      <SignupHeader>Sign Up</SignupHeader>
      <LoginText>
        Already have an account? <LoginLink to='/login'>Login</LoginLink>
      </LoginText>
      <SignupForm autoComplete='off'>
        <SignupFormInput
          error={signupFormContent.errors.username}
          name='username'
          onInputChange={handleInputChange('username')}
          placeholder='Username'
          type='text'
          value={signupFormContent.username}
        />
        <SignupFormInput
          error={signupFormContent.errors.password}
          name='password'
          placeholder='Password'
          onInputChange={handleInputChange('password')}
          type='password'
          value={signupFormContent.password}
        />
        <SignupFormInput
          error={signupFormContent.errors.confirmPassword}
          name='confirmPassword'
          placeholder='Confirm Password'
          onInputChange={handleInputChange('confirmPassword')}
          type='password'
          value={signupFormContent.confirmPassword}
        />
        <SignupCheckbox
          checked={signupFormContent.isAnonymous}
          name='isAnonymous'
          text='Appear Anonymous on Site?'
          onInputChange={handleCheckboxClick('isAnonymous')}
        />
        <SignupButton text='Submit' onButtonClick={handleSubmitForm} />
      </SignupForm>
      <LogoImage src={logo} />
    </SignupContainer>
  );
};

Signup.propTypes = {
  signup: PropTypes.func.isRequired,
  isAuthenticated: PropTypes.bool,
};

const mapStateToProps = (state) => ({
  isAuthenticated: state.auth.isAuthenticated,
});

const mapDispatchToProps = {
  signup,
};

export default connect(mapStateToProps, mapDispatchToProps)(Signup);
