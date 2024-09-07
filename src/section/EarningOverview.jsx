const EarningsOverview = ({ totalCashback, currentBalance }) => {
    return(
    <div className="earnings-overview">
      <h2>Earnings Overview</h2>
      <p>Total Cashback Earned: ${totalCashback}</p>
      <p>Current Balance: ${currentBalance}</p>
    </div>
  )};

  export default EarningsOverview