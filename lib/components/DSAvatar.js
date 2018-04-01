import React from 'react';
import '../styles/styles.scss';

class DSAvatar extends React.Component {
  constructor(props) {
    super(props);
  };

  checkSize(props) {
    let size = '';

    if (props.size === 'small') {
      size = "ds-avatar-small";
    } else if (props.size === 'large') {
      size = "ds-avatar-large";
    } else if (props.size === 'medium') {
      size = "ds-avatar-medium";
    } else {
      size = "";
    }
    return size;
  };

  render() {
    return (
      <div className="ds-avatar-container">
        <img src={this.props.userImg} className={`ds-avatar ${this.checkSize(this.props)}`} />
      </div>
    )
  };
};

export default DSAvatar;
