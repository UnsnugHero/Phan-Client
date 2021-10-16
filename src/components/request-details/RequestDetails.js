import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import { useHistory, useParams } from 'react-router';

import { getRequest, markRequestComplete } from '../../redux/actions/request.action';
import { deleteRequest } from '../../services/request.service';
import { GeneralXLHeader } from '../styles/App.style';
import {
  DeleteRequestButton,
  EditRequestButton,
  MarkCompletedButton,
  RequestDetailsContainer,
  RequestDetailsTopButtonsContainer,
} from '../styles/Request.style';
import RequestDetailsBody from './RequestDetailsBody';
import RequestDetailsCommentList from './RequestDetailsCommentList';
import Loader from '../general/Loader';

const RequestDetails = ({ request, getRequest, loading, error, isAuthenticated, user, markRequestComplete }) => {
  const { requestId } = useParams();

  const history = useHistory();

  useEffect(() => {
    getRequest(requestId);
  }, [getRequest, requestId]);

  const handleMarkCompletedClick = () => {
    const shouldMarkComplete = window.confirm('Mark this request as complete?');

    if (shouldMarkComplete) {
      const { subject, description, location } = request;
      const editRequestPayload = { subject, description, location };
      markRequestComplete(editRequestPayload, requestId);
    }
  };

  const handleEditRequestClick = () => {
    history.push(`/edit-request/${requestId}`);
  };

  const handleDeleteRequestClick = async () => {
    const shouldDelete = window.confirm('Delete this request?');

    if (shouldDelete) {
      const deleteSuccess = await deleteRequest(requestId);

      if (deleteSuccess) {
        history.push('/requests');
      }
    }
  };

  if (error) {
    <RequestDetailsContainer>
      <GeneralXLHeader>Request Details</GeneralXLHeader>
      <>Oops!</>
    </RequestDetailsContainer>;
  }

  return (
    <RequestDetailsContainer>
      <GeneralXLHeader>Request Details</GeneralXLHeader>
      {loading ? (
        <Loader />
      ) : (
        <>
          {isAuthenticated && (
            <RequestDetailsTopButtonsContainer>
              {(user._id === request.user || user.role === 'admin') && (
                <MarkCompletedButton text='Mark Completed' onButtonClick={handleMarkCompletedClick} />
              )}
              {user._id === request.user && <EditRequestButton text='Edit' onButtonClick={handleEditRequestClick} />}
              {(user._id === request.user || user.role === 'admin') && (
                <DeleteRequestButton text='Delete' onButtonClick={handleDeleteRequestClick} />
              )}
            </RequestDetailsTopButtonsContainer>
          )}
          <RequestDetailsBody request={request} />
          <RequestDetailsCommentList comments={request.comments} />
        </>
      )}
    </RequestDetailsContainer>
  );
};

const mapStateToProps = (state) => ({
  isAuthenticated: state.auth.isAuthenticated,
  user: state.auth.user,

  loading: state.request.loading,
  request: state.request.request,
  error: state.request.error,
});

const mapDispatchToProps = {
  getRequest,
  markRequestComplete,
};

export default connect(mapStateToProps, mapDispatchToProps)(RequestDetails);
