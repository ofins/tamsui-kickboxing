import React from 'react'
import '../styles/Album.css'
import ReserveButton from '../components/ReserveButton'
const Album = () => {

  const photoList = []

  function renderPhoto () {
    for(let i = 1; i < 20 ; i++) {
      photoList.push(i)
    }
    return photoList
  }
  renderPhoto();
  console.log(photoList)

  return (
    <div className="album--container">
      {photoList.map(image => (
        <img src={`./images/${image}.jpg`} alt={`photo of ${image}`} />
      ))}
      <ReserveButton/>
    </div>
  )
}

export default Album