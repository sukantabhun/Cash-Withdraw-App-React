import './index.css'

const DenominationItem = props => {
  const {details, denominationReduce} = props
  const {value} = details
  const withdrawMoney = () => {
    denominationReduce(value)
  }
  return (
    <li>
      <button onClick={withdrawMoney} type="button" className="button">
        {value}
      </button>
    </li>
  )
}
export default DenominationItem
