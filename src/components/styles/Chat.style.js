import styled from 'styled-components';

export const ChatContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
`;

export const ChatListContainer = styled.div`
  border: 2px solid #db1b0d;
  box-sizing: border-box;
  display: flex;
  flex-direction: column;
  min-height: 500px;
  max-height: 500px;
  margin-bottom: 15px;
  padding: 18px;
  width: 100%;

  // make responsive width
`;

export const StyledChatForm = styled.form`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  width: 100%;

  .text-input-container {
    flex: 1;
  }
`;

export const CommentContainer = styled.div`
  margin-bottom: 5px;
`;

export const ChatHeader = styled.h1`
  font-family: 'PhanHeader';
  font-size: 3em;
`;
