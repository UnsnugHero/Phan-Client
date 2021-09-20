import { useState } from 'react';
import { connect } from 'react-redux';
import { Redirect } from 'react-router';
import { isEmpty, omitBy, isNil } from 'lodash';

import { login } from '../../redux/actions/auth.action';
import Button from '../general/Button';
import TextInput from '../general/TextInput';
import { LoginFormContainer } from '../styles/LoginForm.style';

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
    <LoginFormContainer>
      <form autoComplete='off'>
        <TextInput
          className='username-input input'
          name='username'
          error={loginFormContent.errors.username}
          placeholder='Username'
          onInputChange={handleInputChange('username')}
          type='text'
          value={loginFormContent.username.value}
        />
        <TextInput
          className='password-input input'
          name='password'
          error={loginFormContent.errors.password}
          placeholder='Password'
          onInputChange={handleInputChange('password')}
          type='password'
          value={loginFormContent.password.value}
        />
        <Button text='Log in' onButtonClick={handleSubmitForm} />
      </form>
    </LoginFormContainer>
  );
};

const mapStateToProps = (state) => ({
  isAuthenticated: state.auth.isAuthenticated,
});

const mapDispatchToProps = {
  login,
};

export default connect(mapStateToProps, mapDispatchToProps)(LoginForm);
