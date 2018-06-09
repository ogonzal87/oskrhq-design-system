import React from 'react';
import "../../lib/styles/styles.scss";

const DSInputArea = ({ label, ...rest }) => (
  <div className="ds-text-area-container">
    <label className="ds-body2-text-style ds-text-area-label">{label}</label>
    <textarea className="ds-text-area-field ds-body1-text-style" {...rest} />
  </div>
);

export default DSInputArea;
