import React, { Fragment } from 'react'
import MoreButton from '../components/MoreButton'
import Sushi from '../components/Sushi'


class SushiContainer extends React.Component {
  clickHandler = (event) => {
    console.log(this)
  }
  render() {
    return (
      <Fragment>
        <div className="belt">
          {this.props.fourSushis.map((sushi) => {
            return <Sushi key={sushi.id} sushi={sushi} eatSushi={this.props.eatSushi} money={this.props.money} plates={this.props.plates} />
          })}
          <MoreButton getFourSushi={this.props.getFourSushi} />
        </div>
      </Fragment>
    )
  }
}

export default SushiContainer