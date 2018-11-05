import React, {Fragment, Component} from 'react'
import MoreButton from '../components/MoreButton'
import Sushi from '../components/Sushi'

export default class SushiContainer extends Component {

    render() {
        const {sushis, plateCount, handleMore, walletValue} = this.props
        return (<Fragment>
            <div className="belt">
                {sushis.map(sushi => <Sushi key={sushi.id} sushi={sushi} plateCount={plateCount} walletValue={walletValue}/>)}
                <MoreButton handleMore={handleMore}/>
            </div>

        </Fragment>)
    }
}
