import React, { Fragment } from "react";
import MoreButton from "../components/MoreButton";
import Sushi from "../components/Sushi";

const SushiContainer = ({ smallSample, sushis, eaten, money }) => {
  return (
    <Fragment>
      <div className="belt">
        {sushis.map(sushi => {
          return (
            <Sushi money={money} eaten={eaten} key={sushi.id} sushi={sushi} />
          );
        })}

        <MoreButton smallSample={smallSample} />
      </div>
    </Fragment>
  );
};

export default SushiContainer;
