import React from 'react';
import {
  PollQuestionContainer,
  PollQuestionLabel,
  PollQuestionRedText,
  PollQuestionText,
  PollQuestionTextContainer,
} from '../styles/Poll.style';

const PollQuestion = () => {
  return (
    <PollQuestionContainer>
      <PollQuestionLabel>Q</PollQuestionLabel>
      <PollQuestionTextContainer>
        <PollQuestionText>
          Do you believe in the <PollQuestionRedText>Phantom Thieves</PollQuestionRedText>?
        </PollQuestionText>
      </PollQuestionTextContainer>
    </PollQuestionContainer>
  );
};

export default PollQuestion;
