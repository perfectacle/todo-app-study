'use strict';
import React, {Component} from 'react';
import {connect} from 'react-redux';

import Header from '../components/Header';
import Todos from '../components/Todos';
import Footer from '../components/Footer';

class Container extends Component {
  render() {
    return(
      <section className="todoapp">
        <Header />
        <Todos />
        <Footer />
      </section>
    );
  }
}

export default Container;