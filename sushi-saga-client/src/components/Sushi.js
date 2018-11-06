import React, { Fragment } from "react";

const Sushi = props => {
  const { id, name, price, img_url, eatenSushiId, onClickSushi } = props;

  const isEaten = eatenSushiId.includes(id);
  return (
    <Fragment>
      <div className="sushi">
        <div className="plate" onClick={() => onClickSushi(id, price)}>
          {isEaten ? null : <img src={img_url} width="100%" alt="" />}
        </div>
        <h4 className="sushi-details">
          {name} - ${price}
        </h4>
      </div>
    </Fragment>
  );
};

export default Sushi;
