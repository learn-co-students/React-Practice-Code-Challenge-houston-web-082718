import React, { Component } from 'react';
import SushiContainer from './containers/SushiContainer';
import Table from './containers/Table';
import './index.css'

// Endpoint!
const API = "http://localhost:3000/sushis"

class App extends Component {

  constructor() {
    super()
    this.state = {
      sushis: [],
      startIndex: 0,
      endIndex: 4,
      budget: 100,
      plates: []
    }
  }

  componentDidMount() {
    fetch(API)
    .then(response => response.json())
    .then(sushis => {
      sushis.map(sushi => {
        sushi["eaten"] = false
        return sushi
      })
      this.setState({sushis})
    })
  }

  handleClickEaten = (e) => {
    let sushi = this.state.sushis.find(sushi => sushi.id === parseInt(e.target.id, 10))

    if (this.state.budget - sushi.price >= 0) {
      const index = this.state.sushis.indexOf(sushi)
      if (!sushi.eaten) {
        sushi.eaten = true
      }

      let sushis = [...this.state.sushis]
      let plates = [...this.state.plates]
      let budget = this.state.budget

      budget = budget - sushi.price
      plates.push(sushis.splice(index, 1, sushi))
  
      this.setState({sushis, plates, budget})
    }
  }

  handleClickMore = () => {
    if (this.state.endIndex + 4 < this.state.sushis.length) {
      this.setState(state => {
        return {
          startIndex: state.startIndex + 4,
          endIndex: state.endIndex + 4
        }
      })
    }     
  }

  render() {
    return (
      <div className="app">
        <SushiContainer sushis={this.state.sushis.slice(this.state.startIndex, this.state.endIndex)} handleClickEaten={this.handleClickEaten} handleClickMore={this.handleClickMore} />
        <Table budget={this.state.budget} plates={this.state.plates}/>
      </div>
    );
  }
}

export default App;