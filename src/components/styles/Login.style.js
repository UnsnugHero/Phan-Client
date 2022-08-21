import { Link } from 'react-router-dom';
import styled from 'styled-components';
import Button from '../general/Button';
import TextInput from '../general/TextInput';

export const LoginContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
`;

export const LoginForm = styled.form`
  display: flex;
  flex-direction: column;
  width: 100%;
  max-width: 500px;
  margin-bottom: 48px;
`;

export const LoginFormInput = styled(TextInput)`
  margin-bottom: 24px;
`;

export const LoginFormFooter = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

export const LoginButton = styled(Button)`
  margin-bottom: 24px;
  width: 100%;
`;

export const SignUpText = styled.span``;

export const SignUpLink = styled(Link)`
  color: #db1b0d;
  text-decoration: none;

  :hover {
    text-decoration: underline;
  }
`;

export const LogoImage = styled.img`
  width: 200px;
`;
