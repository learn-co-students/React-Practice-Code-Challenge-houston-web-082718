import React, { Fragment } from "react";

class Sushi extends React.Component {
  state = {
    eaten: false
  };
  eaten = () => {
    if (this.props.money >= this.props.sushi.price) {
      this.setState({
        eaten: !this.state.eaten
      });
      this.props.eaten(this.props.sushi);
    } else {
      alert("No free meals!");
    }
  };
  render() {
    return (
      <div className="sushi">
        <div className="plate" onClick={this.eaten}>
          {!this.state.eaten ? (
            <img src={this.props.sushi.img_url} width="100%" />
          ) : null}
        </div>
        <h4 className="sushi-details">
          {this.props.sushi.name} - ${this.props.sushi.price}
        </h4>
      </div>
    );
  }
}

export default Sushi;
