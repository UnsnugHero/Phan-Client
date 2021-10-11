import React, { Fragment, useEffect, useState } from 'react';
import { connect } from 'react-redux';
import { useParams } from 'react-router';

import { GeneralXLHeader } from '../styles/App.style';
import { RequestDetailsContainer } from '../styles/Request.style';
import RequestDetailsBody from './RequestDetailsBody';
import RequestDetailsCommentList from './RequestDetailsCommentList';
import Loader from '../general/Loader';
import { getRequest } from '../../services/request.service';

const RequestDetails = () => {
  const { requestId } = useParams();
  const [postState, setPost] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      const request = await getRequest(requestId);
      if (request) {
        setPost(request);
      }
    };

    fetchData();
  }, [requestId]);

  return (
    <RequestDetailsContainer>
      <GeneralXLHeader>Request Details</GeneralXLHeader>
      {postState ? (
        <>
          <RequestDetailsBody request={postState} />
          <RequestDetailsCommentList comments={postState.comments} />
        </>
      ) : (
        <Loader />
      )}
    </RequestDetailsContainer>
  );
};

const mapStateToProps = (state) => ({
  isAuthenticated: state.auth.isAuthenticated,
});

export default connect(mapStateToProps)(RequestDetails);
