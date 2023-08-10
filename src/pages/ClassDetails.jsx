import React, { useEffect } from 'react'
import { useParams } from 'react-router-dom'
import classDetailsData from '../data/classDetails'
import '../styles/ClassDetails.css'
import ReserveButton from '../components/ReserveButton';
import { LazyLoadImage } from 'react-lazy-load-image-component'
import 'react-lazy-load-image-component/src/effects/blur.css';

const ClassDetails = () => {
    let { id } = useParams();

    const lesson = classDetailsData.find(item => item.class === id)


    return (
        <div className="classDetails--container">
            <div className="content">
                <div className="boards">
                    <LazyLoadImage data-aos="fade-in" src={lesson.mainImage} alt={`image of ${lesson.english_title}`} />
                </div>
                <div className="title">
                    <h1 data-aos="fade-left">{lesson.title} <br/> {lesson.english_title}</h1>
                    {lesson.description.map((desc, index) => (
                        <p key={index} data-aos="fade-right">{desc}</p>
                    ))}
                    {/* <p data-aos="fade-right">{lesson.description}</p> */}
                </div>
            </div>
            {/* <div className="gallery">
                {lesson.gallery.map(item => (
                    <div data-aos="slide-up" className="imageContainer">
                        <LazyLoadImage src={`./images/${lesson.class}-${item}.jpg`} alt={`photo of ${item}`} />
                    </div>
                ))}
            </div> */}
            <ReserveButton />
        </div>
    )
}

export default ClassDetails