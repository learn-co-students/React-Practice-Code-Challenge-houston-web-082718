import React, {Component} from 'react';
import SushiContainer from './containers/SushiContainer';
import Table from './containers/Table';

// Endpoint!
const API = "http://localhost:3000/sushis"

class App extends Component {

    state = {
        sushis: {},
        fourSushis: [],
        plateCount: [],
        walletValue: 100
    }

    componentDidMount() {
        fetch(API)
        .then(r=> r.json())
        .then(r=> this.setState({ sushis: r }))
        .then(r=> this.grabFour())
    }

    grabFour = () => {
        const shuffled = Object.values(this.state.sushis).sort(() => .5 - Math.random())
        const fourSushis = shuffled.splice(0,4)
        this.setState({ fourSushis })
    }

    plateCount = (n) => {
        this.setState({
            plateCount: [...this.state.plateCount, n],
            walletValue: this.state.walletValue - n
        })
    }

    handleMore = () => {
        this.grabFour()
    }

    render() {
        const { plateCount, walletValue, fourSushis } = this.state
        return (
            <div className="app">
                <SushiContainer sushis={fourSushis} plateCount={this.plateCount} handleMore={this.handleMore} walletValue={walletValue}/>
                <Table array={plateCount} walletValue={walletValue}/>
            </div>
        );
    }
}

export default App;
