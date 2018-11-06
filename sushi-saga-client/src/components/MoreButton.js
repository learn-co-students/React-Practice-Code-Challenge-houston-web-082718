import React from "react";

const MoreButton = props => {
  console.log("==props=>", props);
  return <button onClick={props.onClickMoreButton}>More sushi!</button>;
};

export default MoreButton;
