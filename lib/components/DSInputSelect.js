import React from 'react';
import "../../lib/styles/styles.scss";

const DSInputSelect = ({ label, value, children, ...rest }) => (
  <div className="ds-input-select-container">
    <label className="ds-body1-text-style ds-input-label">{label}</label>
    <select className="ds-input-field ds-body1-text-style" value={value} {...rest}>
      {children}
    </select>
    <span>
      <i className="material-icons ds-icon-small ds-select-chevron-down">keyboard_arrow_down</i>
    </span>
  </div>
);

export default DSInputSelect;
