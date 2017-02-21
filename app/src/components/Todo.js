'use strict';
import React, {Component, PropTypes} from 'react';

class Todo extends Component {
  static propTypes = {
    id: PropTypes.number.isRequired,
    txt: PropTypes.string.isRequired,
    isCompleted: PropTypes.bool.isRequired
  };

  render() {
    const {txt} = this.props;
    return (
      <li>
        <div className="view">
          <input className="toggle" type="checkbox" />
          <label>{txt}</label>
          <button className="destroy" />
        </div>
        <input className="edit" />
      </li>
    );
  }
}

export default Todo;