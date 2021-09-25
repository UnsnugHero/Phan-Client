import React from 'react';
import { PollHeader } from '../styles/Poll.style';
import PollForm from './PollForm';
import PollPercentageBar from './PollPercentageBar';
import PollQuestion from './PollQuestion';

const Poll = () => {
  return (
    <>
      <PollHeader>Poll</PollHeader>
      <PollQuestion />
      <PollPercentageBar totalVotes={100} yesVotes={75} />
      <PollForm />
    </>
  );
};

export default Poll;
