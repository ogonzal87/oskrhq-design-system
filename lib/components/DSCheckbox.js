import React from 'react';
import '../../lib/styles/styles.scss';

const DSCheckbox = ({ labelText, children, ...rest }) => (
  <label className="ds-checkbox-container">
    <input type="checkbox" className="ds-checkbox" {...rest} />
    <i className="material-icons ds-icon-tiny ds-checkmark">{children}</i>
    <span className="ds-body2-text-style">{labelText}</span>
  </label>
);

export default DSCheckbox;
