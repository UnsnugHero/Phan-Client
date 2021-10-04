import React, { useEffect, useCallback } from 'react';
import { debounce } from 'lodash';
import { useState } from 'react';

import { RequestSearchBar, RequestSearchContainer } from '../styles/Request.style';
import RequestFilterMenu from './RequestFilterMenu';
import RequestList from './RequestList';

const RequestSearch = () => {
  const mockRequests = [
    {
      subject: 'Help!',
      location: 'Shinjuku',
      completed: false,
      postedDate: new Date('2021-10-1').toLocaleDateString('en-US'),
      likesCount: 156,
    },
    {
      subject: 'Someone please',
      location: 'Chiba',
      completed: true,
      postedDate: new Date('2021-5-31').toLocaleDateString('en-US'),
      likesCount: 81,
    },
    {
      subject: 'This needs to stop',
      location: 'Shibuya',
      completed: false,
      postedDate: new Date('2021-9-13').toLocaleDateString('en-US'),
      likesCount: 23,
    },
  ];

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
    <RequestSearchContainer>
      <RequestSearchBar
        className='request-search-bar'
        name='search'
        placeholder='Search Requests'
        onInputChange={handleInputChange}
        type='text'
        value={formState.subject}
      />
      <RequestFilterMenu onMenuAction={onMenuAction} />
      <RequestList requests={mockRequests} />
    </RequestSearchContainer>
  );
};

export default RequestSearch;
