import styled, { css } from 'styled-components';

import Button from '../general/Button';
import TextArea from '../general/TextArea';
import TextInput from '../general/TextInput';

export const RequestSearchContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  height: 100%;
`;

export const MakeRequestButton = styled(Button)`
  margin-bottom: 44.22px;
`;

export const RequestSearchBar = styled(TextInput)`
  width: 750px;
  margin-bottom: 24px;
`;

// Filter Menu

export const RequestFilterMenuContainer = styled.div`
  width: 750px;
  margin-bottom: 48px;
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
    background-color: #202020;
  }

  ${(props) =>
    props.isExpanded &&
    css`
      background-color: #202020;
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

// Request List

export const RequestListContainer = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

export const LoadingGif = styled.img`
  width: 250px;
  object-fit: cover;
`;

// Request List Entry

export const RequestListEntryContainer = styled.div`
  width: 100%;
  background-color: #333;

  :not(:last-child) {
    margin-bottom: 24px;
  }

  :hover {
    cursor: pointer;
  }
`;

export const RequestListEntryHeader = styled.h2`
  color: white;
  background-color: #202020;
  margin: 0;
  padding: 18px;
`;

export const RequestListEntryBody = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  padding: 18px;
`;

export const RequestListEntryText = styled.span``;

export const RequestListEntryLeftInfo = styled.div`
  display: flex;
  flex-direction: column;
`;

export const RequestListEntryLeftBottomRow = styled.div`
  display: flex;
  flex-directin: row;
`;

export const RequestListEntryCountsContainer = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
`;

export const RequestListEntryRightInfo = styled.div`
  display: flex;
  flex-direction: column;
`;

export const Icon = styled.img`
  width: 25px;
  margin-right: 8px;
`;

// Make Request

export const MakeRequestContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
`;

export const MakeRequestForm = styled.form`
  display: flex;
  flex-direction: column;
  width: 500px;

  .text-area {
    margin-bottom: 24px;
  }
`;

export const MakeRequestInput = styled(TextInput)`
  margin-bottom: 24px;
`;

export const CancelButton = styled(Button)`
  background-color: #333;

  :hover {
    background-color: #202020;
  }
`;

export const MakeRequestButtons = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-evenly;
`;

export const MakeRequestTextArea = styled(TextArea)`
  margin-bottom: 24px;
`;

// Request Details

export const RequestDetailsContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

export const RequestDetailsBodyContainer = styled.div`
  background-color: #333;
  max-width: 750px;
`;

export const RequestDetailsBodyTopInfo = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
`;

export const RequestCompleteStatus = styled.div``;

export const RequestDetailsRow = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
`;

export const RequestDetailsRowHeader = styled.div`
  font-size: 1.5em;
  background-color: #202020;
  padding: 12px;
`;

export const RequestDetailsRowBody = styled.div`
  padding: 12px;
`;

export const RequestDetailsCommentListContainer = styled.div``;

export const RequestDetailsCommentContainer = styled.div``;
