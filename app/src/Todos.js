import React, {Component} from 'react';
import Todo from './Todo';

export default class Todos extends Component {
  render() {
    return(
      <section className="main">
        <input className="toggle-all" type="checkbox"/>
        <ul className="todo-list">
          <Todo/>
        </ul>
      </section>
    );
  }
}