import React, { Fragment } from 'react'

const renderPlates = (array) => {
  return array.map((x, index) => {
    return <div className="empty-plate" style={{ top: -7 * index }} />
  })
}

class Table extends React.Component {
  render() {
    return (
      <Fragment>
        <h1 className="remaining">
          You have: ${this.props.money} remaining!
        </h1>
        <div className="table">
          <div className="stack">
            {
              /* 
                renderPlates takes an array 
                and renders an empty plate
                for every element in the array
              */
              renderPlates(this.props.plates)
            }
          </div>
        </div>
      </Fragment>
    )
  }
}

export default Table