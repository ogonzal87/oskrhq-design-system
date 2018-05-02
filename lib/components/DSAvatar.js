import React from 'react';
import '../../lib/styles/styles.scss';

const DSAvatar = ({ size }) => {
  const avatarImgSizeClass = size ? `ds-avatar-${size}` : '';
  <div className="ds-avatar-container">
    <img src={this.props.userImg} className={`ds-avatar ${avatarImgSizeClass}`} />
  </div>;
};

export default DSAvatar;
