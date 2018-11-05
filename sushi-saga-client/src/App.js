import React, { Component } from 'react';
import SushiContainer from './containers/SushiContainer';
import Table from './containers/Table';

// Endpoint!
const API = "http://localhost:3000/sushis"

class App extends Component {
  state = {
    money: 100,
    sushis: [],
    four: [],
    eaten: [],
    index: 0
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
    this.setState({
      index: newIndex,
      four: four
    })
  }

  clickSushi = event => {
    const eatenSushi = this.state.sushis[event.target.id - 1]
    const price = eatenSushi.price;
    if (this.state.money > price) {
      event.target.src = "";
      let newMoney = this.state.money - price;
      let newEaten = [];
      newEaten.push(eatenSushi)
      this.setState({
        money: newMoney,
        eaten: [...this.state.eaten, newEaten]
      });
    } else {
      alert("You can't afford that, plebe!")
    }
  }

  render() {
    return (
      <div className="app">
        <SushiContainer sushis={this.state.four} fourSushis={this.fourSushis} clickSushi={this.clickSushi}/>
        <Table money={this.state.money} eaten={this.state.eaten} />
      </div>
    );
  }
}

export default App;