import React, { useEffect, useState } from 'react';
import { getPoll } from '../../services/poll.service';
import { GeneralXLHeader } from '../styles/App.style';

import {
  PollContainer,
  PollPercentageDecimalAndPercent,
  PollPercentageWholeNumber,
  PollQuestionAndPercentContainer,
} from '../styles/Poll.style';
import { LoadingGif } from '../styles/Request.style';
import PollForm from './PollForm';
import PollPercentageBar from './PollPercentageBar';
import PollQuestion from './PollQuestion';

import loader from '../../assets/take_your_time.gif';

const Poll = () => {
  const [isLoading, setLoading] = useState(true);
  const [pollState, setPoll] = useState({});

  useEffect(() => {
    const loadPoll = async () => {
      const poll = await getPoll();
      setPoll(poll);
      setLoading(false);
    };

    loadPoll();
  }, []);

  const yesVotes = pollState?.poll?.yesVotes;
  const totalVotes = pollState?.poll?.noVotes + yesVotes;

  const yesVotePercentage = totalVotes ? ((yesVotes / totalVotes) * 100).toFixed(1) : 0;
  const wholeNumber = Math.floor(yesVotePercentage);
  const decimalNumber = Math.floor((yesVotePercentage % 1) * 10);

  return (
    <PollContainer>
      <GeneralXLHeader className='poll-header'>Poll</GeneralXLHeader>
      {isLoading ? (
        <div style={{ width: '100%', display: 'flex', justifyContent: 'center' }}>
          <LoadingGif src={loader} />
        </div>
      ) : (
        <>
          <PollQuestionAndPercentContainer className='poll-question-and-percent-container'>
            <PollQuestion pollTitle={pollState?.poll?.title} />
            <div>
              <PollPercentageWholeNumber className='percentage-number-whole'>{wholeNumber}.</PollPercentageWholeNumber>
              <PollPercentageDecimalAndPercent className='percentage-number-decimal'>
                {decimalNumber}%
              </PollPercentageDecimalAndPercent>
            </div>
          </PollQuestionAndPercentContainer>
          <PollPercentageBar yesVotePercentage={yesVotePercentage} />
          <PollForm pollId={pollState?.poll?._id} />
        </>
      )}
    </PollContainer>
  );
};

export default Poll;
