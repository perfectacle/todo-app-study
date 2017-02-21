'use strict';
import React, {Component, PropTypes} from 'react';
import { Link } from 'react-router';
import {connect} from 'react-redux';
import ClassNames from 'classnames';

import TodoAction from '../actions/TodoAction';

const mapStateToProps = state => ({
  cntActivated: state.todos.reduce((p, c) => c.isCompleted ? p : ++p, 0),
  cntCompleted: state.todos.length - state.todos.reduce((p, c) => c.isCompleted ? p : ++p, 0)
});
const mapDispatchToProps = dispatch => ({
  delCompletedTodos: () => dispatch(TodoAction.delCompletedTodos())
});

class Footer extends Component {
  static propTypes = {
    cntActivated: PropTypes.number.isRequired,
    cntCompleted: PropTypes.number.isRequired,
    delCompletedTodos: PropTypes.func.isRequired,
    filter: PropTypes.string.isRequired
  };

  render() {
    const {cntActivated, cntCompleted, delCompletedTodos, filter} = this.props;
    return (
      <footer className="footer">
        <span className="todo-count">
          {cntActivated || 'no'} item{cntActivated > 1 ? 's' : ''} left
        </span>
        <ul className="filters">
          <li>
            <Link className={
              ClassNames({
                selected: filter === 'all'
              })} to="/">All</Link>
          </li>
          <li>
            <Link className={
              ClassNames({
                selected: filter === 'active'
              })} to="/active">Active</Link>
          </li>
          <li>
            <Link className={
              ClassNames({
                selected: filter === 'completed'
              })} to="/completed">Completed</Link>
          </li>
        </ul>
        <button className={
          ClassNames('clear-completed', {
            hidden: !cntCompleted
          })} onClick={() => delCompletedTodos()}>Clear Completed</button>
      </footer>
    );
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Footer);