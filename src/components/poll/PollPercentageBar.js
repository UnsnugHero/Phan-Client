import React from 'react';
import PropTypes from 'prop-types';

import {
  PollPercentageBarBorder,
  PercentageBar,
  PercentageNumber,
  PollPercentageBarContainer,
} from '../styles/Poll.style';

const PollPercentageBar = ({ yesVotes, totalVotes }) => {
  const yesVotePercentage = totalVotes ? ((yesVotes / totalVotes) * 100).toFixed(1) : 0;

  return (
    <PollPercentageBarContainer>
      <PollPercentageBarBorder>
        <PercentageBar style={{ width: `${yesVotePercentage}%` }} />
      </PollPercentageBarBorder>
      <PercentageNumber>{yesVotePercentage}%</PercentageNumber>
    </PollPercentageBarContainer>
  );
};

PollPercentageBar.propTypes = {
  yesVotes: PropTypes.number.isRequired,
  totalVotes: PropTypes.number.isRequired,
};

export default PollPercentageBar;
