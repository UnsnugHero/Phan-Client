import React, { useCallback, useEffect } from 'react';
import { useState } from 'react';
import { useHistory } from 'react-router';
import { connect } from 'react-redux';

import {
  MakeRequestButton,
  RequestSearchAndButtonContainer,
  RequestSearchBar,
  RequestSearchButton,
  RequestSearchContainer,
} from '../styles/Request.style';
import { searchRequests } from '../../services/request.service';
import { GeneralXLHeader } from '../styles/App.style';
import RequestFilterMenu from './RequestFilterMenu';
import RequestList from './RequestList';

const RequestSearch = ({ isAuthenticated }) => {
  const initialSearchForm = {
    subject: '',
    areFiltersActive: false,
    filters: { hideCompleted: false },
    selectedSort: { sortOn: 'postedDate', sortDir: 'desc' },
  };

  const history = useHistory();

  const [formState, setForm] = useState(initialSearchForm);
  const [isLoading, setLoading] = useState(true);
  const [resultsState, setResults] = useState([]);

  useEffect(() => {
    const execInitSearch = async () => {
      const searchResults = await searchRequests({ subject: '' });
      setResults(searchResults);
      setLoading(false);
    };

    execInitSearch();
  }, []);

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

  const formSearchPayload = () => {
    const searchPayload = {
      subject: formState.subject,
    };

    return searchPayload;
  };

  const handleSearchButtonClick = async () => {
    setLoading(true);
    const searchPayload = formSearchPayload();
    const searchResults = await searchRequests(searchPayload);
    setResults(searchResults);
    setLoading(false);
  };

  const handleMakeRequestButtonClick = () => {
    history.push('/make-request');
  };

  return (
    <RequestSearchContainer>
      <GeneralXLHeader>Request Search</GeneralXLHeader>
      {isAuthenticated && (
        <MakeRequestButton text='Make A Request' onButtonClick={handleMakeRequestButtonClick}></MakeRequestButton>
      )}
      <RequestSearchAndButtonContainer>
        <RequestSearchBar
          className='request-search-bar'
          name='search'
          placeholder='Search Requests'
          onInputChange={handleInputChange}
          type='text'
          value={formState.subject}
        />
        <RequestSearchButton text='Search' onButtonClick={handleSearchButtonClick} />
      </RequestSearchAndButtonContainer>
      <RequestFilterMenu onMenuAction={onMenuAction} />
      <RequestList requests={resultsState} loading={isLoading} />
    </RequestSearchContainer>
  );
};

const mapStateToProps = (state) => ({
  isAuthenticated: state.auth.isAuthenticated,
});

export default connect(mapStateToProps)(RequestSearch);
