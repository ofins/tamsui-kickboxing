import React, { useState } from 'react'
import '../styles/GymAlbum.css'
import ReserveButton from '../components/ReserveButton'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCircleChevronRight, faCircleChevronLeft } from '@fortawesome/free-solid-svg-icons'

const GymAlbum = () => {
  const photoList = ['1', '2', '3', '4', '5', '6', '7']

  const [last, setLast] = useState(0)
  const handleNext = () => {
    if(last === photoList.length - 1) {
      setLast(0)
    }
    setLast(prev => prev + 1)
  }

  const handlePrev = () => {
    if(last === 0) {
      setLast(photoList.length - 1)
    }
    setLast(prev => prev - 1)
  }

  let filteredArr = []
  function renderPhotoList() {
    for (let i = last + 2; i < last + 6; i++) {
      filteredArr.push(i)
    }
    return filteredArr;
  }
  renderPhotoList();

  console.log(last)

  return (
    <div className="gymAlbum--container">
      <div className="mainFrame">
        <img src={`./images/${photoList[last]}.jpg`} />
        <div className="btn-elements">
          <button onClick={handlePrev}><FontAwesomeIcon icon={faCircleChevronLeft} /></button>
          <button onClick={handleNext}><FontAwesomeIcon icon={faCircleChevronRight} /></button>
        </div>
      </div>
      <div className="gallery">
        {filteredArr.map(image => (
          <img src={`./images/${image}.jpg`} alt={`photo of ${image}`} />
        ))}
      </div>
    </div>
  )
}

export default GymAlbum
