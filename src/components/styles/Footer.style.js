import { Link } from 'react-router-dom';
import styled from 'styled-components';

export const FooterContainer = styled.div`
  border-top: 3px solid #db1b0d;
  height: 100%;
  padding: 15px;
  width: 100%;
  background-color: black;

  display: flex;
  flex-direction: row;
  justify-content: space-evenly;
`;

export const FooterColumnContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const FooterColumnHeader = styled.span`
  font-size: x-large;
  font-weight: bold;
`;

export const FooterColumnLinks = styled.ul`
  display: flex;
  flex-direction: column;
  align-items: center;
  list-style: none;
  padding: 0;

  li {
    margin-bottom: 10px;
  }
`;

export const FooterLink = styled(Link)`
  color: white;
  text-decoration: none;

  :hover {
    text-decoration: underline;
  }
`;
