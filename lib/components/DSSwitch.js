import React from 'react';
import "../../lib/styles/styles.scss";

const DSSwitch = ({ switchName, isChecked, ...rest }) => (
  <div className="ds-switch-container">
    <label htmlFor={switchName}>
      <input type="checkbox" className="ds-switch" defaultChecked={isChecked} {...rest} role="switch" id={switchName} />
      <div className="ds-switch-nob" />
    </label>
  </div>
);

export default DSSwitch;
