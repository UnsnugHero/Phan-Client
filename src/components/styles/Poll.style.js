import styled from 'styled-components';

export const PollPercentageBarContainer = styled.div`
  border: 8px solid white;
  box-sizing: border-box;
  height: 50px;

  transform: skew(-10deg) rotate(0deg);
  -webkit-transform: skew(-10deg) rotate(0deg);
  -moz-transform: skew(-10deg) rotate(0deg);
`;

export const PercentageBar = styled.div`
  background-color: #db1b0d;
  height: 32px;
`;

export const PollFormContainer = styled.div``;

export const PollVoteButtonsContainer = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-around;
`;

export const PollVoteButton = styled.span`
  cursor: pointer;
  font-family: 'PhanHeader';
  font-size: 3.5em;
`;
