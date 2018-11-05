import React, { Component } from 'react';
import SushiContainer from './containers/SushiContainer';
import Table from './containers/Table';

// Endpoint!
const API = "http://localhost:3000/sushis"

class App extends Component {
  state = {
    sushis: [],
    fourSushis: [],
    money: 100,
    plates: [],
    amount: 0
  }

  componentDidMount() {
    fetch(API)
      .then(resp => resp.json())
      .then(sushiData => {
        this.setState({
          sushis: sushiData,
          fourSushis: sushiData.splice(Math.floor((Math.random() * (sushiData.length - 4)) + 1), 4)
        })
      })
  }

  getFourSushi = () => {
    this.setState({
      fourSushis: this.state.sushis.splice(Math.floor((Math.random() * (this.state.sushis.length - 4)) + 1), 4)
    })
  }

  eatSushi = (theSushi) => {
    let cost = theSushi.props.sushi.price
    let wallet = this.state.money
    this.setState({
      money: wallet - cost
    })
  }

  sushiFundHandler = (event) => {
    event.preventDefault()
    let wallet = this.state.money
    let addToWallet = this.state.amount
    this.setState({
      money: parseInt(wallet) + parseInt(addToWallet)
    })
  }

  handleChange = (e) => {
    this.setState({ amount: e.target.value })
  }

  render() {
    return (
      <div className="app">
        <SushiContainer sushis={this.state.sushis} fourSushis={this.state.fourSushis} getFourSushi={this.getFourSushi} eatSushi={this.eatSushi} money={this.state.money} plates={this.state.plates} />
        <Table money={this.state.money} plates={this.state.plates} />
        <form class="remaining" onSubmit={this.sushiFundHandler}>
          <input value={this.state.amount} onChange={this.handleChange} />
          <button>add to sushi fund</button>
        </form>
      </div>
    );
  }
}

export default App;