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
    /*const people = this.state.people.map((v, i) => (
      <Child name={people[i].name}
             age={people[i].age}
             show={people[i].show}
             handleClick={() => this.handleClick(i)} />
    ));*/
    const people = this.state.people.map((v, i) => (
      <Child
        key={i}
        handleClick={() => this.handleClick(i)}
             {...v} />
    ));

    return(
      <ul>
        {people}
      </ul>
    );
  }
}