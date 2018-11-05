import React, { Fragment } from 'react'
import MoreButton from '../components/MoreButton'
import Sushi from '../components/Sushi'

const SushiContainer = ({ sushis, handleClickEaten, handleClickMore }) => {
  return (
    <Fragment>
      <div className="belt">
        {
          sushis.map(sushi => <Sushi key={sushi.id} sushi={sushi} handleClickEaten={handleClickEaten} />)
        }
        <MoreButton handleClickMore={handleClickMore} />
      </div>
    </Fragment>
  )
}

export default SushiContainer