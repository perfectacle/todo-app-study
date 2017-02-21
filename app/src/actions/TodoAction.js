'use strict';
const TodoAction = {
  addTodo(txt) {
    return {
      type: 'ADD_TODO',
      txt
    };
  },
  enterEditTodo(id, txt) {
    return {
      type: 'ENTER_EDIT_TODO',
      id, txt
    };
  },
  editTodo(id, txt) {
    return {
      type: 'EDIT_TODO',
      id, txt
    };
  },
  saveTodo() {
    return {
      type: 'SAVE_TODO'
    };
  },
  cancelEditTodo() {
    return {
      type: 'CANCEL_EDIT_TODO'
    };
  },
  toggleTodo(id) {
    return {
      type: 'TOGGLE_TODO',
      id
    };
  },
  toggleAllTodo() {
    return {
      type: 'TOGGLE_ALL_TODO'
    };
  },
  delTodo(id) {
    return {
      type: 'DEL_TODO',
      id
    };
  },
  delCompletedTodos() {
    return {
      type: 'DEL_COMPLETED_TODOS'
    };
  }
};

export default TodoAction;