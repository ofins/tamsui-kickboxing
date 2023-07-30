import React from 'react'
import '../styles/Price.css'
import priceData from '../data/price'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCheck } from '@fortawesome/free-solid-svg-icons'
import ReserveButton from '../components/ReserveButton'
import { motion } from 'framer-motion'


const Price = () => {
  return (
    <div className='price--container'>
    <div className="price--subContainer">
      {priceData.map((price, i) => (
        <div key={i} data-aos="zoom-in" className="price">
          <div className='title'>
            <h1>{price.plan}</h1>
            <h3>NT${price.price}</h3>
          </div>
          <div className="details">
            {price.details.map((detail, i) => (
              <span key={i}><FontAwesomeIcon id='check' icon={faCheck} /> {detail}</span>
            ))}
          </div>
        </div>
      ))}
      <ReserveButton />
    </div>
    <div data-aos="zoom-in" className="price--description">
      <h2>初次體驗 $200</h2>
      <h2>報名費 $800 / 單次 (含衣服手綁帶)</h2>
    </div>
    </div>
  )
}

export default Price