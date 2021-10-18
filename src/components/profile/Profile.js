import React from 'react';
import { connect } from 'react-redux';
import { useHistory } from 'react-router';
import { GeneralXLHeader } from '../styles/App.style';

import {
  ProfileContainer,
  ProfileRow,
  ProfileRowBody,
  ProfileRowHeader,
  ProfileRowsContainer,
  ProfileButtonsContainer,
  EditProfileButton,
} from '../styles/Profile';
import { PROFILE_ROWS } from './Profile.constants';

const Profile = ({ user }) => {
  const history = useHistory();

  const handleEditProfileClick = () => {
    history.push('/edit-request');
  };

  return (
    <ProfileContainer>
      <GeneralXLHeader>Profile</GeneralXLHeader>
      <ProfileRowsContainer>
        {PROFILE_ROWS.map((row, idx) => (
          <ProfileRow key={idx}>
            <ProfileRowHeader>{row.header}</ProfileRowHeader>
            <ProfileRowBody>{user[row.key]}</ProfileRowBody>
          </ProfileRow>
        ))}
      </ProfileRowsContainer>
      <ProfileButtonsContainer>
        <EditProfileButton text='Edit' onButtonClick={handleEditProfileClick} />
      </ProfileButtonsContainer>
    </ProfileContainer>
  );
};

const mapStateToProps = (state) => ({
  user: state.auth.user,
});

export default connect(mapStateToProps)(Profile);
