import React, {Component, PropTypes} from 'react';
import ClassNames from 'classnames';

export default class Footer extends Component {
  static propTypes = {
    filter: PropTypes.string.isRequired,
    cntActivated: PropTypes.number.isRequired,
    cntCompleted: PropTypes.number.isRequired,
    delCompletedTodos: PropTypes.func.isRequired,
    changeFilter: PropTypes.func.isRequired
  };

  render() {
    const {filter, cntActivated, cntCompleted, delCompletedTodos, changeFilter} = this.props;
    return (
      <footer className="footer">
        <span className="todo-count">
          {cntActivated || 'no'} item{cntActivated > 1 ? 's' : ''} left
        </span>
        <ul className="filters">
          <li>
            <a className={
              ClassNames({
                selected: filter === 'All'
              })}
               onClick={() => changeFilter('All')}>All</a>
          </li>
          <li>
            <a className={
              ClassNames({
                selected: filter === 'Active'
              })}
               onClick={() => changeFilter('Active')}>Active</a>
          </li>
          <li>
            <a className={
              ClassNames({
                selected: filter === 'Completed'
              })}
               onClick={() => changeFilter('Completed')}>Completed</a>
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