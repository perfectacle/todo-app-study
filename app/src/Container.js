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
      const isCanceled = confirm('저장되지 않은 내용은 사라집니다.\n계속 하시겠습니까?');
      if(!isCanceled) return; // 수정 중인 게 있고, 취소 버튼을 누르면 종료
    }
    this.setState({
      idEdit: id,
      txtEditOrigin: txt
    });
  }

  cancelEditTodo() {
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
        idEdit: 0,
        txtEditOrigin: ''
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
    })
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
  
  toggleAll() {
    let isAllActivated;
    for()
  }
  
  render() {
    const {todos, filter, idEdit} = this.state;
    return(
      <section className="todoapp" onClick={e => this.stopEvt(e)}>
        <Header addTodo={txt => this.addTodo(txt)} />
        <Todos todos={todos} idEdit={idEdit} editTodo={(id, txt) => this.editTodo(id, txt)}
               changeTodo={(id, txt) => this.changeTodo(id, txt)}
               saveTodo={() => this.saveTodo()}
               toggleTodo={id => this.toggleTodo(id)} />
        <Footer/>
      </section>
    );
  }
}