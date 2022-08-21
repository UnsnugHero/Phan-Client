import { Link } from 'react-router-dom';
import styled, { css } from 'styled-components';

const baseLinkContainerStyle = css`
  display: flex;
  flex-direction: row;
  align-items: center;
`;

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
  ${baseLinkContainerStyle}
  width: 1350px;
  justify-content: space-evenly;
`;

export const MobileHeaderContainer = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
`;

export const MobileLinksContainer = styled.div`
  ${baseLinkContainerStyle}
  justify-content: space-between;
  padding: 0 25px;
`;

export const MobileLinks = styled.ul`
  margin: 0;
  padding: 0;
  padding-left: 25px;
  list-style-type: none;
  background-color: #db1b0d;
  display: flex;
  flex-direction: column;

  > li {
    padding: 8px;
  }
`;

export const MobileLink = styled(Link)`
  color: white;
  font-size: 1.35em;
  text-decoration: none;

  :hover {
    color: black;
  }
`;

export const BarsIconWrapper = styled.div`
  cursor: pointer;
`;
