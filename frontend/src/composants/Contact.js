import React from 'react'

export default function Contact() {
  return (
    <div style={{marginTop:20,marginLeft:50,marginRight:50,marginBottom:50}} className="contact">
      <div className="container">
        <div className="row d_flex">
          <div className="col-md-6">
            <form id="request" className="main_form">
              <div className="row">
                <div className="col-md-12 ">
                  <input className="contactus" placeholder="Name" type="type" name="Name" /> 
                </div>
                <div className="col-md-12">
                  <input className="contactus" placeholder="Phone number" type="type" name="Phone number" />                          
                </div>
                <div className="col-md-12">
                  <input className="contactus" placeholder="Email" type="type" name="Email" /> 
                </div>
                <div className="col-md-12">
                  <textarea className="textarea" placeholder="Message" type="type" message="Name" defaultValue={""} />
                </div>
                <div className="col-md-6 col-sm-6">
                  <button className="send_btn">Send</button>
                </div>
                <div className="col-md-6 col-sm-6">
                  <ul className="social_icon">
                    <li><a href=""><i className="fa fa-facebook" aria-hidden="true" /></a></li>
                    <li><a href=""><i className="fa fa-twitter" aria-hidden="true" /></a></li>
                    <li><a href=""><i className="fa fa-instagram" aria-hidden="true" /></a></li>
                    <li><a href=""><i className="fa fa-linkedin-square" aria-hidden="true" /></a></li>
                  </ul>
                </div>
              </div>
            </form>
          </div>
          <div className="col-md-6">
            <div className="map_main">
              <div className="map-responsive">
                <iframe src="https://www.google.com/maps/embed/v1/place?key=AIzaSyA0s1a7phLN0iaD6-UE7m4qP-z21pH0eSc&q=Eiffel+Tower+Paris+France" width={600} height={378} frameBorder={0} style={{border: 0, width: '100%'}} allowFullScreen />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
