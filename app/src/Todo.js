import React, {Component, PropTypes} from 'react';
import ClassNames from 'classnames';

export default class Todo extends Component {
  static propTypes = {
    id: PropTypes.number.isRequired,
    txt: PropTypes.string.isRequired,
    isCompleted: PropTypes.bool.isRequired,
    idEdit: PropTypes.number.isRequired,
    editTodo: PropTypes.func.isRequired,
    changeTodo: PropTypes.func.isRequired,
    saveTodo: PropTypes.func.isRequired,
    toggleTodo: PropTypes.func.isRequired,
    delTodo: PropTypes.func.isRequired
  };

  componentDidUpdate() {
    this.txtEdit.focus();
  }

  handleEditTodo(id, txt) {
    this.props.editTodo(id, txt);
  }

  handleChangeTodo(e, id) {
    this.props.changeTodo(id, e.target.value);
  }

  handleSaveTodo(e) {
    if(e.nativeEvent.keyCode !== 13) return;
    this.props.saveTodo();
  }

  render() {
    const {id, txt, isCompleted, idEdit, toggleTodo, delTodo} = this.props;
    return (
      <li className={
        ClassNames({
          editing: idEdit === id,
          completed: isCompleted
        })}>
        <div className="view">
          <input className="toggle" type="checkbox" checked={isCompleted} onChange={() => toggleTodo(id)}/>
          <label onDoubleClick={() => this.handleEditTodo(id, txt)}>{txt}</label>
          <button className="destroy" onClick={() => delTodo(id)}></button>
        </div>
        <input className="edit" value={txt}
               ref={ref => this.txtEdit = ref}
               onChange={(e) => this.handleChangeTodo(e, id)}
               onKeyPress={(e) => this.handleSaveTodo(e)}/>
      </li>
    );
  }
}