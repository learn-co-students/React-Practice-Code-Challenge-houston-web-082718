import React, { Component } from "react";
import SushiContainer from "./containers/SushiContainer";
import Table from "./containers/Table";

// Endpoint!
const API = "http://localhost:3000/sushis";

class App extends Component {
  state = {
    sushiList: [],
    startIndex: 0,
    eatenSushis: [],
    money: 75
  };

  componentDidMount() {
    fetch(API)
      .then(r => r.json())
      .then(r => {
        this.setState({
          sushiList: r
        });
      });
  }

  onMoreButtonClick = () => {
    this.setState({
      startIndex: this.state.startIndex + 4
    });
  };

  onSushiClick = (id, price) => {
    const newMoney = this.state.money - price;
    if (newMoney >= 0) {
      this.setState({
        eatenSushis: [...this.state.eatenSushis, id],
        money: newMoney
      });
    }
  };

  render() {
    return (
      <div className="app">
        <SushiContainer
          sushis={this.state.sushiList}
          startIndex={this.state.startIndex}
          onMoreButtonClick={this.onMoreButtonClick}
          onSushiClick={this.onSushiClick}
          eatenSushis={this.state.eatenSushis}
        />
        <Table eatenSushis={this.state.eatenSushis} money={this.state.money} />
      </div>
    );
  }
}

export default App;
