import React from 'react'

class MoreButton extends React.Component {
  render() {
    return (
      <button onClick={this.props.getFourSushi}>
        More sushi!
      </button>
    )
  }
}

export default MoreButton