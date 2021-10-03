import React, { useEffect, useCallback } from 'react';
import { debounce } from 'lodash';
import { useState } from 'react';

import { RequestSearchFormContainer, RequestSearchBar } from '../styles/Request.style';
import RequestFilterMenu from './RequestFilterMenu';

const RequestSearchForm = () => {
  const [formState, setForm] = useState({
    subject: '',
    areFiltersActive: false,
    filters: { hideCompleted: false },
    selectedSort: { sortOn: 'postedDate', sortDir: 'desc' },
  });

  // eslint-disable-next-line react-hooks/exhaustive-deps
  const search = useCallback(
    debounce((searchPayload) => {
      console.log('I just searched with ', searchPayload);
    }, 300),
    []
  );

  useEffect(() => {
    search(formState);
    // call search here yo
  });

  const onMenuAction = useCallback((menuState) => {
    setForm((newState) => ({
      ...newState,
      areFiltersActive: menuState.isMenuExpanded,
      filters: menuState.filters,
      selectedSort: menuState.selectedSort,
    }));
  }, []);

  const handleInputChange = (event) => {
    setForm({ ...formState, subject: event.target.value });
  };

  return (
    <RequestSearchFormContainer>
      <RequestSearchBar
        className='request-search-bar'
        name='search'
        placeholder='Search Requests'
        onInputChange={handleInputChange}
        type='text'
        value={formState.subject}
      />
      <RequestFilterMenu onMenuAction={onMenuAction} />
    </RequestSearchFormContainer>
  );
};

export default RequestSearchForm;
