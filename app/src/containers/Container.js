'use strict';
import React, {Component} from 'react';
import { browserHistory } from 'react-router';

import Header from '../components/Header';
import Todos from '../components/Todos';
import Footer from '../components/Footer';

class Container extends Component {
  componentWillMount() {
    const filter = this.props.routeParams.filter || 'all';
    const arrFilter = ['all', 'active', 'completed'];
    if(!arrFilter.some(v => v === filter)) browserHistory.push('/');
  }

  render() {
    const filter = this.props.routeParams.filter || 'all';
    return(
      <section className="todoapp">
        <Header />
        <Todos filter={filter}/>
        <Footer filter={filter}/>
      </section>
    );
  }
}

export default Container;