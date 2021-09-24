import React from 'react';
import PollPercentageBar from './PollPercentageBar';

const Poll = () => {
  return (
    <>
      <PollPercentageBar totalVotes={100} yesVotes={75} />
    </>
  );
};

export default Poll;
