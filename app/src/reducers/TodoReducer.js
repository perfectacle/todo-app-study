'use strict';
import update from 'immutability-helper';

const getUID = () => Date.now();
const getIdx = (arr, id) => arr.findIndex(v => v.id === id);
const initialState = {
  todos: [{
    id: getUID(),
    txt: '피자 먹기',
    isCompleted: false
  }],
  filter: 'All',
  idEdit: 0,
  txtEditOrigin: ''
};

const TodoReducer = (state = initialState, action) => {
  switch(action.type) {
    case 'ADD_TODO': {
      const newTodos = update(state.todos, {
        $push: [{
          id: getUID(),
          txt: action.txt,
          isCompleted: false
        }]
      });
      return Object.assign({}, state, {
        todos: newTodos
      });
    }
    case 'ENTER_EDIT_TODO': {
      return Object.assign({}, state, {
        idEdit: action.id,
        txtEditOrigin: action.txt
      });
    }
    case 'EDIT_TODO': {
      const idx = getIdx(state.todos, action.id);
      const newTodos = update(state.todos, {
        [idx]: {
          txt: {
            $set: action.txt
          }
        }
      });
      return Object.assign({}, state, {
        todos: newTodos
      });
    }
    case 'SAVE_TODO': {
      return Object.assign({}, state, {
        idEdit: 0,
        txtEditOrigin: ''
      });
    }
    case 'CANCEL_EDIT_TODO': {
      if(!state.idEdit) return;
      const isCanceled = confirm('저장되지 않은 내용은 사라집니다.\n계속 하시겠습니까?');
      if(isCanceled) {
        const idx = getIdx(state.todos, state.idEdit);
        const newTodos = update(state.todos, {
          [idx]: {
            txt: {
              $set: state.txtEditOrigin
            }
          }
        });
        return Object.assign({}, state, {
          todos: newTodos,
          idEdit: 0,
          txtEditOrigin: ''
        });
      }
      return state; // 수정 모드 취소를 취소(수정 모드를 유지할시) 현재 스테이트 리턴.
    }
    case 'TOGGLE_TODO': {
      const idx = getIdx(state.todos, action.id);
      const newTodos = update(state.todos, {
        [idx]: {
          isCompleted: {
            $set: !state.todos[idx].isCompleted
          }
        }
      });
      return Object.assign({}, state, {
        todos: newTodos
      });
    }
    case 'TOGGLE_ALL_TODO': {
      const isAllCompleted = state.todos.every(v => v.isCompleted);
      const newTodos = state.todos.map(v => {
        v.isCompleted = !isAllCompleted;
        return v;
      });
      return Object.assign({}, state, {
        todos: newTodos
      });
    }
    case 'DEL_TODO': {
      const idx = getIdx(state.todos, action.id);
      const newTodos = update(state.todos, {
        $splice: [[
          idx, 1
        ]]
      });
      return Object.assign({}, state, {
        todos: newTodos
      });
    }
    case 'DEL_COMPLETED_TODOS': {
      const newTodos = state.todos.filter(v => !v.isCompleted);
      return Object.assign({}, state, {
        todos: newTodos
      });
    }
    default: return state;
  }
};

export default TodoReducer;
