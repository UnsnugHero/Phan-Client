import React, { useState } from 'react';

import Button from '../general/Button';
import TextInput from '../general/TextInput';

const LoginForm = (props) => {
  const [loginFormContent, setForm] = useState({
    username: '',
    password: '',
  });

  const handleInputChange = (event) => setForm({ ...loginFormContent, [event.target.name]: event.target.value });

  const handleSubmitForm = async (event) => {
    event.preventDefault();

    const { username, password } = loginFormContent;

    // if (authSuccess) {
    //   props.history.push('/');
    // } else {
    //   // show a message to user indicating login error
    // }
  };

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

export default LoginForm;
