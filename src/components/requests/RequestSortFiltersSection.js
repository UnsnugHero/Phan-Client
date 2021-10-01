import React from 'react';
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
      <RequestFilterTitle style={{ paddingLeft: '8px', marginBottom: '16px' }}>Sort Filters</RequestFilterTitle>
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

export default RequestSortFiltersSection;
