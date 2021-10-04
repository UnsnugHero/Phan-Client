import React from 'react';
import PropTypes from 'prop-types';

import { RequestListContainer } from '../styles/Request.style';
import RequestListEntry from './RequestListEntry';

const RequestList = ({ requests }) => {
  return (
    <RequestListContainer>
      {requests.map((request, idx) => (
        <RequestListEntry key={idx} {...request} />
      ))}
    </RequestListContainer>
  );
};

RequestList.propTypes = {
  requests: PropTypes.array.isRequired,
};

export default RequestList;
