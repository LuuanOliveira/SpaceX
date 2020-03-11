import React, { Component } from 'react';
import { Route } from 'react-router';
import { Layout } from './components/Layout';
import { Capsulas } from './components/Capsulas';
import { CapsulasPast } from './components/CapsulasPast';
import { CapsulasFuture } from './components/CapsulasFuture';
import { CapsulasNext } from './components/CapsulasNext';
import { CapsulasLast } from './components/CapsulasLast';

import './custom.css'

export default class App extends Component {
  static displayName = App.name;

  render () {
    return (
      <Layout>
            <Route path='/Capsulas' component={Capsulas} />
            <Route path='/CapsulasPast' component={CapsulasPast} />
            <Route path='/CapsulasFuture' component={CapsulasFuture} />
            <Route path='/CapsulasNext' component={CapsulasNext} />
            <Route path='/CapsulasLast' component={CapsulasLast} />
      </Layout>
    );
  }
}
