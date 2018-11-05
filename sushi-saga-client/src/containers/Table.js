import React, { Fragment } from "react";

const Table = ({ money, Plates, deposit }) => {
  const renderPlates = array => {
    return array.map((x, index) => {
      return <div className="empty-plate" style={{ top: -7 * index }} />;
    });
  };

  return (
    <Fragment>
      <h1 className="remaining">You have: ${money} remaining!</h1>
      <div className="table">
        <div className="stack">{renderPlates(Plates)}</div>
        <button onClick={deposit}> Deposit $100</button>
      </div>
    </Fragment>
  );
};

export default Table;
