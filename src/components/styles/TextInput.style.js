import styled from "styled-components";

export const StyledTextInput = styled.input`
  background-color: transparent;
  border: 3px solid #db1b0d;
  color: white;
  ::placeholder,
  ::-webkit-input-placeholder {
    color: white;
  }
  :-ms-input-placeholder {
     color: white;
  }
  font-family: 'PhanNormal';
  font-size: 20px;
  padding: 8px;
`