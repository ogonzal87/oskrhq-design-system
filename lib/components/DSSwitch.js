import React from 'react';
import '../styles/styles.scss';

class DSSwitch extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      isChecked: this.props.checked
    };
  };

  render() {
    return (
      <div className="ds-switch-container">
        <label>
          <input type="checkbox" className="ds-switch" defaultChecked={this.state.isChecked}/>
          <div className="ds-switch-nob"></div>
        </label>
      </div>
    )
  };
};

export default DSSwitch;