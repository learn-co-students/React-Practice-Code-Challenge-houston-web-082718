import React, { Component } from 'react';
import SushiContainer from './containers/SushiContainer';
import Table from './containers/Table';

// Endpoint!
const API = "http://localhost:3000/sushis"

class App extends Component {
  state = {
    sushi: [],
    eatenSushis: [],
    cashLeft: 100,
    startIdx: 0,
    endIdx: 4
  }

  componentDidMount() {
    fetch(API)
    .then(r => r.json())
    .then(sushi => this.setState({ sushi }))
  }

  updateSushi = () => {
    if (this.state.startIdx < 96) {
      this.setState({ startIdx: this.state.startIdx + 4,
        endIdx: this.state.endIdx + 4 })
    } else {
        this.setState({ startIdx: 0,
          endIdx: 4 })
    } 
  }

  hasBeenEaten = (sushi) => {
    const findSushi = [...this.state.eatenSushis].find(s => s.id === sushi.id)
    return findSushi 
  }

  eatSushi = (sushi) => {
    if (this.state.cashLeft > sushi.price && !this.hasBeenEaten(sushi)) {
      this.setState({ eatenSushis: [...this.state.eatenSushis, sushi],
        cashLeft: this.state.cashLeft - sushi.price })
    } else if(this.hasBeenEaten(sushi)) {
      alert('You have already ate this sushi.')
    }
    else {
      alert('Sorry, you do not have enough $$ for that!')
    }
  }

  render() {
    return (
      <div className="app">
        <SushiContainer sushi={this.state.sushi.slice(this.state.startIdx, this.state.endIdx)} updateSushi={this.updateSushi} eatenSushis={this.state.eatenSushis} eatSushi={this.eatSushi} />
        <Table cash={this.state.cashLeft} plates={this.state.eatenSushis} />
      </div>
    );
  }
}

export default App;