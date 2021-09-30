import React from 'react';
import { useState } from 'react';
import { RequestFilterMenuContainer, RequestFilterMenuButton, FilterMenu } from '../styles/Request.style';

const RequestFilterMenu = () => {
  const [menuState, setState] = useState({
    isMenuExpanded: false,
  });

  return (
    <RequestFilterMenuContainer>
      <RequestFilterMenuButton
        className={`${menuState.isMenuExpanded ? 'active' : ''}`}
        onClick={() => {
          setState({
            isMenuExpanded: !menuState.isMenuExpanded,
          });
        }}
      >{`${menuState.isMenuExpanded ? '- Remove' : '+ Add'} filters`}</RequestFilterMenuButton>
      <FilterMenu className={`${menuState.isMenuExpanded ? 'expanded' : ''}`}>{/* Add sort filters here */}</FilterMenu>
    </RequestFilterMenuContainer>
  );
};

// ideas
// make this a filters menu where you can add some other filters (right now just thinking of filtering out completed requests)
//

export default RequestFilterMenu;
