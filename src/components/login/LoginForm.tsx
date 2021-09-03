import React, { useState } from 'react';

import Button from '../general/Button';
import TextInput from '../general/TextInput';

import AuthService from '../../services/auth.service';
import { LoginFormProps } from '../../models/login.model';

const LoginForm = (props: LoginFormProps) => {
  const [loginFormContent, setForm] = useState({
    username: '',
    password: '',
  });

  const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) =>
    setForm({ ...loginFormContent, [event.target.name]: event.target.value });

  const handleSubmitForm = async () => {
    const { username, password } = loginFormContent;
    const authSuccess = await AuthService.login({ username, password });

    if (authSuccess) {
      props.history.push('/');
    } else {
      // show a message to user indicating login error
    }
  };

  return (
    <>
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
    </>
  );
};

export default LoginForm;
