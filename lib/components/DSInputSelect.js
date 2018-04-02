import React from 'react';
import '../../lib/styles/styles.scss';

class DSInputSelect extends React.Component {
  constructor(props) {
    super(props);
  };

  render() {
    return (
      <div className="ds-input-select-container">
        <label className="ds-body1-text-style ds-input-label">{this.props.label}</label>
        <select placeholder={this.props.placeholder} className="ds-input-field ds-subheading-text-style" value={this.props.value} >
          {this.props.children}
        </select>
        <span><i className="material-icons ds-icon-small ds-select-chevron-down">keyboard_arrow_down</i></span>
      </div>
    )
  };
};

export default DSInputSelect;