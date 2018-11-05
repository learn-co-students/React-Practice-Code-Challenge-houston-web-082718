import React, {Fragment} from 'react'

const Table = (props) => {

    const renderPlates = (array) => {
        return (array.map((x, index) => {
            return <div key={Math.random(array.length)} className="empty-plate" style={{top: -7 * index}}/>
        })
    )}

    return (<Fragment>
        <h1 className="remaining">
            { props.walletValue > 0
                ? `You have: ${props.walletValue} remaining!`
                : "You're out of money!"
            }
        </h1>
        <div className="table">
            <div className="stack">
                {renderPlates(props.array)}
            </div>
        </div>
    </Fragment>)
}

export default Table
