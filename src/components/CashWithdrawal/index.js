import {Component} from 'react'
import DenominationItem from '../DenominationItem'
import './index.css'

class CashWithDrawal extends Component {
  state = {balance: 2000}

  getFirstCharOfName = name => name.slice(0, 1)

  denominationReduce = value => {
    this.setState(prevState => ({balance: prevState.balance - value}))
  }

  render() {
    const {denominationsList} = this.props
    const {balance} = this.state
    const name = 'Sarah Williams'

    return (
      <div className="container">
        <div className="element-container">
          <div className="user-details-container">
            <div className="name-icon">{this.getFirstCharOfName(name)}</div>
            <h1>{name}</h1>
          </div>
          <div className="money-container">
            <p>Your Balance</p>
            <div>
              <p className="balance">{balance}</p>
              <p className="small-text">In Rupees</p>
            </div>
          </div>
          <p className="Withdraw">Withdraw</p>
          <p>CHOOSE SUM (IN RUPEES)</p>
          <ul type="none">
            {denominationsList.map(eachDenomination => (
              <DenominationItem
                key={eachDenomination.id}
                details={eachDenomination}
                denominationReduce={this.denominationReduce}
              />
            ))}
          </ul>
        </div>
      </div>
    )
  }
}

export default CashWithDrawal
