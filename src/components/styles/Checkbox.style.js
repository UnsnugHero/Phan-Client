import styled from 'styled-components';

export const CheckboxContainer = styled.div`
  height: fit-content;
  width: fit-content;
  margin-bottom: 24px;
`;

export const CheckBoxLabel = styled.label`
  display: flex;
  align-items: center;
  position: relative;
  padding-left: 35px;
  cursor: pointer;
  font-size: 22px;
  -webkit-user-select: none;
  -moz-user-select: none;
  -ms-user-select: none;
  user-select: none;
  height: 32px;
  width: fit-content;
  text-align: center;

  input {
    position: absolute;
    opacity: 0;
    cursor: pointer;
    height: 0;
    width: 0;
  }

  .checkmark {
    position: absolute;
    top: 0;
    left: 0;
    height: 32px;
    width: 32px;
    background-color: transparent;
    border: 3px solid #db1b0d;
    box-sizing: border-box;
  }

  input:checked ~ .checkmark {
    background-color: #db1b0d;
  }

  .checkmark:after {
    content: '';
    position: absolute;
    display: none;
  }

  input:checked ~ .checkmark:after {
    display: block;
  }

  .checkmark:after {
    left: 9px;
    top: 5px;
    width: 5px;
    height: 10px;
    border: solid white;
    border-width: 0 3px 3px 0;
    -webkit-transform: rotate(45deg);
    -ms-transform: rotate(45deg);
    transform: rotate(45deg);
  }
`;

export const CheckboxInput = styled.input``;

export const CustomCheckboxInput = styled.span``;
