import React, {Component, PropTypes} from 'react';
import Todo from './Todo';

export default class Todos extends Component {
  static propTypes = {
    todos: PropTypes.array.isRequired,
    idEdit: PropTypes.number.isRequired,
    editTodo: PropTypes.func.isRequired,
    changeTodo: PropTypes.func.isRequired,
    saveTodo: PropTypes.func.isRequired,
    toggleTodo: PropTypes.func.isRequired
  };

  render() {
    const {todos, idEdit, editTodo, changeTodo, saveTodo, toggleTodo} = this.props;
    const TodoList = todos.map(v =>
      <Todo key={v.id} {...v} idEdit={idEdit} editTodo={editTodo} changeTodo={changeTodo} saveTodo={saveTodo}
            toggleTodo={toggleTodo} />
    );
    return(
      <section className="main">
        <input className="toggle-all" type="checkbox"/>
        <ul className="todo-list">
          {TodoList}
        </ul>
      </section>
    );
  }
}