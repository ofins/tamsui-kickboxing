import React, { useState } from 'react'
import '../styles/GymAlbum.css'
import ReserveButton from '../components/ReserveButton'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCircleChevronRight, faCircleChevronLeft } from '@fortawesome/free-solid-svg-icons'
import { LazyLoadImage } from 'react-lazy-load-image-component'
import 'react-lazy-load-image-component/src/effects/blur.css';

const GymAlbum = () => {
  //photoList is the total amount of photos we have in the collection. 
  const photoList = ['1', '2', '3', '4', '5', '6']

  const [last, setLast] = useState(0)

  //create handleNext and handlePrev button to go to next or previous photos
  const handleNext = () => {
    if(last === photoList.length - 1) {
      return setLast(0)
    }
    return setLast(prev => prev + 1)
  }

  const handlePrev = () => {
    if(last === 0) {
      return setLast(photoList.length - 1)
    }
    return setLast(prev => prev - 1)
  }

  //declare filteredArr 
  const filteredArr = []

  //current index is equal to last
  let currentIndex = last

  //setup a function to run the rendered 4 photos at the bottom whenever the state updates
  function renderPhotoList() {
    //loop the photos four times always
    for ( let i = 0 ; i < 4 ; i++) {
      //using remainder, we can ensure that nextIndex is always smaller than the length of photoList
      const nextIndex = (currentIndex + i) % photoList.length
      filteredArr.push(photoList[nextIndex])  
    }
    currentIndex = (currentIndex + 1) % photoList.length
  }
  
  renderPhotoList();

  return (
    <div className="gymAlbum--container">
      <div className="mainFrame">
        <img className='mainframe-img' src={`./images/g${photoList[last]}.jpg`} />
        <div className="btn-elements">
          <button onClick={handlePrev}><FontAwesomeIcon icon={faCircleChevronLeft} /></button>
          <button onClick={handleNext}><FontAwesomeIcon icon={faCircleChevronRight} /></button>
        </div>
      </div>
      <div className="gallery">
        {filteredArr.map((image, index) => (
          <LazyLoadImage className='mainframe-img' effect='blur' key={index} src={`./images/g${image}.jpg`} alt={`photo of ${image}`} />
        ))}
      </div>
    </div>
  )
}

export default GymAlbum
