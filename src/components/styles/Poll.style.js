import styled from 'styled-components';

export const PollPercentageBarContainer = styled.div`
  border: 8px solid white;
  box-sizing: border-box;
  height: 50px;
  display: flex;
  flex-direction: row;

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
  font-size: 3.5em;
`;

export const PollYesLabel = styled.span`
  background-color: black;
  display: inline-block;
  font-family: 'PhanHeader';
  font-size: 2em;
  position: relative;
  bottom: 30px;
  left: 450px;
  z-index: 1;

  transform: rotate(1deg);
  -webkit-transform: rotate(1deg);
  -moz-transform: rotate(1deg);
`;

export const PollQuestionText = styled.span`
  font-size: 1.3em;
  position: absolute;
  bottom: 0;
`;

export const PollQuestionRedText = styled.span`
  font-size: 1.2em;
  color: #db1b0d;
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

export const PollQuestionContainer = styled.div`
  position: relative;

  transform: rotate(-2deg);
  -webkit-transform: rotate(-2deg);
  -moz-transform: rotate(-2deg);
`;

export const PollHeader = styled.h1`
  font-family: 'PhanHeader';
  font-size: 3em;
  margin-bottom: 0;
  text-align: center;
`;
