'use strict';
const getUID = () => Date.now();
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
    default: return state;
  }
};

export default TodoReducer;
