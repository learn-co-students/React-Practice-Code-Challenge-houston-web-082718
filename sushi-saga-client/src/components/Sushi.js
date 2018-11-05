import React, { Fragment, Component } from 'react'

class Sushi extends Component {
  state = {
    eaten: false
  }

  render() {
    return (
      <Fragment>
      <div className="sushi">
        <div className="plate" 
             onClick={ () => { this.setState({ eaten: !this.state.eaten })} }>
          { 
            
            this.state.eaten ?
              null
            :
              <img src={this.props.sushi.img_url} alt='' width="100%" />
          }
        </div>
        <h4 className="sushi-details">
          {this.props.sushi.name} - ${this.props.sushi.price}
        </h4>
      </div>
      </Fragment>
    )
  }
}

export default Sushi