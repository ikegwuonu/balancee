const CashoutOptions = ({ onCashout }) => {
    return(
    <div className="cashout-options">
      <h2>Cashout Options</h2>
      <button onClick={() => onCashout('direct')}>Direct Cashout</button>
      <button onClick={() => onCashout('promoCode')}>Convert to Promo Code</button>
    </div>
  )};
  export default CashoutOptions
  