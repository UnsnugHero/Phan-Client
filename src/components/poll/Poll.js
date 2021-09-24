import React from 'react';
import PollForm from './PollForm';
import PollPercentageBar from './PollPercentageBar';

const Poll = () => {
  return (
    <>
      <PollPercentageBar totalVotes={100} yesVotes={75} />
      <PollForm />
    </>
  );
};

export default Poll;
