import React from 'react';
import '../../lib/styles/styles.scss';

const DSInputText = ({ label, ...rest }) => (
  <div className="ds-input-text-container">
    <label className="ds-body1-text-style ds-input-label">{label}</label>
    <input className="ds-input-field ds-subheading-text-style" {...rest} />
  </div>
);

export default DSInputText;
