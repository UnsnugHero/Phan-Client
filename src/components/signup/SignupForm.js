import React, { useState } from 'react';
import { Redirect } from 'react-router';
import { connect } from 'react-redux';
import { isEmpty } from 'lodash';
import PropTypes from 'prop-types';

import { signup } from '../../redux/actions/auth.action';
import TextInput from '../general/TextInput';
import Button from '../general/Button';
import Checkbox from '../general/Checkbox';

const SignupForm = ({ isAuthenticated, signup }) => {
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

    if (handleFormValidation()) {
      const signupPayload = {
        username: signupFormContent.username,
        password: signupFormContent.password,
      };

      signup(signupPayload);
    }
  };

  const handleFormValidation = () => {
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

    setForm({ ...signupFormContent, errors });
    return isEmpty(errors);
  };

  if (isAuthenticated) {
    return <Redirect to='/' />;
  }

  return (
    <>
      <form autoComplete='off'>
        <TextInput
          error={signupFormContent.errors.username}
          name='username'
          onInputChange={handleInputChange('username')}
          placeholder='Username'
          type='text'
          value={signupFormContent.username}
        />
        <TextInput
          error={signupFormContent.errors.password}
          name='password'
          placeholder='Password'
          onInputChange={handleInputChange('password')}
          type='password'
          value={signupFormContent.password}
        />
        <TextInput
          error={signupFormContent.errors.confirmPassword}
          name='confirmPassword'
          placeholder='Confirm Password'
          onInputChange={handleInputChange('confirmPassword')}
          type='password'
          value={signupFormContent.confirmPassword}
        />
        <Checkbox
          checked={signupFormContent.isAnonymous}
          name='isAnonymous'
          text='Appear Anonymous on Site?'
          onInputChange={handleCheckboxClick('isAnonymous')}
        />
        <Button text='Submit' onButtonClick={handleSubmitForm} />
      </form>
    </>
  );
};

SignupForm.propTypes = {
  signup: PropTypes.func.isRequired,
  isAuthenticated: PropTypes.bool,
};

const mapStateToProps = (state) => ({
  isAuthenticated: state.auth.isAuthenticated,
});

const mapDispatchToProps = {
  signup,
};

export default connect(mapStateToProps, mapDispatchToProps)(SignupForm);
