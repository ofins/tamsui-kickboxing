import React, { useEffect } from 'react'
import { useParams } from 'react-router-dom'
import classDetailsData from '../data/classDetails'
import '../styles/ClassDetails.css'
import ReserveButton from '../components/ReserveButton';

const ClassDetails = () => {
    let { id } = useParams();
    console.log(id)

    const lesson = classDetailsData.find(item => item.class === id)

    console.log(lesson)

    return (
        <div className="classDetails--container">
            <div className="content">
                <div className="boards">
                    <div className="board left"></div>
                    <div className="board mid"></div>
                    <div className="board right"></div>
                    <img src={lesson.mainImage} alt={`image of ${lesson.english_title}`} />
                </div>
                <div className="title">
                    <h1>{lesson.title}</h1>
                    <p>{lesson.description}</p>
                </div>
            </div>
            <div className="gallery">
                {lesson.gallery.map(item => (
                    <div className="imageContainer">
                        <img src={`./images/${item}.jpg`} alt={`photo of ${item}`} />
                    </div>
                ))}
            </div>
            <ReserveButton />
        </div>
    )
}

export default ClassDetails