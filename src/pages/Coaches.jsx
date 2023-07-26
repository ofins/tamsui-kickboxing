import React from 'react'
import '../styles/Coaches.css'
import ReserveButton from '../components/ReserveButton'
import coachesData from '../data/coaches'
import { useNavigate } from 'react-router-dom'
import { motion } from 'framer-motion'

const Coaches = () => {
  const navigate = useNavigate();

  const coachList = coachesData.map(coach => (
    <div data-aos="fade-right" className="coach">
      <div className="portrait">
        <img src={coach.imageURL} alt={`photo of ${coach.name}`} />
      </div>
      <div className="context">
        <h1>{coach.name}<span>教練</span></h1>
        <div className="lessons">
          {coach.lessons.map(lesson => (
            <button onClick={() => navigate(`/${lesson.path}`)}>{lesson.name}</button>
          ))}
        </div>
        <div className="certificates">
          {coach.certificates.map(certificate => (
            <p>{certificate}</p>
          ))}
        </div>
      </div>
    </div>
  ))
  return (
    <div className="coaches--container">
      {coachList}
      <ReserveButton />
    </div>
  )
}

export default Coaches