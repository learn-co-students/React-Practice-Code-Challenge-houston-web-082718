import React, { Fragment } from "react";
import Sushi from "../components/Sushi";
import MoreButton from "../components/MoreButton";

const SushiContainer = props => {
  return (
    <Fragment>
      <div className="belt">
        {props.sushis
          .slice(props.startIndex, props.startIndex + 4)
          .map(sushi => {
            return (
              <Sushi
                key={sushi.id}
                sushi={sushi}
                onSushiClick={props.onSushiClick}
                eatenSushis={props.eatenSushis}
              />
            );
          })}
        <MoreButton onMoreButtonClick={props.onMoreButtonClick} />
      </div>
    </Fragment>
  );
};

export default SushiContainer;
