import React, {Component, PropTypes} from 'react';

export default class Child extends Component {
  static propTypes = {
    name: PropTypes.string.isRequired
  };

  render() {
    const {name, age, show, handleClick} = this.props;
    return(
      <li>
        <span onClick={handleClick}>{name}</span>
        <span style={{
          display: show ? 'inline' : 'none'
        }}> {age}세</span>
      </li>
    );
  }
}