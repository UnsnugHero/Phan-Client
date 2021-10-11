import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import { useParams } from 'react-router';

import { getRequest } from '../../redux/actions/request.action';
import { GeneralXLHeader } from '../styles/App.style';
import { RequestDetailsContainer } from '../styles/Request.style';
import RequestDetailsBody from './RequestDetailsBody';
import RequestDetailsCommentList from './RequestDetailsCommentList';
import Loader from '../general/Loader';

const RequestDetails = ({ request, getRequest, loading, error }) => {
  const { requestId } = useParams();

  useEffect(() => {
    getRequest(requestId);
  }, [getRequest, requestId]);

  return (
    <RequestDetailsContainer>
      <GeneralXLHeader>Request Details</GeneralXLHeader>
      {loading || !request ? (
        error && !loading ? (
          <></>
        ) : (
          <Loader />
        )
      ) : (
        <>
          <RequestDetailsBody request={request} />
          <RequestDetailsCommentList comments={request.comments} />
        </>
      )}
    </RequestDetailsContainer>
  );
};

const mapStateToProps = (state) => ({
  isAuthenticated: state.auth.isAuthenticated,

  loading: state.request.loading,
  request: state.request.request,
  error: state.request.error,
});

const mapDispatchToProps = {
  getRequest,
};

export default connect(mapStateToProps, mapDispatchToProps)(RequestDetails);
