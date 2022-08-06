import React from 'react';
import PropTypes from 'prop-types';

import { PollPercentageBarBorder, PercentageBar, PollPercentageBarContainer } from '../styles/Poll.style';

const PollPercentageBar = ({ yesVotePercentage }) => {
  return (
    <PollPercentageBarContainer className='poll-percentage-bar-container'>
      <PollPercentageBarBorder className='poll-percentage-bar-border'>
        <PercentageBar className='percentage-bar' style={{ width: `${yesVotePercentage}%` }} />
      </PollPercentageBarBorder>
    </PollPercentageBarContainer>
  );
};

PollPercentageBar.propTypes = {
  yesVotePercentage: PropTypes.any.isRequired,
};

export default PollPercentageBar;
