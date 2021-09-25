import React, { useEffect } from 'react';
import { connect } from 'react-redux';

import { PollFormContainer, PollVoteButton, PollVoteButtonsContainer } from '../styles/Poll.style';

const PollForm = ({ isAuthenticated }) => {
  useEffect(() => {
    // load what the user has voted for, if any, here
    return () => {
      // cleanup
    };
  }, []);

  const onVoteButtonClick = (isYesVote) => () => {
    // make a backend call here, no need for redux since not important to store the state,
    // the vote count will only go up on page loads
  };

  return (
    <PollFormContainer>
      {true && (
        <PollVoteButtonsContainer>
          <PollVoteButton onClick={onVoteButtonClick(true)}>Yes</PollVoteButton>
          <PollVoteButton onClick={onVoteButtonClick(false)}>No</PollVoteButton>
        </PollVoteButtonsContainer>
      )}
    </PollFormContainer>
  );
};

const mapStateToProps = (state) => ({
  isAuthenticated: state.auth.isAuthenticated,
});

export default connect(mapStateToProps)(PollForm);
