import React from 'react';
import PropTypes from 'prop-types';

import Checkbox from '../general/Checkbox';
import { FiltersSection, RequestFilterTitle } from '../styles/Request.style';

const RequestFiltersSection = (props) => {
  const onCheckboxClick = (e) => {
    props.onFilterClick({
      ...props.filters,
      [e.target.name]: e.target.checked,
    });
  };

  return (
    <>
      <RequestFilterTitle>Filters</RequestFilterTitle>
      <FiltersSection>
        <Checkbox
          name='hideCompleted'
          text='Hide Completed'
          checked={props.filters?.hideCompleted || false}
          onCheckboxClick={onCheckboxClick}
        />
      </FiltersSection>
    </>
  );
};

RequestFiltersSection.propTypes = {
  filters: PropTypes.object,
  onFilterClick: PropTypes.func.isRequired,
};

export default RequestFiltersSection;
