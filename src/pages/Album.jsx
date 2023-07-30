import React from 'react'
import '../styles/Album.css'
import ReserveButton from '../components/ReserveButton'
const Album = () => {

  const photoList = []

  function renderPhoto () {
    for(let i = 1; i < 35 ; i++) {
      photoList.push(i)
    }
    return photoList
  }
  renderPhoto();

  return (
    <div className="album--container">
      {photoList.map((image, i) => (
        <img key={i} data-aos="zoom-in" src={`./images/${image}.jpg`} alt={`photo of ${image}`} />
      ))}
      <ReserveButton/>
    </div>
  )
}

export default Album