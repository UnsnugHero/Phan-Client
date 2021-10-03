import React, { useEffect, useState } from 'react';
import PropTypes from 'prop-types';

import { RequestFilterMenuContainer, RequestFilterMenuButton, FilterMenu } from '../styles/Request.style';
import RequestFiltersSection from './RequestFiltersSection';
import RequestSortFiltersSection from './RequestSortFiltersSection';

const RequestFilterMenu = ({ onMenuAction }) => {
  const [menuState, setState] = useState({
    isMenuExpanded: false,
    filters: { hideCompleted: false },
    selectedSort: { sortOn: 'postedDate', sortDir: 'desc' },
  });

  useEffect(() => {
    onMenuAction(menuState);
  }, [menuState, onMenuAction]);

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
  };

  const onSortFilterClick = (selectedSort) => {
    setState({
      ...menuState,
      selectedSort,
    });
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

RequestFilterMenu.propTypes = {
  onMenuAction: PropTypes.func.isRequired,
};

export default RequestFilterMenu;
