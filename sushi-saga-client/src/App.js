import React, { Component } from "react";
import SushiContainer from "./containers/SushiContainer";
import Table from "./containers/Table";

// Endpoint!
const API = "http://localhost:3000/sushis";

class App extends Component {
  state = {
    sushis: [],
    sushiSet: [0, 1, 2, 3],
    availableSushi: [],
    tab: 100,
    eatenSushi: []
  };

  componentDidMount() {
    fetch(API)
      .then(resp => resp.json())
      .then(data => this.addEaten(data))
      .then(sushis => this.setState({ sushis }))
      .then(() => this.mapSushis());
  }

  addEaten = sushis => {
    sushis.forEach(piece => {
      piece.eaten = false;
    });
    return sushis;
  };

  mapSushis = () => {
    let currentSushis = [];
    this.state.sushiSet.forEach(i => {
      currentSushis.push(this.state.sushis[i]);
    });
    this.setState({ availableSushi: currentSushis });
    return currentSushis;
  };

  moreSushi = () => {
    let currentIndex = this.state.sushiSet[0];
    if (currentIndex + 4 >= this.state.sushis.length) {
      this.setState({ sushiSet: [0, 1, 2, 3] }, () => this.mapSushis());
    } else {
      let newSet = this.state.sushiSet.map(i => {
        return i + 4;
      });

      this.setState({ sushiSet: newSet }, () => this.mapSushis());
    }
  };

  eatSushi = id => {
    let foundSushi = this.state.sushis.find(sushi => {
      return sushi.id === id;
    });
    if (foundSushi.price <= this.state.tab) {
      foundSushi.eaten = true;
      let newEaten = [...this.state.eatenSushi, foundSushi];
      this.setState(state => {
        return {
          tab: state.tab - foundSushi.price,
          eatenSushi: newEaten
        };
      });
    }
    this.mapSushis();
  };

  render() {
    return (
      <div className="app">
        <SushiContainer
          sushi={this.state.availableSushi}
          moreSushi={this.moreSushi}
          eatSushi={this.eatSushi}
        />
        <Table tab={this.state.tab} eatenSushi={this.state.eatenSushi} />
      </div>
    );
  }
}

export default App;
