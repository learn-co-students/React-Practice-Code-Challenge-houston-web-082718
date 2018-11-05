import React, { Fragment } from "react";

const Sushi = props => {
  return (
    <div className="sushi">
      <div className="plate" onClick={() => props.eatSushi(props.piece.id)}>
        {/* Tell me if this sushi has been eaten! */

        props.piece.eaten ? null : (
          <img
            src={props.piece.img_url}
            width="100%"
            alt={`sushi-${props.piece.id}`}
          />
        )}
      </div>
      <h4 className="sushi-details">
        {props.piece.name} - ${props.piece.price}
      </h4>
    </div>
  );
};

export default Sushi;
