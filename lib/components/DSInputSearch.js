import React from 'react';
import '../../lib/styles/styles.scss';

const DSInputSearch = props => (
  <div className="ds-input-search-container">
    <input
      type="search"
      placeholder={this.props.placeholder || 'Search'}
      className="ds-input-field ds-subheading-text-style"
      {...props}
    />
    <i className="material-icons ds-icon-small ds-search-input-icon">search</i>
  </div>
);

export default DSInputSearch;
