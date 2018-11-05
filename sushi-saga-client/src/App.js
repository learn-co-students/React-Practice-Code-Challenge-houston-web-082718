import React, { Component } from 'react';
import SushiContainer from './containers/SushiContainer';
import Table from './containers/Table';

// Endpoint!
const API = "http://localhost:3000/sushis"

class App extends Component {
  state = {
    sushi: [],
    cashLeft: 100
  }

  componentDidMount() {
    fetch(API)
    .then(r => r.json())
    .then(sushi => this.setState({ sushi }))
  }

  updateSushi = () => {
    this.setState({ sushi: this.state.sushi })
  }

  render() {
    return (
      <div className="app">
        <SushiContainer sushi={this.state.sushi.splice(0, 4)} updateSushi={this.updateSushi} />
        <Table cash={this.state.cashLeft} />
      </div>
    );
  }
}

export default App;