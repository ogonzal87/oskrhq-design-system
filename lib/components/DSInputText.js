import React from 'react';
import '../../lib/styles/styles.scss';

const DSInputText = ({ label, ...rest }) => (
  <div className="ds-input-text-container">
    <label className="ds-body2-text-style ds-input-label">{label}</label>
    <input className="ds-input-field ds-body1-text-style" {...rest} aria-label={label} />
  </div>
);

export default DSInputText;
