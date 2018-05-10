import React from 'react';
import "../../lib/styles/styles.scss";

const DSSwitch = ({ isChecked, ...rest }) => (
  <div className="ds-switch-container">
    <label>
      <input type="checkbox" className="ds-switch" defaultChecked={isChecked} {...rest} />
      <div className="ds-switch-nob" />
    </label>
  </div>
);

export default DSSwitch;
