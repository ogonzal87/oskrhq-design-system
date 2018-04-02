import React from 'react';
import '../../lib/styles/styles.scss';

let type = '';
let size = '';

const checkType = (props) => {
  if (props.type === 'primary') {
    type = "ds-btn-primary";
  } else if (props.type === 'secondary') {
    type = "ds-btn-secondary";
  } else if (props.type === 'success') {
    type = "ds-btn-success";
  } else if (props.type === 'danger') {
    type = "ds-btn-danger";
  } else if (props.type === 'info') {
    type = "ds-btn-info";
  } else if (props.type === 'ghost') {
    type = "ds-btn-ghost";
  } else {
    type = "ds-btn-primary";
  }
  return type;
};

const checkSize = (props) => {
  if (props.size === 'small') {
    size = "ds-btn-small";
  } else if (props.size === 'medium') {
    size = "ds-btn-medium";
  } else {
    size = "";
  }
  return size;
};


const clickHandler = () => {
  console.log("Click Handler Fired!");
};

const DSButton = (props) => (
  <button className={`ds-btn ${checkType(props)} ${checkSize(props)}`}>{props.label}</button>
);

export default DSButton;