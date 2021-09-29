import { Link } from 'react-router-dom';
import styled from 'styled-components';

export const HeaderContainer = styled.div`
  background-color: #db1b0d;
  display: flex;
  flex-direction: row;
  justify-content: center;
  max-height: 56px;
  width: 100%;
  z-index: 1;
`;

export const HeaderList = styled.ul`
  align-items: center;
  display: flex;
  flex-direction: row;
  justify-content: space-evenly;
  list-style-type: none;
  width: 100%;
  padding: 0;
`;

export const HeaderLink = styled(Link)`
  color: white;
  font-family: 'PhanHeader';
  font-size: 1.35em;
  text-decoration: none;
`;

export const LogoLink = styled(HeaderLink)`
  align-items: center;
  height: 56px;
  display: flex;
`;

export const LogoWrapper = styled.div`
  align-items: center;
  height: 56px;
  display: flex;
  margin-left: 32px;
`;

export const HeaderLogo = styled.img`
  width: 56px;
`;

export const LinksContainer = styled.div`
  width: 1350px;
  display: flex;
  flex-direction: row;
  justify-content: space-evenly;
`;
