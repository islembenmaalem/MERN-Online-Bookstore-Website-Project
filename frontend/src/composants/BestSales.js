import React from 'react'

export default function BestSales() {
  return (
    <div>
          <div className="plane">
    <div className="container">
      <div className="row">
        <div className="col-sm-12">
          <div className="titlepage">
            <h2>OUR BEST SALES</h2>
            <span>OF THE WEEK</span>
          </div>
        </div>
      </div>
      <div className="row">
        <div className="col-md-4">
          <div className="plan_bax text_align_center">
            <figure><img id="book1" src="assets/images/book-10.png" alt="#" /></figure>
            <div id="ho_plan" className="plan_text">
              <h3>Retro</h3>
              <div> 
                <span style={{color: 'orange'}} className="fa fa-star " />
                <span style={{color: 'orange'}} className="fa fa-star " />
                <span style={{color: 'orange'}} className="fa fa-star " />
                <span style={{color: 'orange'}} className="fa fa-star" />
                <span style={{color: 'orange'}} className="fa fa-star" />
              </div>
              <p>Texte 1</p>
              <a className="read_more" href="">Read More</a>
            </div>
          </div>
        </div>
        <div className="col-md-4">
          <div className="plan_bax text_align_center">
            <figure><img id="book2" src="assets/images/book-9.png" alt="#" /></figure>
            <div id="ho_plan" className="plan_text">
              <h3>Love</h3>
              <div> 
                <span style={{color: 'orange'}} className="fa fa-star " />
                <span style={{color: 'orange'}} className="fa fa-star " />
                <span style={{color: 'orange'}} className="fa fa-star " />
                <span style={{color: 'orange'}} className="fa fa-star" />
                <span style={{color: 'orange'}} className="fa fa-star" />
              </div>
              <p>Texte 2</p>
              <a className="read_more" href="">Read More</a>
            </div>
          </div>
        </div>
        <div className="col-md-4">
          <div className="plan_bax text_align_center">
            <figure><img id="book3" src="assets/images/book-8.png" alt="#" /></figure>
            <div id="ho_plan" className="plan_text">
              <h3>BLACK HISTORY MONTH</h3>
              <div> 
                <span style={{color: 'orange'}} className="fa fa-star " />
                <span style={{color: 'orange'}} className="fa fa-star " />
                <span style={{color: 'orange'}} className="fa fa-star " />
                <span style={{color: 'orange'}} className="fa fa-star" />
                <span style={{color: 'orange'}} className="fa fa-star" />
              </div>
              <p>Text 3</p>
              <a className="read_more" href="">Read More</a>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
    </div>
  )
}
