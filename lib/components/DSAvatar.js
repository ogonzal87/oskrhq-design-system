import React from 'react';
import "../../lib/styles/styles.scss";

const DSAvatar = ({ size, ...rest }) => {
  const avatarImgSizeClass = size ? `ds-avatar-${size}` : '';
  return (<div className="ds-avatar-container">
    <img className={`ds-avatar ${avatarImgSizeClass}`} {...rest}/>
  </div>);
};

export default DSAvatar;
