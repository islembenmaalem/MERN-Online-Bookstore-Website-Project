import React from 'react'
import { NavLink } from 'react-router-dom'

export default function Footer() {
  return (
<div>
  <section className="footer">
    <div className="box-container">
      <div className="box">
        <h3>our locations</h3>
        <a href="https://www.google.com/maps/place/%D8%A7%D9%84%D9%85%D8%AF%D8%B1%D8%B3%D8%A9+%D8%A7%D9%84%D9%88%D8%B7%D9%86%D9%8A%D8%A9+%D9%84%D9%84%D8%A5%D9%84%D9%83%D8%AA%D8%B1%D9%88%D9%86%D9%8A%D9%83+%D9%88%D8%A7%D9%84%D8%A7%D8%AA%D8%B5%D8%A7%D9%84%D8%A7%D8%AA+%D8%A8%D8%B5%D9%81%D8%A7%D9%82%D8%B3%D8%8C+Technopole+Sfax,+Route+Tunis+km+11,+cite+Ons%D8%8C+%D8%B5%D9%81%D8%A7%D9%82%D8%B3%E2%80%8E%E2%80%AD/@34.8382873,10.757836,17z/data=!3m1!4b1!4m5!3m4!1s0x13002cd2cef7333d:0xaa3a1cf6d7fb55b0!8m2!3d34.8384779!4d10.7559423"> <i className="fas fa-map-marker-alt" /> sfax </a>
        <a href="https://www.google.com/maps/place/%D8%AA%D9%88%D9%86%D8%B3%E2%80%AD/@36.7948624,10.2133178,12z/data=!3m1!4b1!4m5!3m4!1s0x12fd337f5e7ef543:0xd671924e714a0275!8m2!3d36.8064948!4d10.1815316"> <i className="fas fa-map-marker-alt" /> tunis </a>
        <a href="https://www.google.com/maps/place/%D8%B3%D9%88%D8%B3%D8%A9%E2%80%AD/@35.8283295,10.6530739,13z/data=!3m1!4b1!4m5!3m4!1s0x130275759ac9d10d:0x698e3915682cef7d!8m2!3d35.8245029!4d10.634584"> <i className="fas fa-map-marker-alt" /> sousse </a>
        <a href="#"> <i className="fas fa-map-marker-alt" /> france </a>
        <a href="#"> <i className="fas fa-map-marker-alt" /> japan </a>
        <a href="#"> <i className="fas fa-map-marker-alt" /> africa </a>
      </div>
      <div className="box">
        <h3>quick links</h3>
        <NavLink to=""> <i className="fas fa-arrow-right" /> home </NavLink>
        <NavLink to=""> <i className="fas fa-arrow-right" /> featured </NavLink>
        <NavLink href=""> <i className="fas fa-arrow-right" /> arrivals </NavLink>
        <NavLink to="Client"> <i className="fas fa-arrow-right" /> reviews </NavLink>
        <NavLink to="blog"> <i className="fas fa-arrow-right" /> blogs </NavLink>
      </div>
      <div className="box">
        <h3>extra links</h3>
        <a href="#"> <i className="fas fa-arrow-right" /> account info </a>
        <a href="#"> <i className="fas fa-arrow-right" /> ordered items </a>
        <a href="#"> <i className="fas fa-arrow-right" /> privacy policy </a>
        <a href="#"> <i className="fas fa-arrow-right" /> payment method </a>
        <a href="#"> <i className="fas fa-arrow-right" /> our serivces </a>
      </div>
      <div className="box">
        <h3>contact info</h3>
        <a href="#"> <i className="fas fa-phone" /> +123-456-7890 </a>
        <a href="#"> <i className="fas fa-phone" /> +111-222-3333 </a>
        <a href="#"> <i className="fas fa-envelope" /> IslemampImen@gmail.com </a>
        <img src="assets/images/worldmap.png" className="map" alt="" />
      </div>
    </div>
    <div className="share">
      <a href="#" className="fab fa-facebook-f" />
      <a href="#" className="fab fa-twitter" />
      <a href="#" className="fab fa-instagram" />
      <a href="#" className="fab fa-linkedin" />
      <a href="#" className="fab fa-pinterest" />
    </div>
    <div className="credit"> created by <span>Islem Ben Maalem </span> | all rights reserved! </div>
  </section>
</div>

  )
}
