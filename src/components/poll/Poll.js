import React from 'react';
import { GeneralXLHeader } from '../styles/App.style';

import {
  PollContainer,
  PollPercentageDecimalAndPercent,
  PollPercentageWholeNumber,
  PollQuestionAndPercentContainer,
} from '../styles/Poll.style';
import PollForm from './PollForm';
import PollPercentageBar from './PollPercentageBar';
import PollQuestion from './PollQuestion';

const Poll = () => {
  //get the poll numbers here

  const yesVotes = 77;
  const totalVotes = 200;

  const yesVotePercentage = totalVotes ? ((yesVotes / totalVotes) * 100).toFixed(1) : 0;
  const wholeNumber = Math.floor(yesVotePercentage);
  const decimalNumber = (yesVotePercentage % 1) * 10;

  return (
    <PollContainer>
      <GeneralXLHeader className='poll-header'>Poll</GeneralXLHeader>
      <PollQuestionAndPercentContainer className='poll-question-and-percent-container'>
        <PollQuestion />
        <div>
          <PollPercentageWholeNumber className='percentage-number-whole'>{wholeNumber}.</PollPercentageWholeNumber>
          <PollPercentageDecimalAndPercent className='percentage-number-decimal'>
            {decimalNumber}%
          </PollPercentageDecimalAndPercent>
        </div>
      </PollQuestionAndPercentContainer>
      <PollPercentageBar yesVotePercentage={yesVotePercentage} />
      <PollForm />
    </PollContainer>
  );
};

export default Poll;
