import styled from 'styled-components';

export const ChatContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
`;

export const ChatListContainer = styled.div`
  border: 3px solid #db1b0d;
  box-sizing: border-box;
  min-height: 500px;
  max-height: 500px;
  margin-bottom: 15px;
  padding: 24px;
  width: 100%;
  overflow: auto;

  ::-webkit-scrollbar-thumb {
    background-color: #312f2f;
    border: 4px solid transparent;
    background-clip: padding-box;
  }

  ::-webkit-scrollbar-track {
    background-color: #000000;
  }

  ::-webkit-scrollbar {
    width: 16px;
  }
`;

export const ChatList = styled.ul`
  display: flex;
  flex-direction: column;
  list-style: none;
  margin: 0;
  padding: 0;
`;

export const StyledChatForm = styled.form`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  width: 100%;

  .text-input-container {
    flex: 1;
  }

  .button {
    margin-left: 15px;
  }
`;

export const CommentContainer = styled.li`
  margin-bottom: 5px;
`;
