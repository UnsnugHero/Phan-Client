import styled from 'styled-components';

export const PollContainer = styled.div`
  margin-bottom: 50px;
`;

// Poll Percentage Bar

export const PollPercentageBarContainer = styled.div`
  display: flex;
  flex-direction: row;
  margin-bottom: 90px;
`;

export const PollPercentageBarBorder = styled.div`
  border: 8px solid white;
  box-sizing: border-box;
  height: 50px;
  display: flex;
  flex-direction: row;
  flex: 1;
  margin-right: 15px;

  transform: skew(-10deg) rotate(0deg);
  -webkit-transform: skew(-10deg) rotate(0deg);
  -moz-transform: skew(-10deg) rotate(0deg);
`;

export const PercentageBar = styled.div`
  background-color: #db1b0d;
  height: 32px;
`;

// Poll Form Styles

export const PollFormContainer = styled.div``;

export const PollVoteButtonsContainer = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-around;
`;

export const PollVoteButton = styled.span`
  cursor: pointer;
  font-size: 3em;

  .selected {
    color: #db1b0d;
  }

  :hover {
    color: #db1b0d;
  }
`;

// Poll Question Styles

export const PollQuestionAndPercentContainer = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: flex-end;
`;

export const PollQuestionContainer = styled.div`
  display: flex;
  flex-direction: row;
  align-items: flex-end;
  position: relative;

  transform: rotate(-2deg);
  -webkit-transform: rotate(-2deg);
  -moz-transform: rotate(-2deg);
`;

export const PollQuestionLabel = styled.span`
  color: white;
  font-family: sans-serif;
  font-size: 4em;
  font-weight: 900;
  margin-right: 5px;
  position: relative;
  bottom: -15px;
  z-index: 1;
`;

export const PollQuestionTextContainer = styled.div`
  bottom: 0;
  display: flex;
  flex-direction: row;
`;

export const PollQuestionText = styled.span`
  font-size: 1.6em;
`;

export const PollQuestionRedText = styled.span`
  font-size: 1.1em;
  color: #db1b0d;
`;

export const PollPercentageWholeNumber = styled.span`
  color: #db1b0d;
  font-family: 'Aha';
  font-weight: 900;
  font-size: 2em;
`;

export const PollPercentageDecimalAndPercent = styled.span`
  color: #db1b0d;
  font-family: 'Aha';
  fonnt-weight: 900;
  font-size: 1.2em;
`;

export const PollHeader = styled.h1`
  font-family: 'PhanHeader';
  font-size: 3em;
  text-align: center;
`;
