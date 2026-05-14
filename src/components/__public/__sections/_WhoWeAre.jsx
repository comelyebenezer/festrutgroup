// import { UilTrophy } from '@iconscout/react-unicons';
import { Link } from 'react-router-dom';
import vivian from './../../../assets/images/whoweare/Vivian.png';
import amos_diana from './../../../assets/images/whoweare/Amos_Diana.jpg';


const WhoWeAre = () => {
  return (
    <>
    <div className="sections" id="whoweare">
      <h2 className="mobile">Who we are</h2>

      <div className="c2 c2-md c1-sm c1-xs tester">
      
        <div className="c2 c2-md c2-sm c2-xs inner">
          <div className="left-left">
            <img src={amos_diana} />
            <div className="small"></div>
          </div>
          <div className="left-right">
            <div className="small"></div>
            <img src={vivian} />
          </div>
        </div>

        <div>
          <h2 className="desktop"><span>Who </span>we are</h2>

          <p><b>Festrut Group</b> Festrut Group is a forward-thinking real estate and development company committed to creating value through strategic property development, land acquisition, and infrastructure growth. With a vision centered on innovation, integrity, and long-term impact, we are dedicated to building sustainable communities and providing secure investment opportunities.</p>

          <p><b>Festrut Group</b> Driven by strong leadership and a passion for excellence, Festrut Group focuses on transforming ideas into thriving developments while empowering individuals and families to own a future built on solid ground.</p>

            <Link to="/book-inspection" className="smashtech-button swipe-button">Book Inspection</Link>
        </div>
      </div>

    </div>
    </>
  )
}
export default WhoWeAre;