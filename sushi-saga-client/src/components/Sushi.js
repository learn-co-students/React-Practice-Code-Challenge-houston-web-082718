import React, { Fragment } from 'react'

class Sushi extends React.Component {
  state = {
    eaten: false
  }

  sushiEaten = () => {
    if (this.props.money >= this.props.sushi.price) {
      this.setState({
        eaten: true
      })
      this.props.eatSushi(this)
      this.props.plates.push(this)
    }
  }

  render() {
    return (
      <div className="sushi">
        <div className="plate"
          onClick={this.sushiEaten}>
          {this.state.eaten === true ? null : <img src={this.props.sushi.img_url} width="100%" />}
        </div>
        <h4 className="sushi-details">
          {this.props.sushi.name} - ${this.props.sushi.price}
        </h4>
      </div>
    )
  }
}

export default Sushi