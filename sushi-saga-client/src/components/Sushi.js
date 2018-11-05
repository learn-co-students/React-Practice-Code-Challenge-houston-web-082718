import React, { Fragment } from "react";

const Sushi = props => {
  const isEaten = props.eatenSushis.includes(props.sushi.id);

  return (
    <div className="sushi">
      <div
        className="plate"
        onClick={() => props.onSushiClick(props.sushi.id, props.sushi.price)}
      >
        {/* Tell me if this sushi has been eaten! */
        isEaten ? null : <img src={props.sushi.img_url} width="100%" />}
      </div>
      <h4 className="sushi-details">
        {props.sushi.name} - ${props.sushi.price}
      </h4>
    </div>
  );
};

export default Sushi;
