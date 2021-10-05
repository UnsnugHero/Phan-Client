import styled from 'styled-components';

export const TextAreaContainer = styled.div`
  display: flex;
  flex-direction: column;
`;

export const StyledTextArea = styled.textarea`
  background-color: transparent;
  border: 3px solid #db1b0d;
  color: white;
  font-family: 'PhanNormal';
  font-size: 1em;
  padding: 8px;
  cursor: text;
  height: 100%;
  width: 100%;
  resize: none;
  box-sizing: border-box;

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
