import React, {Component} from 'react';

export default class Footer extends Component {
  render() {
    return(
      <footer className="footer">
        <span className="todo-count">
          <strong></strong> items left
        </span>
        <ul className="filters">
          <li>
            <a className="selected">All</a>
          </li>
          <li>
            <a>Active</a>
          </li>
          <li>
            <a>Completed</a>
          </li>
        </ul>
      </footer>
    );
  }
}