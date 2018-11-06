import React, { Component } from "react";

class SushiWallet extends Component {
  handleSubmit = e => {
    e.preventDefault();
    const data = new FormData(e.target);

    console.log(data.get("money"));
    this.props.onSubmitForm(data.get("money"));
  };
  render() {
    console.log(this.props);
    return (
      <div className="wallet">
        <form onSubmit={this.handleSubmit}>
          Add money: <input type="number" name="money" />
          <button>Submit</button>
        </form>
      </div>
    );
  }
}
export default SushiWallet;
