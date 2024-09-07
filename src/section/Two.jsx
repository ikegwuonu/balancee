import React from 'react'
import { category, dollar, Group, logo, wallet } from '../assets'
import Card from '../components/Card'
import { mockTransactions } from '../data'
import { TbAB } from 'react-icons/tb'

const Two = () => {
  return (
    <section className='two'>
      <div className="head">
        <img src={logo} alt="logo" />
        <p >Track your online transactions here</p>
      </div>
      <div className='card'>
        <Card imgURL={wallet} text="Total Transaction" amount={145332.45} colour="active" />
        <Card imgURL={dollar} text="Total Cashback" amount={8532.45} colour="notactive-card" />
        <Card imgURL={dollar} text="Cash spent" amount={592.45} colour="notactive-card" />
        
      </div>
      <div className="transactions">
        <h3>Transaction History</h3>
        <div className='transaction heading'>
          <p>Name</p>
          <p>Booking Id</p>
          <p>Service</p>
          <p>Date</p>
          <p>Status</p>
          <p>Cost</p>

        </div>
        {mockTransactions.map((transaction,index)=>(
          <div key={index} className='transaction'>
            <p>{transaction.mechanic}</p>
            <p>{transaction.bookingDetails}</p>
            <p>{transaction.service}</p>
            <p>{transaction.date}</p>
            <p>{transaction.status}</p>
            <p>{transaction.amount}</p>
          </div>
        ))}
      </div>
    </section>
  )
}

export default Two