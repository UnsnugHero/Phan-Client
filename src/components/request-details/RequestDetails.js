import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import { useHistory, useParams } from 'react-router';

import { getRequest } from '../../redux/actions/request.action';
import { GeneralXLHeader } from '../styles/App.style';
import {
  DeleteRequestButton,
  EditRequestButton,
  RequestDetailsContainer,
  RequestDetailsTopButtonsContainer,
} from '../styles/Request.style';
import RequestDetailsBody from './RequestDetailsBody';
import RequestDetailsCommentList from './RequestDetailsCommentList';
import Loader from '../general/Loader';
import { deleteRequest } from '../../services/request.service';

const RequestDetails = ({ request, getRequest, loading, error }) => {
  const { requestId } = useParams();

  const history = useHistory();

  useEffect(() => {
    getRequest(requestId);
  }, [getRequest, requestId]);

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
          <RequestDetailsTopButtonsContainer>
            {/* Button here to mark complete, only owning user or admin can do this */}
            <EditRequestButton text='Edit' onButtonClick={handleEditRequestClick} />
            <DeleteRequestButton text='Delete' onButtonClick={handleDeleteRequestClick} />
          </RequestDetailsTopButtonsContainer>
          <RequestDetailsBody request={request} />
          <RequestDetailsCommentList comments={request.comments} />
        </>
      )}
    </RequestDetailsContainer>
  );
};

const mapStateToProps = (state) => ({
  user: state.auth.user,

  loading: state.request.loading,
  request: state.request.request,
  error: state.request.error,
});

const mapDispatchToProps = {
  getRequest,
};

export default connect(mapStateToProps, mapDispatchToProps)(RequestDetails);
