'use strict';
import React, {Component} from 'react';

class Footer extends Component {
  render() {
    return (
      <footer className="footer">
        <span className="todo-count">
          item left
        </span>
        <ul className="filters">
          <li>
            <a>All</a>
          </li>
          <li>
            <a>Active</a>
          </li>
          <li>
            <a>Completed</a>
          </li>
        </ul>
        <button className="hidden">Clear Completed</button>
      </footer>
    );
  }
}

export default Footer;