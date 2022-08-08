import React from 'react';
import { MissionContainer, MissionText } from '../styles/Mission.style';
import { GeneralXLHeader } from '../styles/App.style';
import { LogoImage } from '../styles/Login.style';

import logo from '../../assets/logo-with-text.png';

const Mission = () => {
  return (
    <MissionContainer>
      <GeneralXLHeader>Our Mission</GeneralXLHeader>
      <LogoImage style={{ marginTop: '24px' }} src={logo} />
      <MissionText>
        Sick of the deception, hypocrisy and corruption around them, the Phantom Thieves are devoted to "stealing" the
        corrupt hearts of evil adults in order to change and reform society for the better. This app is meant to help
        the Phantom Thieves by letting anyone request that they change the heart of some wicked person harming society.
        Come help the Phantom Thieves better society!
      </MissionText>
    </MissionContainer>
  );
};

export default Mission;
