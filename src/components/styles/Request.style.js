import styled from 'styled-components';

import TextInput from '../general/TextInput';

export const RequestSearchFormContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
`;

export const RequestSearchBar = styled(TextInput)`
  width: 750px;
  margin-bottom: 24px;
`;

// Filter Menu

export const RequestFilterMenuContainer = styled.div`
  width: 750px;

  .active {
    background-color: #2a2a2a;
  }

  .expanded {
    height: fit-content;
  }
`;

export const RequestFilterMenuButton = styled.button`
  background-color: #333;
  color: #fff;
  cursor: pointer;
  padding: 12px;
  width: 100%;
  border: none;
  text-align: left;
  outline: none;
  font-size: 24px;
  font-family: 'PhanNormal';

  :hover {
    background-color: #2a2a2a;
  }
`;

export const FilterMenu = styled.div`
  padding: 0 12px;
  overflow: hidden;
  background-color: #333;
  height: 0;
`;
