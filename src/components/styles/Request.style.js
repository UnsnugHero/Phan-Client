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

export const RequestSearchAndButtonContainer = styled.form`
  display: flex;
  flex-direction: row;
  max-width: 750px;
  width: 100%;
  margin-bottom: 24px;
`;

export const RequestSearchBar = styled(TextInput)`
  width: 100%;
  max-width: 750px;
`;

export const RequestSearchButton = styled(Button)`
  margin-left: 12px;
`;

// Filter Menu

export const RequestFilterMenuContainer = styled.div`
  max-width: 750px;
  width: 100%;
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

export const MarkCompletedButton = styled(Button)`
  background-color: #0cab12;

  :hover {
    background-color: #0a780e;
  }
`;

export const EditRequestButton = styled(Button)`
  margin-left: 24px;
`;

export const DeleteRequestButton = styled(Button)`
  margin-left: 24px;
`;

export const RequestDetailsTopButtonsContainer = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-evenly;
  margin-bottom: 24px;
`;

export const RequestDetailsBodyContainer = styled.div`
  max-width: 750px;
  margin-bottom: 24px;
  width: 100%;
`;

export const RequestDetailsBodyTopInfo = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
`;

export const RequestDetailsRowsContainer = styled.div`
  background-color: #333;
`;

export const RequestCompletionStatus = styled.div`
  display: flex;
  flex-direction: row;
  padding: 12px;
`;

export const CompletionStatusLabel = styled.span``;

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

export const RequestDetailsCommentListContainer = styled.div`
  display: flex;
  flex-direction: column;
  max-width: 750px;
  width: 100%;
`;

export const CommentListHeader = styled.span`
  font-size: 1.5em;
  padding: 12px;
`;

export const RequestDetailsCommentContainer = styled.div`
  display: flex;
  flex-direction: column;
  background-color: #333;
  max-width: 750px;
  width: 100%;
`;

export const CommentHeaderContainer = styled.div`
  background-color: #202020;
  padding: 12px;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  max-width: 750px;
`;

export const CommentHeaderText = styled.span``;

export const CommentEditContainer = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
`;

export const CommentHeaderEditedText = styled.span``;

export const CommentTextContainer = styled.div`
  padding: 12px;
`;

export const CommentText = styled.div``;

export const EditIcon = styled.img`
  width: 25px;
  cursor: pointer;
  margin-left: 10px;
`;

export const DeleteIcon = styled(EditIcon)`
  width: 25px;
`;

export const CommentsContainer = styled.div`
  display: flex;
  flex-direction: column;
  padding-top: 24px;

  .request-details-comment-container:not(:last-child) {
    margin-bottom: 24px;
  }
`;

// Comment Text Editor

export const CommentTextEditorContainer = styled.div``;

export const CommentTextEditor = styled(TextArea)`
  background-color: #050505;
`;

export const TextEditorButtons = styled.div`
  display: flex;
  flex-direction: row;
  margin-top: 8px;
  width: 100%;
  justify-content: flex-end;
`;

export const CancelEditIcon = styled(EditIcon)``;

export const ConfirmEditIcon = styled(EditIcon)`
  magin-left: 10px;
`;

// Post Comment

export const PostCommentContainer = styled.div`
  display: flex;
  flex-direction: column;
`;

export const PostCommentEditor = styled(TextArea)``;

export const PostCommentButtonsContainer = styled.div`
  display: flex;
  flex-direction: row;
  width: 100%;
  justify-content: flex-end;
  margin-top: 12px;
`;

export const PostCommentCancelButton = styled(Button)`
  background-color: #333;

  :hover {
    background-color: #202020;
  }
`;

export const PostCommentPostButton = styled(Button)`
  margin-left: 10px;

  :hover {
    background-color: #db1b0d !important;
  }
`;
