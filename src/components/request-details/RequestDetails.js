import React from 'react';
import { connect } from 'react-redux';
import { useParams } from 'react-router';

import { GeneralXLHeader } from '../styles/App.style';
import { RequestDetailsContainer } from '../styles/Request.style';
import RequestDetailsBody from './RequestDetailsBody';
import RequestDetailsCommentList from './RequestDetailsCommentList';

const RequestDetails = () => {
  const { requestId } = useParams();

  const mockRequest = {
    likes: [],
    likesCount: 0,
    edited: false,
    completed: false,
    _id: '6102195d064b4224e84e0183',
    subject: 'Help me please!',
    description: 'There is someone harassing commuters everyday in the station, someone please stop them!',
    location: 'Shibuya Station',
    postedBy: 'username',
    user: '610214eaf9da275564227959',
    postedDate: '2021-07-29T02:58:38.001Z',
    updatedDate: '2021-07-29T02:58:38.001Z',
    __v: 0,
    comments: [
      {
        edited: true,
        _id: '6105da5f451a0f623cc2e42a',
        userId: '610214eaf9da275564227959',
        text: 'Is this a truly real?',
        postedDate: '2021-07-31T23:18:55.160Z',
      },
    ],
  };

  return (
    <RequestDetailsContainer>
      <GeneralXLHeader>Request Details</GeneralXLHeader>
      <RequestDetailsBody request={mockRequest} />
      <RequestDetailsCommentList />
    </RequestDetailsContainer>
  );
};

const mapStateToProps = (state) => ({
  isAuthenticated: state.auth.isAuthenticated,
});

export default connect(mapStateToProps)(RequestDetails);
