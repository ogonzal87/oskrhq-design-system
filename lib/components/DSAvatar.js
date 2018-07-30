import React from 'react';
import '../../lib/styles/styles.scss';

const DSAvatar = ({ size, ...rest }) => {
  const avatarImgSizeClass = size ? `ds-avatar-${size}` : '';
  return (
    <div className="ds-avatar-container">
      <img className={`ds-avatar ${avatarImgSizeClass}`} {...rest} alt="Avatar Image" />
    </div>
  );
};

export default DSAvatar;
