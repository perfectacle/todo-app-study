'use strict';
import React, {Component, PropTypes} from 'react';
import {connect} from 'react-redux';

import TodoAction from '../actions/TodoAction';
import Todo from './Todo';

const mapStateToProps = state => ({
  todos: state.todos
});
const mapDispatchToProps = dispatch => ({
  toggleAllTodo: () => dispatch(TodoAction.toggleAllTodo())
});

@connect(mapStateToProps, mapDispatchToProps)
export default class Todos extends Component {
  static propTypes = {
    todos: PropTypes.array.isRequired,
    toggleAllTodo: PropTypes.func.isRequired
  };

  render() {
    const {todos, toggleAllTodo, filter} = this.props;
    const todoList = todos.map(v => {
      if(filter === 'active' && v.isCompleted) return;
      if(filter === 'completed' && !v.isCompleted) return;
      return (<Todo key={v.id} {...v}/>);
    });
    return (
      <section className="main">
        <input className="toggle-all" type="checkbox" onChange={toggleAllTodo}/>
        <ul className="todo-list">
          {todoList}
        </ul>
      </section>
    );
  }
}