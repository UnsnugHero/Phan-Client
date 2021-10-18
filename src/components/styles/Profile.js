import styled from 'styled-components';
import Button from '../general/Button';

export const ProfileContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;

export const ProfileRowsContainer = styled.div`
  background-color: #333;
  max-width: 750px;
  width: 100%;
  margin-bottom: 24px;
`;

export const ProfileRow = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
`;

export const ProfileRowHeader = styled.div`
  font-size: 1.5em;
  background-color: #202020;
  padding: 12px;
`;

export const ProfileRowBody = styled.div`
  padding: 12px;
`;

export const ProfileButtonsContainer = styled.div`
  max-width: 750px;
  display: flex;
  justify-content: flex-end;
`;

export const EditProfileButton = styled(Button)``;
