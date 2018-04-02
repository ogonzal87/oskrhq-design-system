import React from 'react';
import '../../lib/styles/styles.scss';

class DSCheckbox extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      isChecked: this.props.checked
    };
  };

  render() {
    return (
      <label className="ds-checkbox-container">
        <input type="checkbox" className="ds-checkbox" defaultChecked={this.state.isChecked}/>
        <i className="material-icons ds-icon-tiny ds-checkmark">done</i>
        <span className="ds-body2-text-style">{this.props.label}</span>
      </label>
    )
  };
};

export default DSCheckbox;
