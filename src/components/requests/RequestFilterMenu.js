import React from 'react';
import { useState } from 'react';

import Radio from '../general/Radio';
import { RequestFilterMenuContainer, RequestFilterMenuButton, FilterMenu } from '../styles/Request.style';
import { REQUEST_SORT_FILTERS } from './Requests.constants';

const RequestFilterMenu = () => {
  const [menuState, setState] = useState({
    isMenuExpanded: false,
    selectedSort: { sortOn: 'postedDate', sortDir: 'desc' },
  });

  const onRadioClick = (value) => {
    setState({
      ...menuState,
      selectedSort: value,
    });

    // call the parent set form function here or whatever on propsf
  };

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
      <FilterMenu className={`${menuState.isMenuExpanded ? 'expanded' : ''}`}>
        {REQUEST_SORT_FILTERS.map((filter, idx) => {
          return <Radio key={idx} name='sort' onClick={onRadioClick} text={filter.displayText} value={filter.value} />;
        })}
      </FilterMenu>
    </RequestFilterMenuContainer>
  );
};

// ideas
// make this a filters menu where you can add some other filters (right now just thinking of filtering out completed requests)
//

export default RequestFilterMenu;
