import styled from 'styled-components';

import Checkbox from '../general/Checkbox';
import { GeneralXLHeader } from './App.style';
import { LoginButton, LoginContainer, LoginForm, LoginFormInput, SignUpLink, SignUpText } from './Login.style';

export const SignupHeader = styled(GeneralXLHeader)`
  margin-bottom: 22px;
`;

export const SignupContainer = styled(LoginContainer)``;

export const SignupForm = styled(LoginForm)``;

export const SignupFormInput = styled(LoginFormInput)``;

export const SignupCheckbox = styled(Checkbox)`
  .checkbox-container {
    margin-bottom: 24px;
  }
`;

export const SignupButton = styled(LoginButton)``;

export const LogoImage = styled.img`
  width: 200px;
`;

export const LoginText = styled(SignUpText)`
  margin-bottom: 24px;
`;

export const LoginLink = styled(SignUpLink)``;
