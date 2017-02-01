import React from 'react';
import Child from './Child';

export default class Parent extends React.Component{
  render() {
    return(
      <div>
        <Child name="나" age="222"/>
        <Child name="나" />
      </div>
    );
  }
}