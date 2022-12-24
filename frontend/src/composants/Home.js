import React from 'react'
import About from './About'
import BestSales from './BestSales'
import BestWriters from './BestWriters'
import Blog from './Blog'
import ClientsReview from './ClientsReview'

export default function Home() {
  return (
<div>
    
  {/* play */}
  <div className="section">
    <div className="container">
      <div className="row">
        <div className="col-md-8 offset-md-2 col-sm-8 offset-sm-2">
          <div className="play_btn text_align_center">
            <img src="assets/images/play.png" alt="#" />
          </div>
        </div>
      </div>
    </div>
  </div>

<BestSales/>

<BestWriters/>

<About/>

<Blog/>
  <br />
  <h1 className="heading"> <span>client's reviews</span> </h1>
 <ClientsReview/>
</div>

  )
}
