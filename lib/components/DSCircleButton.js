import React from 'react';
import '../styles/styles.scss';


let type = '';
let size = '';

const checkType = (props) => {
  if (props.type === 'primary') {
    type = "ds-circle-btn-primary";
  } else if (props.type === 'secondary') {
    type = "ds-circle-btn-secondary";
  } else if (props.type === 'success') {
    type = "ds-circle-btn-success";
  } else if (props.type === 'danger') {
    type = "ds-circle-btn-danger";
  } else if (props.type === 'info') {
    type = "ds-circle-btn-info";
  } else if (props.type === 'ghost') {
    type = "ds-circle-btn-ghost";
  } else {
    type = "ds-circle-btn-primary";
  }
  return type;
};

const clickHandler = () => {
  console.log("Click Handler Fired!");
};

const DSCircleButton = (props) => (
  <button className={`ds-circle-btn ${checkType(props)}`}>
    <i className="material-icons ds-icon-small">{props.icon}</i>
  </button>
);

export default DSCircleButton;