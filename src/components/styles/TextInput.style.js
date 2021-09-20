import styled from 'styled-components';

export const TextInputContainer = styled.div`
  display: flex;
  flex-direction: column;
`;

export const TextInputError = styled.span`
  padding: 8px 0 0 12px;
`;

export const StyledTextInput = styled.input`
  background-color: transparent;
  border: 3px solid #db1b0d;
  color: white;
  font-family: 'PhanNormal';
  font-size: 1em;
  padding: 8px;

  ::placeholder,
  ::-webkit-input-placeholder {
    color: white;
  }
  :-ms-input-placeholder {
    color: white;
  }
  :focus {
    border-color: white;
    outline: none;
  }
  :focus::placeholder {
    color: transparent;
  }
`;
