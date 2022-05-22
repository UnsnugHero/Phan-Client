import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import { votePoll } from '../../services/poll.service';

import { PollFormContainer, PollVoteButton, PollVoteButtonsContainer } from '../styles/Poll.style';

const PollForm = ({ isAuthenticated, pollId }) => {
  useEffect(() => {
    // load what the user has voted for, if any, here
    return () => {
      // cleanup
    };
  }, []);

  const onVoteButtonClick = (isYesVote) => async () => {
    const vote = isYesVote ? 'yes' : 'no';

    const result = await votePoll();
  };

  return (
    <PollFormContainer>
      {isAuthenticated && (
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
