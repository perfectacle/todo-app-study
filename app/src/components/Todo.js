'use strict';
import React, {Component, PropTypes} from 'react';
import {connect} from 'react-redux';
import ClassNames from 'classnames';

import TodoAction from '../actions/TodoAction';

const mapStateToProps = state => ({
  idEdit: state.idEdit
});
const mapDispatchToProps = dispatch => ({
  enterEditTodo: (id, txt) => dispatch(TodoAction.enterEditTodo(id, txt)),
  editTodo: (id, txt) => dispatch(TodoAction.editTodo(id, txt)),
  saveTodo: () => dispatch(TodoAction.saveTodo()),
  cancelEditTodo: () => dispatch(TodoAction.cancelEditTodo()),
  toggleTodo: id => dispatch(TodoAction.toggleTodo(id)),
  delTodo: id => dispatch(TodoAction.delTodo(id))
});

class Todo extends Component {
  static propTypes = {
    id: PropTypes.number.isRequired,
    txt: PropTypes.string.isRequired,
    isCompleted: PropTypes.bool.isRequired,
    enterEditTodo: PropTypes.func.isRequired,
    editTodo: PropTypes.func.isRequired,
    saveTodo: PropTypes.func.isRequired,
    cancelEditTodo: PropTypes.func.isRequired,
    toggleTodo: PropTypes.func.isRequired,
    delTodo: PropTypes.func.isRequired
  };

  componentDidUpdate() {
    if(this.props.idEdit === this.props.id) this.txtEdit.focus();
  }

  render() {
    const {id, txt, isCompleted, idEdit, enterEditTodo, editTodo, saveTodo, cancelEditTodo, toggleTodo, delTodo} = this.props;
    return (
      <li className={
        ClassNames({
          editing: idEdit === id,
          completed: isCompleted
        })}>
        <div className="view">
          <input className="toggle" type="checkbox" checked={isCompleted} onChange={() => toggleTodo(id)}/>
          <label onDoubleClick={() => {
            let isFinished = true;
            if(idEdit) isFinished = confirm('입력하고 있는 값을 저장하고 새로 편집하시겠습니까?');
            if(isFinished) enterEditTodo(id, txt); // 기본적으로도 실행하고 편집중인 애가 있을 때는 검증 후 실햄.
          }}>{txt}</label>
          <button className="destroy" onClick={() => delTodo(id)}/>
        </div>
        <input className="edit" value={txt} ref={ref => this.txtEdit = ref}
               onChange={e => editTodo(id, e.target.value)}
               onKeyDown={e => {
                 if(e.nativeEvent.keyCode === 13) saveTodo();
                 else if(e.nativeEvent.keyCode === 27) cancelEditTodo();
               }}/>
      </li>
    );
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Todo);