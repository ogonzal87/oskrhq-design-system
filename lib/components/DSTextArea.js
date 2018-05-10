import React from 'react';

const DSInputArea = ({ label, ...rest }) => (
  <div className="ds-text-area-container">
    <label className="ds-body1-text-style ds-text-area-label">{label}</label>
    <textarea className="ds-text-area-field ds-subheading-text-style" {...rest} />
  </div>
);

export default DSInputArea;
