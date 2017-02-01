import React from 'react';
export default class Test extends React.Component{
  constructor() {
    super();
    this.state = {
      isToggle: false
    }
  }

  handleClick() {
    this.setState({
      isToggle: !this.state.isToggle
    });
  }

  render() {
    const {isToggle} = this.state;
    return(
      <h1 style={{color: isToggle ? '#f00' : '#00f'}} onClick={this.handleClick.bind(this)}>hello</h1>
    );
  }
}