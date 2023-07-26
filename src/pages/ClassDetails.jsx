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
                    <img data-aos="fade-in" src={lesson.mainImage} alt={`image of ${lesson.english_title}`} />
                </div>
                <div className="title">
                    <h1 data-aos="fade-left">{lesson.title}</h1>
                    <p data-aos="fade-right">{lesson.description}</p>
                </div>
            </div>
            <div className="gallery">
                {lesson.gallery.map(item => (
                    <div data-aos="slide-up" className="imageContainer">
                        <img src={`./images/${lesson.class}-${item}.jpg`} alt={`photo of ${item}`} />
                    </div>
                ))}
            </div>
            <ReserveButton />
        </div>
    )
}

export default ClassDetails