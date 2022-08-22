import React from 'react';
import { connect } from 'react-redux';
import { GeneralXLHeader } from '../styles/App.style';

import {
  ProfileContainer,
  ProfileRow,
  ProfileRowBody,
  ProfileRowHeader,
  ProfileRowsContainer,
} from '../styles/Profile';
import { PROFILE_ROWS } from './Profile.constants';

const Profile = ({ user }) => {
  const formattedUser = { ...user, createdAt: new Date(user.createdAt).toLocaleDateString('en-US') };
  return (
    <ProfileContainer>
      <GeneralXLHeader>Profile</GeneralXLHeader>
      <ProfileRowsContainer>
        {PROFILE_ROWS.map((row, idx) => (
          <ProfileRow key={idx}>
            <ProfileRowHeader>{row.header}</ProfileRowHeader>
            <ProfileRowBody>{formattedUser[row.key]}</ProfileRowBody>
          </ProfileRow>
        ))}
      </ProfileRowsContainer>
    </ProfileContainer>
  );
};

const mapStateToProps = (state) => ({
  user: state.auth.user,
});

export default connect(mapStateToProps)(Profile);
