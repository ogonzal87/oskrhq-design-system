import React from 'react';
import '../../lib/styles/styles.scss';

const DSCheckbox = ({ labelText, children, ...rest }) => (
  <label className="ds-checkbox-container" htmlFor={labelText}>
    <input type="checkbox" className="ds-checkbox" {...rest} id={labelText} />
    <i className="material-icons ds-icon-tiny ds-checkmark">done</i>
    <span className="ds-body2-text-style">{labelText}</span>
  </label>
);

export default DSCheckbox;
