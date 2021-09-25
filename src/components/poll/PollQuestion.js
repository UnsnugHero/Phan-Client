import React from 'react';
import { PollQuestionContainer, PollQuestionLabel, PollQuestionRedText, PollQuestionText } from '../styles/Poll.style';

const PollQuestion = () => {
  return (
    <PollQuestionContainer>
      <PollQuestionLabel>Q</PollQuestionLabel>
      <PollQuestionText>
        Do you believe in the <PollQuestionRedText>Phantom Thieves</PollQuestionRedText>?
      </PollQuestionText>
    </PollQuestionContainer>
  );
};

export default PollQuestion;
