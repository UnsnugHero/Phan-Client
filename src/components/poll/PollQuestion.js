import React from 'react';
import {
  PollQuestionContainer,
  PollQuestionLabel,
  PollQuestionRedText,
  PollQuestionText,
  PollQuestionTextContainer,
} from '../styles/Poll.style';

const PollQuestion = ({ pollTitle }) => {
  const splitTitle = pollTitle.split(' ');
  const lastTwo = splitTitle.splice(splitTitle.length - 2, 2);

  const newTitle = splitTitle.join(' ');
  const redTitle = lastTwo.join(' ');

  return (
    <PollQuestionContainer>
      <PollQuestionLabel>Q</PollQuestionLabel>
      <PollQuestionTextContainer>
        <PollQuestionText>
          {newTitle} <PollQuestionRedText>{redTitle}</PollQuestionRedText>?
        </PollQuestionText>
      </PollQuestionTextContainer>
    </PollQuestionContainer>
  );
};

PollQuestion.defaultProps = {
  pollTitle: '',
};

export default PollQuestion;
