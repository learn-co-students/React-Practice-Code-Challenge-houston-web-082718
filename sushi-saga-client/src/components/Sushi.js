import React, {Component} from 'react'

export default class Sushi extends Component {
    state = {
        clicked: false
    }

    handleClick = () => {
        this.setState({ clicked: !this.state.clicked })
        this.props.plateCount(this.props.sushi.price)
    }

    render() {
        const { sushi, walletValue } = this.props
        return (
            <div className="sushi">
                { walletValue - sushi.price >= 0
                ?   <div className="plate" onClick={this.handleClick}>
                        { !this.state.clicked
                            ? <img src={sushi.img_url} alt={sushi.name} width="100%"/>
                            : <div>Yum!!</div>
                        }
                    </div>
                :   "Broke ass hoe!"
                }

                <h4 className="sushi-details">
                    {sushi.name} - ${sushi.price}
                </h4>
            </div>
        )
    }
}
