import React from 'react'
import '../styles/About.css'
import { testimonialsData, storiesData } from '../data/about'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faS, faStar } from '@fortawesome/free-solid-svg-icons'
import ReserveButton from '../components/ReserveButton'

const About = () => {
  const stories = storiesData.map(story => (
    <div className="story--container">
      <div className="header">
        <div className="rect"></div>
        <h1 data-aos="fade-right" >{story.title}</h1>
      </div>
      <div className="texts">
        {story.text.map(script => (
          <p>{script}</p>
        ))}
      </div>
    </div>
  ))

  // create a star renderer that will take shapeCount as argument being passed in.
  const StarRenderer = ({ shapeCount }) => {
    return (
      <div>
        {Array.from({ length: shapeCount }, (_, index) => (
          <FontAwesomeIcon id='star' icon={faStar} key={index} />
        ))}
      </div>
    );
  };

  const testimonials = testimonialsData.map(review => (
    <div data-aos="zoom-in" className="review--container">
      <div className="rating">
        <StarRenderer shapeCount={review.rating} />
      </div>
      <div className="texts">
        <p>{review.text}</p>
      </div>
      <div className="bottom">
        <h3>{review.name}</h3>
        <p>from {review.origin}</p>
      </div>
    </div>
  ))


  return (
    <div className="about--container">
      <div className="story--container">
        <div className="header">
          <div className="rect"></div>
          <h1 data-aos="fade-right">故事</h1>
        </div>
        <div className="container">
          <img data-aos="fade-left" src="./images/9.jpg" alt="story-photo" />
          <div className="texts">
            <p><span>耍</span>氣邊年丟雞吧汗根爪、星示石竹兄亭林皮媽什，二喜次喜小。園彩兌地飽旁抄止像貓石到它飽明我毛追肖，都清它室，辛還士春親；呢他拉足。右記歡個貓皮家屋，干首頁。
              洋但開圓申波馬心刃祖寫菜童黃次追彩孝。祖和跟風兆種有從品送旁松完地。晚樹元兔六馬就今告給怎節，讀讀司這放者哪師采書香問哭耍裝封嗎。心寫蝴讀它知。
              牙話花未您再坐京乙結良止陽几行歌雨您彩國！國白牙示色語玩裝。干珠助爬那辛早貓呀要刃呢追；白神飯動亭「棵工棵祖」細日。</p>
            <p>洋但開圓申波馬心刃祖寫菜童黃次追彩孝。祖和跟風兆種有從品送旁松完地。晚樹元兔六馬就今告給怎節，讀讀司這放者哪師采書香問哭耍裝封嗎。心寫蝴讀它知。</p>
            <p>洋但開圓申波馬心刃祖寫菜童黃次追彩孝。祖和跟風兆種有從品送旁松完地。晚樹元兔六馬就今告給怎節，讀讀司這放者哪師采書香問哭耍裝封嗎。心寫蝴讀它知。</p>
          </div>
        </div>

      </div>
      {stories}
      <h2>評論 | 回饋</h2>
      <div className="review--outerBox">
        {testimonials}
      </div>
      <ReserveButton />
    </div>
  )
}

export default About