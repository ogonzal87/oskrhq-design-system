import React from 'react';
import "../../lib/styles/styles.scss";

const getClassNameFromProp = (prop, prefix) => (prop && `${prefix}${prop}`) || '';
const getSizeClassName = (size, prefix) => getClassNameFromProp(size, prefix);
const getTypeClassName = (type, prefix) => getClassNameFromProp(type, prefix);

const DSButton = ({ type, circle, icon, size, children, ...rest }) => {
  const prefix = circle ? 'ds-circle-btn-' : 'ds-btn-';
  return circle ? (
    <button className={`ds-circle-btn ${getTypeClassName(type, prefix)}`} {...rest}>
      {icon ? <i className="material-icons ds-icon-small">{icon}</i> : { children }}
    </button>
  ) : (
    <button
      className={`ds-btn ${getTypeClassName(type, prefix)} ${getSizeClassName(size, prefix)}`}
      {...rest}
    >
      {children}
    </button>
  );
};

export default DSButton;
