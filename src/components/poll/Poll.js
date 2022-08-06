import React, { useEffect } from 'react';
import { connect } from 'react-redux';

import { getPoll } from '../../redux/actions/poll.action';
import { GeneralXLHeader } from '../styles/App.style';
import { PollContainer } from '../styles/Poll.style';
import { LoadingGif } from '../styles/Request.style';
import PollPercent from './PollPercent';
import PollForm from './PollForm';

import loader from '../../assets/take_your_time.gif';

const Poll = ({ loading, poll, error, getPoll }) => {
  useEffect(() => {
    getPoll();
  }, [getPoll]);

  if (error) {
    return (
      <PollContainer style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
        <GeneralXLHeader className='poll-header'>Poll</GeneralXLHeader>
        <>Error Loading Poll</>
      </PollContainer>
    );
  }

  return (
    <PollContainer>
      <GeneralXLHeader className='poll-header'>Poll</GeneralXLHeader>
      {loading ? (
        <div style={{ width: '100%', display: 'flex', justifyContent: 'center' }}>
          <LoadingGif src={loader} />
        </div>
      ) : (
        <>
          <PollPercent poll={poll}></PollPercent>
          <PollForm pollId={poll._id} />
        </>
      )}
    </PollContainer>
  );
};

const mapStateToProps = (state) => ({
  loading: state.poll.loading,
  poll: state.poll.poll,
  error: state.poll.error,
});

const mapDispatchToProps = {
  getPoll,
};

export default connect(mapStateToProps, mapDispatchToProps)(Poll);
