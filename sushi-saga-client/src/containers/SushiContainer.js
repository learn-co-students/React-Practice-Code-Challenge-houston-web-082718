import React, { Fragment } from "react";
import MoreButton from "../components/MoreButton";
import Sushi from "../components/Sushi";

const SushiContainer = props => {
  console.log("==props=>", props);
  const {
    sushiList,
    indexIncrement,
    onClickMoreButton,
    eatenSushiId,
    onClickSushi
  } = props;

  return (
    <Fragment>
      <div className="belt">
        {sushiList.slice(indexIncrement, indexIncrement + 4).map(sushi => (
          <Sushi
            key={sushi.id}
            {...sushi}
            eatenSushiId={eatenSushiId}
            onClickSushi={onClickSushi}
          />
        ))}
        <MoreButton onClickMoreButton={onClickMoreButton} />
      </div>
    </Fragment>
  );
};

export default SushiContainer;
