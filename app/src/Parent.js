import React from 'react';
import Child from './Child';

export default class Parent extends React.Component {
  constructor() {
    super();
    this.state = {
      people: [{
        name: '양간장',
        age: 25,
        show: false
      }, {
        name: '김반장',
        age: 44,
        show: false
      }, {
        name: '오팀장',
        age: 49,
        show: false
      }]
    }
  }

  handleClick(i) {
    this.state.people[i].show = !this.state.people[i].show;
    this.setState({
      people: this.state.people
    });
  }

  render() {
    const people = this.state.people;
    return(
      <ul>
        <Child name={people[0].name}
               age={people[0].age}
               show={people[0].show}
               handleClick={() => this.handleClick(0)} />
        <Child name={people[1].name}
               age={people[1].age}
               show={people[1].show}
               handleClick={() => this.handleClick(1)} />
        <Child name={people[2].name}
               age={people[2].age}
               show={people[2].show}
               handleClick={() => this.handleClick(2)} />
      </ul>
    );
  }
}