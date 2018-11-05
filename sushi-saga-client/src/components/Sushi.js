import React, { Fragment } from 'react'

const Sushi = (props) => {
  const isEaten = props.eatenSushis.find(sushi => {
    return sushi.id === props.sushi.id
  })
  return (
    <Fragment>
    <div className="sushi">
      <div className="plate" 
            onClick={ () => props.eatSushi(props.sushi) }>
        { 
          
          isEaten ?
            null
          :
            <img src={props.sushi.img_url} alt='' width="100%" />
        }
      </div>
      <h4 className="sushi-details">
        {props.sushi.name} - ${props.sushi.price}
      </h4>
    </div>
    </Fragment>
  )
}

export default Sushi