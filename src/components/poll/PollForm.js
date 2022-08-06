import React from 'react';
import { connect } from 'react-redux';
import { votePoll } from '../../redux/actions/poll.action';

import { PollFormContainer, PollVoteButton, PollVoteButtonsContainer } from '../styles/Poll.style';

const PollForm = ({ isAuthenticated, pollId, votePoll }) => {
  const onVoteButtonClick = (isYesVote) => async () => {
    const vote = isYesVote ? 'yes' : 'no';

    votePoll(vote, pollId);
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

const mapDispatchToProps = {
  votePoll,
};

export default connect(mapStateToProps, mapDispatchToProps)(PollForm);
