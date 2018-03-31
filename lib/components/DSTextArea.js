import React from 'react';
import '../styles/styles.scss';

class DSInputArea extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return ( 
      <div className="ds-text-area-container">
        <label className="ds-body1-text-style ds-text-area-label">{this.props.label}</label>
        <textarea
          className="ds-text-area-field ds-subheading-text-style"
          placeholder={this.props.placeholder}
          rows={this.props.rows}
          value={this.props.value}></textarea>
      </div>
    )
  }
};

export default DSInputArea;