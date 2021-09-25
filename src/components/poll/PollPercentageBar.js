import React from 'react';
import PropTypes from 'prop-types';

import { PollPercentageBarContainer, PercentageBar, PollYesLabel } from '../styles/Poll.style';

const PollPercentageBar = ({ yesVotes, totalVotes }) => {
  const yesVotePercentage = totalVotes ? (yesVotes / totalVotes) * 100 : 0;

  return (
    <>
      <PollPercentageBarContainer>
        <PercentageBar style={{ width: `${yesVotePercentage}%` }} />
      </PollPercentageBarContainer>
      <PollYesLabel>Yes</PollYesLabel>
    </>
  );
};

PollPercentageBar.propTypes = {
  yesVotes: PropTypes.number.isRequired,
  totalVotes: PropTypes.number.isRequired,
};

export default PollPercentageBar;
