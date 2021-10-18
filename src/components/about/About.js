import React from 'react';
import { AboutContainer, AboutText } from '../styles/About.style';
import { GeneralXLHeader } from '../styles/App.style';
import { LogoImage } from '../styles/Login.style';

import logo from '../../assets/logo-with-text.png';

const About = () => {
  return (
    <AboutContainer>
      <GeneralXLHeader>About</GeneralXLHeader>
      <LogoImage style={{ marginTop: '24px' }} src={logo} />
      <AboutText>
        Hello, this is the about page. Not really sure what I am going to write here as of yet but I know for sure that
        it will be pretty good and that it will be very well written. But until then, this is what will serve as the
        placeholder text.
      </AboutText>
    </AboutContainer>
  );
};

export default About;
