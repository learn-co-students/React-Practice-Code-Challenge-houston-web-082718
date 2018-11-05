import React, { Fragment } from 'react'
import MoreButton from '../components/MoreButton'
import Sushi from '../components/Sushi'

const SushiContainer = (props) => {
  return (
    <Fragment>
      <div className="belt">
        {props.sushis.map(sushi => {
          return <Sushi 
            key={sushi.id}
            sushi={sushi}
            clickSushi={props.clickSushi}
            eatenSushis={props.eatenSushis}
          />
        })}
        <MoreButton sushi={props.sushi} moreSushi={props.fourSushis} />
      </div>
    </Fragment>
  )
}

export default SushiContainer