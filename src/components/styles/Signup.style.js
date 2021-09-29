import styled from 'styled-components';
import Checkbox from '../general/Checkbox';

import { LoginButton, LoginContainer, LoginForm, LoginFormInput } from './Login.style';

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
