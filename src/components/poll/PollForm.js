import React from 'react';
import { connect } from 'react-redux';
import { votePoll } from '../../services/poll.service';

import { PollFormContainer, PollVoteButton, PollVoteButtonsContainer } from '../styles/Poll.style';

const PollForm = ({ isAuthenticated, pollId, user, updateUser }) => {
  const onVoteButtonClick = (isYesVote) => async () => {
    const vote = isYesVote ? 'yes' : 'no';

    await votePoll(pollId, vote);
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
  user: state.auth.user,
});

export default connect(mapStateToProps)(PollForm);
