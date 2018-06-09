import React from 'react';
import "../../lib/styles/styles.scss";

const DSInputSearch = ({ placeholder, ...rest }) => (
  <div className="ds-input-search-container">
    <input
      type="search"
      placeholder={placeholder || 'Search'}
      className="ds-input-field ds-body1-text-style"
      {...rest}
    />
    <i className="material-icons ds-icon-small ds-search-input-icon">search</i>
  </div>
);

export default DSInputSearch;
