import { useState } from 'react';

import TextInput from '../general/TextInput';
import Button from '../general/Button';

import AuthService from '../../services/auth.service';
import { SignupFormProps } from '../../models/signup.model';

const SignupForm = (props: SignupFormProps) => {
  const [signupFormContent, setForm] = useState({
    username: '',
    password: '',
    confirmPassword: '',
  });

  const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) =>
    setForm({ ...signupFormContent, [event.target.name]: event.target.value });

  const handleSubmitForm = async () => {
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
      <TextInput
        name='username'
        placeholder='Username'
        onInputChange={handleInputChange}
        value={signupFormContent.username}
      />
      <TextInput
        name='password'
        placeholder='Password'
        onInputChange={handleInputChange}
        value={signupFormContent.password}
      />
      <TextInput
        name='confirmPassword'
        placeholder='Confirm Password'
        onInputChange={handleInputChange}
        value={signupFormContent.confirmPassword}
      />
      <Button text='Submit' onButtonClick={handleSubmitForm} />
    </>
  );
};

export default SignupForm;
