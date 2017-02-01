import React from 'react';

export default class Child extends React.Component {
  render() {
    const {name, age} = this.props;
    return(
      <div>
        나의 이름은 {name}, 나이는 {age}야!
      </div>
    );
  }
}

Child.defaultProps = {
  name: '야야야야',
  age: 999292929
};