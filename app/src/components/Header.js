'use strict';
import React, {Component, PropTypes} from 'react';
import {connect} from 'react-redux';

import TodoAction from '../actions/TodoAction';

const mapDispatchToProps = dispatch => ({
  addTodo: txt => dispatch(TodoAction.addTodo(txt))
});

@connect(null, mapDispatchToProps)
export default class Header extends Component {
  static propTypes = {
    addTodo: PropTypes.func.isRequired
  };

  componentDidMount() {
    this.txtTodo.focus();
  }

  render() {
    const {addTodo} = this.props;
    return (
      <header className="header">
        <h1>todos</h1>
        <input className="new-todo" placeholder="What needs to be done?"
               ref={ref => this.txtTodo = ref}
               onKeyPress={e => {
                 if(e.nativeEvent.keyCode !== 13) return;
                 const txtTodo = this.txtTodo;
                 addTodo(txtTodo.value);
                 txtTodo.value = '';
               }}/>
      </header>
    );
  }
}