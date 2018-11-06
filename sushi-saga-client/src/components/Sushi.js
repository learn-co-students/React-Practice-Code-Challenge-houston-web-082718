import React from 'react'

const Sushi = (props) => {
  return (
    <div className="sushi">
      <div className="plate">
        { props.eatenSushis.includes(props.sushi.id)
          ? <img src="" alt="" id={props.sushi.id} width="100%" onClick={props.clickSushi}/>
          : <img src={props.sushi.img_url} alt="" id={props.sushi.id} width="100%" onClick={props.clickSushi}/>
        }
      </div>
      <h4 className="sushi-details">
        {props.sushi.name} - ${props.sushi.price}
      </h4>
    </div>
  )
}

export default Sushi