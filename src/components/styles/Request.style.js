import styled, { css } from 'styled-components';

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

  ${(props) =>
    props.isExpanded &&
    css`
      background-color: #2a2a2a;
    `}
`;

export const FilterMenu = styled.div`
  padding: 12px;
  overflow: hidden;
  background-color: #333;
  height: fit-content;
  display: none;

  ${(props) =>
    props.isExpanded &&
    css`
      display: block;
    `}

  .radio-container {
    padding: 8px;
    margin-bottom: 0px;
  }
`;

export const RequestFilterTitle = styled.span`
  padding-left: 8px;
  margin-bottom: 16px;
  display: block;
`;

export const FiltersSection = styled.div`
  // grid if needed later
  display: flex;
  width: 100%;

  .checkbox-container {
    padding-left: 8px;
  }
`;

export const SortFiltersSection = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 10px;
  width: 100%;
`;

// Request List Entry

export const RequestListEntryContainer = styled.div`
  width: 100%;
  border: 1px solid #db1b0d;
`;

export const RequestListEntryHeader = styled.h2`
  color: white;
`;

export const RequestListEntryBody = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-apart;
`;

export const RequestListEntryText = styled.span``;

export const RequestListEntryLeftInfo = styled.div`
  display: flex;
  flex-direction: column;
`;

export const RequestListEntryLikesContainer = styled.div`
  display: flex;
  flex-direction: row;
`;

export const RequestListEntryRightInfo = styled.div``;

export const ThumbsUpImg = styled.img``;
