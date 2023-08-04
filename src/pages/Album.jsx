import '../styles/Album.css'
import ReserveButton from '../components/ReserveButton'
import { LazyLoadImage } from 'react-lazy-load-image-component'
import 'react-lazy-load-image-component/src/effects/blur.css';
const Album = () => {

  const photoList = []

  function renderPhoto () {
    for(let i = 1; i < 51 ; i++) {
      photoList.push(i)
    }
    return photoList
  }
  renderPhoto();

  return (
    <div className="album--container">
      {photoList.map((image, i) => (
        <LazyLoadImage effect='blur' key={i} data-aos="zoom-in" src={`./images/${image}.jpg`} alt={`photo of ${image}`} />
      ))}
      <ReserveButton/>
    </div>
  )
}

export default Album