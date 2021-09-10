import React, { useState } from 'react';
import { Redirect } from 'react-router';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';

import TextInput from '../general/TextInput';
import Button from '../general/Button';
import Checkbox from '../general/Checkbox';
import { signup } from '../../redux/actions/auth.action';

const SignupForm = ({ isAuthenticated, signup }) => {
  const [signupFormContent, setForm] = useState({
    username: '',
    password: '',
    confirmPassword: '',
    isAnonymous: true,
  });

  const handleCheckboxClick = (event) => setForm({ ...signupFormContent, [event.target.name]: event.target.checked });

  const handleInputChange = (event) => setForm({ ...signupFormContent, [event.target.name]: event.target.value });

  const handleSubmitForm = async (event) => {
    event.preventDefault();

    signup(signupFormContent);
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
          value={signupFormContent.username}
        />
        <TextInput
          name='password'
          placeholder='Password'
          onInputChange={handleInputChange}
          type='password'
          value={signupFormContent.password}
        />
        <TextInput
          name='confirmPassword'
          placeholder='Confirm Password'
          onInputChange={handleInputChange}
          type='password'
          value={signupFormContent.confirmPassword}
        />
        <Checkbox
          checked={signupFormContent.isAnonymous}
          name='isAnonymous'
          text='Appear Anonymous on Site?'
          onInputChange={handleCheckboxClick}
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
