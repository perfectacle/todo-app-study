import React, {Component} from 'react';
import update from 'immutability-helper';
import Header from './Header';
import Todos from './Todos';
import Footer from './Footer';

const getUID = () => Date.now();

export default class Container extends Component {
  constructor() {
    super();
    this.state = {
      todos: [{
        id: getUID(),
        txt: '피자 먹기',
        isCompleted: false
      }],
      filter: 'All',
      idEdit: 0,
      txtEditOrigin: ''
    };
  }

  componentDidMount() {
    document.addEventListener('click', () => this.cancelEditTodo());
  }

  stopEvt(e) {
    e.nativeEvent.stopImmediatePropagation();
  }

  getIdx(arr, id) {
    return arr.findIndex(v => v.id === id);
  }

  addTodo(txt) {
    const newTodos = update(this.state.todos, {
      $push: [{
        id: getUID(),
        txt: txt,
        isCompleted: false
      }]
    });
    this.setState({
      todos: newTodos
    });
  }

  editTodo(id, txt) {
    if(this.state.idEdit) {
      this.cancelEditTodo(id, txt);
    }
    this.setState({
      idEdit: id,
      txtEditOrigin: txt
    });
  }

  cancelEditTodo(id = 0, txt = '') {
    if(!this.state.idEdit) return; // 수정 중이 아니면 종료.
    const isCanceled = confirm('저장되지 않은 내용은 사라집니다.\n계속 하시겠습니까?');
    if(isCanceled) {
      const originTodos = this.state.todos;
      const idx = this.getIdx(originTodos, this.state.idEdit);
      const newTodos = update(originTodos, {
        [idx]: {
          txt: {
            $set: this.state.txtEditOrigin
          }
        }
      });
      this.setState({
        todos: newTodos,
        idEdit: id,
        txtEditOrigin: txt
      });
    }
  }

  changeTodo(id, txt) {
    const originTodos = this.state.todos;
    const idx = this.getIdx(originTodos, id);
    const newTodos = update(originTodos, {
      [idx]: {
        txt: {
          $set: txt
        }
      }
    });
    this.setState({
      todos: newTodos
    });
  }

  saveTodo() {
    this.setState({
      idEdit: 0,
      txtEditOrigin: ''
    });
  }

  toggleTodo(id) {
    const originTodos = this.state.todos;
    const idx = this.getIdx(originTodos, id);
    const newTodos = update(originTodos, {
      [idx]: {
        isCompleted: {
          $set: !originTodos[idx].isCompleted
        }
      }
    });
    this.setState({
      todos: newTodos
    });
  }

  toglleAllTodo() {
    // 1. 아무것도 체크가 안 돼있다면 모두 체크한다.
    // 2. 모두 체크돼있다면 모두 체크 해제한다.
    // 3. 하나라도 체크돼있다면 모두 체크한다.
    // 하나라도 체크돼있지 않다면, 즉 모두 체크돼있지 않다면
    // 모두 체크한다.
    const originTodos = this.state.todos;
    let isAllCompleted; // 모두 체크돼있는지 여부를 확인
    /*for(let i=0; i<originTodos.length; i++) {
      isAllCompleted = originTodos[i].isCompleted;
      if(!isAllCompleted) break;
    }*/

    /*originTodos.forEach((v, i) => {
      if(i && !isAllCompleted) return;
      isAllCompleted = v.isCompleted;
    });*/

    // 재남 님의 every 메소드를 보고 줄여본 방법
    isAllCompleted = originTodos.every(v => v.isCompleted);

    /*for(let i=0; i<originTodos.length; i++) {
      newTodos = update(newTodos, {
        [i]: {
          isCompleted: {
            $set: !isAllCompleted
          }
        }
      });
    }*/

    // 배열의 매 요소마다 값을 다 바꿔야하므로...
    // 불변성 도우미를 for문 돌리는 것보단
    // 새로 배열을 만드는 게 낫지 않을까 싶다.
    /*const newTodos = originTodos.map(v => (
      {
        id: v.id,
        txt: v.txt,
        isCompleted: !isAllCompleted
      }
    ));*/

    const newTodos = originTodos.map(v => {
      v.isCompleted = !isAllCompleted;
      return v;
    });

    this.setState({
      todos: newTodos
    });
  }

  delTodo(id) {
    const originTodos = this.state.todos;
    const idx = this.getIdx(originTodos, id);
    const newTodos = update(originTodos, {
      $splice: [[
        idx, 1
      ]]
    });
    this.setState({
      todos: newTodos
    });
  }

  delCompletedTodos() {
    const originTodos = this.state.todos;
    const newTodos = originTodos.filter(v => !v.isCompleted);
    this.setState({
      todos: newTodos
    });
  }

  changeFilter(filter) {
    this.setState({
      filter: filter
    });
  }

  render() {
    const {todos, filter, idEdit} = this.state;
    const cntActivated = todos.reduce((p, c) => c.isCompleted ? p : ++p, 0);
    return (
      <section className="todoapp" onClick={e => this.stopEvt(e)}>
        <Header addTodo={txt => this.addTodo(txt)}/>
        <Todos todos={todos} idEdit={idEdit} filter={filter} isAllCompleted={!cntActivated}
               editTodo={(id, txt) => this.editTodo(id, txt)}
               changeTodo={(id, txt) => this.changeTodo(id, txt)}
               saveTodo={() => this.saveTodo()}
               toggleTodo={id => this.toggleTodo(id)}
               toggleAllTodo={() => this.toglleAllTodo()}
               delTodo={id => this.delTodo(id)}/>
        <Footer filter={filter}
                cntActivated={cntActivated}
                cntCompleted={todos.length - cntActivated}
                delCompletedTodos={() => this.delCompletedTodos()}
                changeFilter={filter => this.changeFilter(filter)}/>
      </section>
    );
  }
}