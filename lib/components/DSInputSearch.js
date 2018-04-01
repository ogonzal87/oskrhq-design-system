import React from 'react';
import '../styles/styles.scss';

class DSInputSearch extends React.Component {
  constructor(props) {
    super(props);
  };

  render() {
    return (
      <div className="ds-input-search-container">
        <input type="search" placeholder={this.props.placeholder || 'Search'} className="ds-input-field ds-subheading-text-style" autoFocus={this.props.autoFocus} />
        <i className="material-icons ds-icon-small ds-search-input-icon">search</i>
      </div>
    )
  };
};

export default DSInputSearch;