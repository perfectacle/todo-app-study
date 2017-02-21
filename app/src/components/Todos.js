'use strict';
import React, {Component, PropTypes} from 'react';
import {connect} from 'react-redux';

import Todo from './Todo';

const mapStateToProps = state => ({
  todos: state.todos
});

class Todos extends Component {
  static propTypes = {
    todos: PropTypes.array.isRequired
  };

  render() {
    const todoList = this.props.todos.map(v => (
      <Todo key={v.id} {...v} />
    ));
    return (
      <section className="main">
        <input className="toggle-all" type="checkbox" />
        <ul className="todo-list">
          {todoList}
        </ul>
      </section>
    );
  }
}

export default connect(mapStateToProps)(Todos);