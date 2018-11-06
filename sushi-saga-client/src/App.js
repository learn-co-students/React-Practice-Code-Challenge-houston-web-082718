import React, { Component } from 'react';
import SushiContainer from './containers/SushiContainer';
import Table from './containers/Table';

// Endpoint!
const API = "http://localhost:3000/sushis"

class App extends Component {
  state = {
    money: 100,
    addedMoney: 0,
    index: 0,
    sushis: [],
    four: [],
    eaten: []
  }
  
  
  componentDidMount() {
    fetch(API)
    .then(response => response.json())
    .then(sushis => this.setState({ sushis }))
    .then(this.fourSushis)
  }
  
  fourSushis = () => {
    let four = [];
    for (let i = this.state.index; i < this.state.index + 4; i++) {
      four.push(this.state.sushis[i]);
    }
    let newIndex = this.state.index + 4;

    if (this.state.index === 96) {
      this.setState({
        index: 0,
        four: four
      })
    } else {
      this.setState({
        index: newIndex,
        four: four
      })
    }
  }

  clickSushi = event => {
    const eatenSushi = this.state.sushis[event.target.id - 1]
    const price = eatenSushi.price;
    const newMoney = this.state.money - price;
    if (this.state.money >= price) {
      event.target.src = "";
      this.setState({
        money: newMoney,
        eaten: [...this.state.eaten, parseInt(event.target.id, 10)]
      });
    } else {
      alert("You can't afford that, plebe!")
    }
  }

  addFunds = event => {
    event.preventDefault();
    const money = this.state.money;
    const addedMoney = this.state.addedMoney
    this.setState({
      money: money + parseInt(addedMoney, 10)
    });
  }

  changeAddedAmount = event => {
    this.setState({
      addedMoney: event.target.value
    })
  }

  callWaiter = () => {
    this.setState({
      eaten: []
    })
  }

  render() {
    return (
      <div className="app">
        <SushiContainer
          sushis={this.state.four}
          fourSushis={this.fourSushis}
          clickSushi={this.clickSushi}
          eatenSushis={this.state.eaten}
        />
        <Table money={this.state.money} eaten={this.state.eaten} />
        <form className="remaining" onSubmit={this.addFunds}>
          <input onChange={this.changeAddedAmount} />
          <button>Add Funds to SushiWallet!</button>
        </form>
        <button className="remaining waiter" onClick={this.callWaiter}>Call Waiter</button>
      </div>
    );
  }
}

export default App;