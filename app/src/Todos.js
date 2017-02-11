import React, {Component, PropTypes} from 'react';
import Todo from './Todo';

export default class Todos extends Component {
  static propTypes = {
    todos: PropTypes.array.isRequired,
    idEdit: PropTypes.number.isRequired,
    filter: PropTypes.string.isRequired,
    isAllCompleted: PropTypes.bool.isRequired,
    editTodo: PropTypes.func.isRequired,
    changeTodo: PropTypes.func.isRequired,
    saveTodo: PropTypes.func.isRequired,
    toggleTodo: PropTypes.func.isRequired,
    toggleAllTodo: PropTypes.func.isRequired,
    delTodo: PropTypes.func.isRequired
  };

  render() {
    const {todos, idEdit, filter, isAllCompleted, editTodo, changeTodo, saveTodo, toggleTodo, toggleAllTodo, delTodo} = this.props;

    // 필터한 후에 맵 돌리기
    /*const filterTodo = todos.filter(v => {
      if(filter === 'All') return v;
      if(filter === 'Active') return !v.isCompleted;
      return v.isCompleted;
    });
    const TodoList = filterTodo.map(v =>
      <Todo key={v.id} {...v} idEdit={idEdit} editTodo={editTodo} changeTodo={changeTodo} saveTodo={saveTodo}
            toggleTodo={toggleTodo} delTodo={delTodo}/>
    );*/

    // 맵 돌리면서 안에서 필터링 하기.
    const TodoList = todos.map(v => {
      if(filter === 'Active' && v.isCompleted) return;
      if(filter === 'Completed' && !v.isCompleted) return;
      return (<Todo key={v.id} {...v} idEdit={idEdit} editTodo={editTodo} changeTodo={changeTodo} saveTodo={saveTodo}
              toggleTodo={toggleTodo} delTodo={delTodo}/>);
    });

    return (
      <section className="main">
        <input className="toggle-all" type="checkbox" checked={isAllCompleted} onChange={() => toggleAllTodo()}/>
        <ul className="todo-list">
          {TodoList}
        </ul>
      </section>
    );
  }
}