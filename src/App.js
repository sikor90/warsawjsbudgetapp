import React, { Component } from 'react';

import {
  HelloStateless, HelloStateful, Counter, TransactionCard
} from './components';

import logo from './logo.svg';
import './App.css';

class App extends Component {
  state = {
    transactions: [
      {
        id: 1,
        description: 'Potwierdzenie uczestnictwa w warsztatach WarsawJS',
        value: 20,
        date: '16.09.2017',
        category: 'Edukacja'
      },
      {
        id: 2,
        description: 'Bilet na pociąg',
        value: 120,
        date: '07.09.2017',
        category: 'Transport'
      },
      {
        id: 3,
        description: 'Części do samochodu',
        value: 430,
        date: '26.08.2017',
        category: 'Samochód'
      }
    ]
  }
  render() {
    const { transactions } = this.state;
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Welcome to React</h1>
        </header>
        <p className="App-intro">
          To get started, edit <code>src/App.js</code> and save to reload.
        </p>
        <HelloStateful name="Bartek"/>
        <HelloStateless name="Bartek"/>
        <Counter />
        <TransactionCard item={transactions[2]} />
      </div>
    );
  }
}

export default App;
