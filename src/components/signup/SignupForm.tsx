import React, { useState } from 'react';

import TextInput from '../general/TextInput';
import Button from '../general/Button';

import AuthService from '../../services/auth.service';
import { SignupFormProps } from '../../models/signup.model';
import Checkbox from '../general/Checkbox';

const SignupForm = (props: SignupFormProps) => {
  const [signupFormContent, setForm] = useState({
    username: '',
    password: '',
    confirmPassword: '',
    isAnonymous: true,
  });

  const handleCheckboxClick = (event: React.ChangeEvent<HTMLInputElement>) =>
    setForm({ ...signupFormContent, [event.target.name]: event.target.checked });

  const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) =>
    setForm({ ...signupFormContent, [event.target.name]: event.target.value });

  const handleSubmitForm = async (event: React.ChangeEvent<HTMLButtonElement>) => {
    event.preventDefault();

    const { username, password, confirmPassword } = signupFormContent;

    if (password !== confirmPassword) {
      // TODO: show message to user indicating passwords do not match
      // TODO: we probably want a more than 8 character validation here too
      // and it cant be empty, and that should be a input validation
      return;
    }

    const authSuccess = await AuthService.login({ username, password });

    if (authSuccess) {
      props.history.push('/');
    } else {
      // show a message to user indicating login error
    }
  };

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

export default SignupForm;
