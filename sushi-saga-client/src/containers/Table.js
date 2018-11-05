import React, { Fragment } from "react";

const Table = props => {
  const renderPlates = array => {
    return array.length > 0
      ? array.map((x, index) => {
          return (
            <div
              key={x.id}
              className="empty-plate"
              style={{ top: -7 * index }}
            />
          );
        })
      : null;
  };

  return (
    <Fragment>
      <h1 className="remaining">You have: ${props.tab} remaining!</h1>
      <div className="table">
        <div className="stack">
          {/* 
               renderPlates takes an array 
               and renders an empty plate
               for every element in the array
            */
          renderPlates(props.eatenSushi)}
        </div>
      </div>
    </Fragment>
  );
};

export default Table;
