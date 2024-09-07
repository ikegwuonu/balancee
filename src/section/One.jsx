import React from 'react'
import { cards, category, login, message, setting, tenx } from '../assets'

const One = () => {
  return (
    <section className='one'>
        <h4>Welcome, Juliet</h4>
        <div className='menu'>
            <img src={category} alt="" />
            <p>Record Summary</p>
        </div>
        <div className='menu'>
            <img src={cards} alt="" />
            <p>Analytics</p>
        </div>
        <div className='menu'>
            <img src={message} alt="" />
            <p>News</p>
        </div>
        <div className='menu'>
            <img src={tenx} alt="" />
            <p>E-pay</p>
        </div>
        <div className='center'>
            <p>GENERAL</p>
        <div className='menu'>
            <img src={setting} alt="" />
            <p>Settings</p>
        </div>
        <div className='menu'>
            <img src={login} alt="" />
            <p>Log-out</p>
        </div>
        </div>
    </section>
  )
}

export default One