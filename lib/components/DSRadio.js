import React from 'react';
import '../../lib/styles/styles.scss';

class DSRadio extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <label className="ds-radio-container">
        <input type="radio" defaultChecked={this.props.checked} name={this.props.name} />
        <span className="ds-radio" />
        <span className="ds-body2-text-style">{this.props.label}</span>
      </label>
    );
  }
}

const DSRadio = ({ checked, name, label, ...rest }) => (
  <label className="ds-radio-container">
    <input type="radio" defaultChecked={checked} name {...rest} />
    <span className="ds-radio" />
    <span className="ds-body2-text-style">{label}</span>
  </label>
);

export default DSRadio;
