import React from 'react';

export default class Child extends React.Component {
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

Child.defaultProps = {
  name: '야야야야',
  age: 999292929
};