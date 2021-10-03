import React from 'react';
import { useState } from 'react';

import { RequestFilterMenuContainer, RequestFilterMenuButton, FilterMenu } from '../styles/Request.style';
import RequestFiltersSection from './RequestFiltersSection';
import RequestSortFiltersSection from './RequestSortFiltersSection';

const RequestFilterMenu = () => {
  const [menuState, setState] = useState({
    isMenuExpanded: false,
    filters: { hideCompleted: false },
    selectedSort: { sortOn: 'postedDate', sortDir: 'desc' },
  });

  const onExpandMenu = () => {
    setState({
      ...menuState,
      isMenuExpanded: !menuState.isMenuExpanded,
    });
  };

  const onFilterClick = (filterState) => {
    setState({
      ...menuState,
      filters: filterState,
    });

    // call an on sort changed fn passed from parent, this
    // should update the search with newly applied filter
  };

  const onSortFilterClick = (selectedSort) => {
    setState({
      ...menuState,
      selectedSort,
    });

    // call an on sort changed fn passed from parent
  };

  return (
    <RequestFilterMenuContainer>
      <RequestFilterMenuButton isExpanded={menuState.isMenuExpanded} onClick={onExpandMenu}>{`${
        menuState.isMenuExpanded ? '- Remove' : '+ Add'
      } filters`}</RequestFilterMenuButton>
      <FilterMenu isExpanded={menuState.isMenuExpanded}>
        <RequestFiltersSection filters={menuState.filters} onFilterClick={onFilterClick} />
        <RequestSortFiltersSection onSortFilterClick={onSortFilterClick} />
      </FilterMenu>
    </RequestFilterMenuContainer>
  );
};

export default RequestFilterMenu;
