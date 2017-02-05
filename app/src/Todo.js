import React, {Component} from 'react';

export default class Todo extends Component {
  render() {
    return(
      <li>
        <div className="view">
          <input className="toggle" type="checkbox" />
          <label>qwer</label>
          <button className="destroy"></button>
        </div>
      </li>
    );
  }
}