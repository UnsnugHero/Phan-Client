import React from 'react';
import { useState } from 'react';

import { RequestFilterMenuContainer, RequestFilterMenuButton, FilterMenu } from '../styles/Request.style';
import RequestSortFiltersSection from './RequestSortFiltersSection';

const RequestFilterMenu = () => {
  const [menuState, setState] = useState({
    isMenuExpanded: false,
    selectedSort: { sortOn: 'postedDate', sortDir: 'desc' },
  });

  const onExpandMenu = () => {
    setState({
      isMenuExpanded: !menuState.isMenuExpanded,
    });
  };

  const onFilterClick = () => {};

  const onSortFilterClick = (value) => {
    console.log(value);
  };

  return (
    <RequestFilterMenuContainer>
      <RequestFilterMenuButton isExpanded={menuState.isMenuExpanded} onClick={onExpandMenu}>{`${
        menuState.isMenuExpanded ? '- Remove' : '+ Add'
      } filters`}</RequestFilterMenuButton>
      <FilterMenu isExpanded={menuState.isMenuExpanded}>
        <RequestSortFiltersSection onSortFilterClick={onSortFilterClick} />
      </FilterMenu>
    </RequestFilterMenuContainer>
  );
};

export default RequestFilterMenu;
