import React from 'react'
import '../styles/Price.css'
import priceData from '../data/price'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCheck } from '@fortawesome/free-solid-svg-icons'
import ReserveButton from '../components/ReserveButton'

const Price = () => {
  return (
    <div className="price--container">
      {priceData.map(price => (
        <div className="price">
          <div className='title'>
            <h1>{price.plan}</h1>
            <h3>NT${price.price}</h3>
          </div>
          <div className="details">
            {price.details.map(detail => (
              <span><FontAwesomeIcon id='check' icon={faCheck} /> {detail}</span>
            ))}
          </div>
        </div>
      ))}
      <ReserveButton />
    </div>
  )
}

export default Price