import React from 'react';
import '../../lib/styles/styles.scss';

const DSRadio = ({ checked, name, label, ...rest }) => (
  <label className="ds-radio-container">
    <input type="radio" defaultChecked={checked} name {...rest} />
    <span className="ds-radio" />
    <span className="ds-body2-text-style">{label}</span>
  </label>
);

export default DSRadio;
