import React from 'react'

const Sushi = ({ sushi, handleClickEaten }) => {
  return (
    <div className="sushi">
      <div className="plate" 
           onClick={/* Give me a callback! */ null}>
        { 
          /* Tell me if this sushi has been eaten! */ 
          sushi.eaten ?
            null
          :
            <img id={sushi.id} src={sushi.img_url} alt="" width="100%" onClick={handleClickEaten} />
        }
      </div>
      <h4 className="sushi-details">
        {sushi.name} - ${sushi.price}
      </h4>
    </div>
  )
}

export default Sushi