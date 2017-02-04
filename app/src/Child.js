import React, {Component, PropTypes} from 'react';

export default class Child extends Component {
  constructor() {
    super();
    this.state = {
      toggleColor: false
    };
  }

  componentWillMount() {
    console.log('1. 컴포넌트가 마운트 될 예정입니다.');
  }

  componentDidMount() {
    console.log('2. 컴포넌트가 마운트 되었습니다.');
  }

  componentWillReceiveProps(nextProps) {
    console.log('3. 컴포넌트가 새로운 props를 받을 예정입니다 : ', nextProps);
  }

  shouldComponentUpdate(nextProps, nextState) {
    console.log('4. 컴포넌트를 업데이트할지 결정합니다 : ', nextProps, nextState);
    const shouldUpdate = confirm('업데이트 할까요?');
    return !!shouldUpdate;
  }

  componentWillUpdate(nextProps, nextState) {
    console.log('5. 컴포넌트가 업데이트 될 예정입니다. : ', nextProps, nextState);
  }

  componentDidUpdate(prevProps, prevState) {
    console.log('6. 컴포넌트가 업데이트 되었습니다: ', prevProps, prevState);
  }

  componentWillUnmount() {
    console.log('7. 컴포넌트가 언마운트 될 예정입니다.');
  }

  bgToggle() {
    this.setState({
      toggleColor: !this.state.toggleColor
    });
  }

  render() {
    const toggleColor =  this.state.toggleColor;
    const list = this.props.list.map((v, i) => (
      <li key={i}>{v}</li>
    ));
    console.log('[[렌더 메소드가 호출됐습니다.]]');
    return(
      <div>
        <ul style={{
          backgroundColor: toggleColor ? '#00f' : '#f00'
        }}>{list}</ul>
        <button onClick={() => this.bgToggle()}>색상 변경</button>
      </div>
    );
  }
}