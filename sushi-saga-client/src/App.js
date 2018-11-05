import React, { Component } from "react";
import SushiContainer from "./containers/SushiContainer";
import Table from "./containers/Table";

// Endpoint!
const API = "http://localhost:3000/sushis";

class App extends Component {
  state = {
    allSushi: [],
    avlSushi: [],
    eaten: false,
    money: 0,
    renderPlates: []
  };
  componentDidMount() {
    fetch(API)
      .then(resp => resp.json())
      .then(data => {
        this.setState({
          allSushi: data
        });
      });
  }
  thing = array => {
    return array[Math.floor(Math.random() * array.length)];
  };

  smallSample = () => {
    this.setState(
      {
        avlSushi: []
      },
      () => {
        this.state.avlSushi.push(this.thing(this.state.allSushi)),
          this.state.avlSushi.push(this.thing(this.state.allSushi)),
          this.state.avlSushi.push(this.thing(this.state.allSushi)),
          this.state.avlSushi.push(this.thing(this.state.allSushi));
        this.setState(
          {
            avlSushi: this.state.avlSushi
          },
          () => console.log(this.state.avlSushi)
        );
      }
    );
  };

  eaten = obj => {
    this.setState({
      money: this.state.money - obj.price
    });
    this.state.renderPlates.push(1);
    fetch(`http://localhost:3000/sushis/${obj.id}`, {
      method: "DELETE"
    }).then(response => response.json());
  };
  deposit = () => {
    this.setState({
      money: this.state.money + 100
    });
  };

  render() {
    console.log(this.state.avlSushi);
    return (
      <div className="app">
        <SushiContainer
          money={this.state.money}
          eaten={this.eaten}
          smallSample={this.smallSample}
          sushis={this.state.avlSushi}
        />

        <Table
          money={this.state.money}
          Plates={this.state.renderPlates}
          deposit={this.deposit}
        />
      </div>
    );
  }
}

export default App;

// return fetch(url + '/' + item, {
//   method: 'delete'
// })
// .then(response => response.json());
// }
