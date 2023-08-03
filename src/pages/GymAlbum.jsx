import { useState } from 'react'
import '../styles/GymAlbum.css'
import { LazyLoadImage } from 'react-lazy-load-image-component'
import 'react-lazy-load-image-component/src/effects/blur.css';

const GymAlbum = () => {
  const albumList = ['g1', 'g2', 'g3', 'g4']

  const albumEls = albumList.map((image, index) => (
    <img data-aos="zoom-in" key={index} src={`./images/${image}.jpg`} alt={`image of ${image}`} />
  ))
  return (
    <div className="gymAlbum--container">
      {albumEls}
    </div>
  )
}

export default GymAlbum
