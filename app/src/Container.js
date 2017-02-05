import React, {Component} from 'react';
import Header from './Header';
import Todos from './Todos';
import Footer from './Footer';

export default class Container extends Component {
  render() {
    return(
      <section className="todoapp">
        <Header/>
        <Todos/>
        <Footer/>
      </section>
    );
  }
}