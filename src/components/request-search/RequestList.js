import React from 'react';
import PropTypes from 'prop-types';

import { LoadingGif, RequestListContainer } from '../styles/Request.style';
import RequestListEntry from './RequestListEntry';

import loader from '../../assets/take_your_time.gif';

const RequestList = ({ loading, requests }) => {
  const mappedRequests = requests.map((request, idx) => <RequestListEntry key={idx} {...request} />);

  if (loading) {
    return (
      <RequestListContainer>
        <LoadingGif src={loader} />
      </RequestListContainer>
    );
  }

  return (
    <RequestListContainer>
      {mappedRequests && mappedRequests.length ? mappedRequests : <>No Matching Requests</>}
    </RequestListContainer>
  );
};

RequestList.propTypes = {
  loading: PropTypes.bool.isRequired,
  requests: PropTypes.array.isRequired,
};

export default RequestList;
