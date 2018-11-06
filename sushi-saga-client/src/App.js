import React, { Component } from "react";
import SushiContainer from "./containers/SushiContainer";
import Table from "./containers/Table";
import SushiWallet from "./components/SushiWallet";

// Endpoint!
const API = "http://localhost:3000/sushis";

class App extends Component {
  state = {
    sushiList: [],
    indexIncrement: 0,
    eatenSushiId: [],
    moneyBalance: 100
  };
  componentDidMount() {
    fetch(API)
      .then(resp => resp.json())
      .then(data => this.setState({ sushiList: data }));
  }

  onClickMoreButton = () => {
    const increment = this.state.indexIncrement;
    if (increment < 96) {
      this.setState({ indexIncrement: increment + 4 });
    } else {
      // cycle back to begining of the sushi belt
      this.setState({ indexIncrement: 0 });
    }
  };

  onClickSushi = (id, price) => {
    const remainBalance = this.state.moneyBalance - price;
    if (
      this.state.moneyBalance >= price &&
      !this.state.eatenSushiId.includes(id)
    ) {
      this.setState({
        eatenSushiId: [...this.state.eatenSushiId, id],
        moneyBalance: remainBalance
      });
    }
  };

  onSubmitForm = newMoney => {
    const updateMoney = this.state.moneyBalance + parseInt(newMoney, 10);
    this.setState({ moneyBalance: updateMoney });
  };

  render() {
    console.log("==App.state==", this.state);
    return (
      <div className="app">
        <SushiContainer
          sushiList={this.state.sushiList}
          onClickMoreButton={this.onClickMoreButton}
          indexIncrement={this.state.indexIncrement}
          onClickSushi={this.onClickSushi}
          eatenSushiId={this.state.eatenSushiId}
        />
        <Table
          eatenSushiId={this.state.eatenSushiId}
          moneyBalance={this.state.moneyBalance}
        />
        <SushiWallet onSubmitForm={this.onSubmitForm} />
      </div>
    );
  }
}

export default App;
