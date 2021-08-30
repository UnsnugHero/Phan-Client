import React, { useState } from 'react';

import Button from '../general/Button';
import TextInput from '../general/TextInput';

const LoginForm = () => {
  const [loginFormContent, setForm] = useState({
    username: '',
    password: '',
  });

  const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) =>
    setForm({ ...loginFormContent, [event.target.name]: event.target.value });

  return (
    <>
      <TextInput
        name='username'
        text='username'
        onInputChange={handleInputChange}
        value={loginFormContent.username}
      />
      <TextInput
        name='password'
        text='password'
        onInputChange={handleInputChange}
        value={loginFormContent.password}
      />
      <Button
        text='Submit'
        onButtonClick={() => {
          // submit log in form to backend and validate
          // it returns a token to store in localstorage
        }}
      />
    </>
  );
};

export default LoginForm;
