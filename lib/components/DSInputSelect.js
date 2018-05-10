import React from 'react';

const DSInputSelect = ({ label, value, children, ...rest }) => (
  <div className="ds-input-select-container">
    <label className="ds-body1-text-style ds-input-label">{label}</label>
    <select className="ds-input-field ds-subheading-text-style" value={value} {...rest}>
      {children}
    </select>
    <span>
      <i className="material-icons ds-icon-small ds-select-chevron-down">keyboard_arrow_down</i>
    </span>
  </div>
);

export default DSInputSelect;
