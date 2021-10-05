import React from 'react';
import PropTypes from 'prop-types';

import Radio from '../general/Radio';
import { RequestFilterTitle, SortFiltersSection } from '../styles/Request.style';
import { REQUEST_SORT_FILTERS } from './Requests.constants';

const RequestSortFiltersSection = (props) => {
  const filters = REQUEST_SORT_FILTERS;

  const onRadioClick = (value) => {
    props.onSortFilterClick(value);
  };

  return (
    <>
      <RequestFilterTitle>Sort Filters</RequestFilterTitle>
      <SortFiltersSection>
        {filters.map((filter, idx) => {
          return (
            <Radio
              key={idx}
              defaultChecked={filter.checked}
              name='sort'
              onClick={onRadioClick}
              text={filter.displayText}
              value={filter.value}
            />
          );
        })}
      </SortFiltersSection>
    </>
  );
};

RequestSortFiltersSection.propTypes = {
  onSortFilterClick: PropTypes.func.isRequired,
};

export default RequestSortFiltersSection;
