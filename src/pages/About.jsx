import '../styles/About.css'
import { testimonialsData } from '../data/about'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faStar } from '@fortawesome/free-solid-svg-icons'
import ReserveButton from '../components/ReserveButton'
import { LazyLoadImage } from 'react-lazy-load-image-component'
import 'react-lazy-load-image-component/src/effects/blur.css';

const About = () => {

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

  const testimonials = testimonialsData.map((review, index) => (
    <div key={index} data-aos="zoom-in" className="review--container">
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
        <div className="container">
          <LazyLoadImage data-aos="fade-right" src="./images/story_main.jpg" alt="story-photo" />
          <div className="texts">
            <div className="header">
              <div className="rect"></div>
              <h1 data-aos="fade-right">故事</h1>
            </div>
            <p>「功夫門人淡水武道館」是由館長方俐文及總教練游子豪於2021年5月創館至今。「功夫門人」的前身為「竭盡拳力-淡水KickBoxing」，創立於2016年8月，起初只有專攻踢拳道，其又稱為自由搏擊的武術。</p>
            <p>爾後，小文館長另外專研綜合格鬥和拳擊，小豪教練則專研散打、泰拳、柔道和柔術。在2021年5月，將只教踢拳道的「竭盡拳力」更名為「功夫門人」，開始推廣散打、泰拳和拳擊，並且培訓館內教練，目前已經上線的教練有：秀教練、之翰教練、阿寶教練，雖然目前都只推廣一門武術，但本身都具備非常豐富的專項格鬥經驗。</p>

            <p>本館的初衷：教練們必須親自嘗試，再以親身經驗教導正確的格鬥觀念、實際的比賽規則以及淺顯易懂的武術技巧，讓初學者能更好上手，進而推廣給大眾。</p>
          </div>
        </div>

      </div>
      <div className="story--container">
        <div className="header">
          <div className="rect"></div>
          <h1 data-aos="fade-right" >里程碑</h1>
        </div>
        <div className="texts">
          <p>2017年學員參加WAKO全國錦標賽 榮獲1銀2銅</p>
          <p>2018年學員參加WAKO全國錦標賽 榮獲1金1銀</p>
          <p>2019年學員參加WAKO全國錦標賽 榮獲1銀1銅</p>
          <p>2020年學員參加WAKO全國錦標賽 榮獲6金2銀5銅 團體第四名</p>
          <p>2021年學員參加第六屆散打錦標賽 榮獲19金15銀團體第一名</p>
          <p>2021年學員參加WAKO全國錦標賽 榮獲7金2銀</p>
          <p>2023學員參加全國散打搏擊青年盃錦標賽事 榮獲10金6銀2銅</p>
        </div>
      </div>
      <h2>評論 | 回饋</h2>
      <div className="review--outerBox">
        {testimonials}
      </div>
      <ReserveButton />
    </div>
  )
}

export default About