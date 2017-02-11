import React, {Component, PropTypes} from 'react';

export default class Header extends Component {
  static propTypes = {
    addTodo: PropTypes.func.isRequired
  };

  pressEnter(e) {
    const txtTodo = this.txtTodo;
    if(e.nativeEvent.keyCode !== 13) return;
    this.props.addTodo(txtTodo.value);
    txtTodo.value = '';
  }

  render() {
    return (
      <header className="header">
        <h1>todos</h1>
        <input className="new-todo" placeholder="What needs to be done?"
               ref={ref => this.txtTodo = ref}
               onKeyPress={e => this.pressEnter(e)}/>
      </header>
    );
  }
}