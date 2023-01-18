import React from 'react'

export default function Blog() {
  return (
    <div>
        <section id="quotation" className="align-center">
    <div className="inner-content">
      <h2 className="section-title divider">Quote of the day</h2>
      <blockquote data-aos="fade-up">
        <q>“The more that you read, the more things you will know. The more that you learn, the more places you’ll go.”</q>
        <div className="author-name">Dr. Seuss</div>			
      </blockquote>
    </div>		
  </section>
        
          <div className="titlepage">
            <h2>FROM THE BLOG</h2>
          </div>
      
      
    
  <section id="latest-blog">
    <div className="container">
      <div className="row">
        <div className="col-md-12">
          <div>
            <div>
              <span>Read our articles</span>
            </div>
            <h2 className="heading"> <span>Latest Articles</span> </h2>

          </div>
          <div className="row">
            <div className="col-md-4">
              <article className="column" data-aos="fade-up">
                <figure>
                  <a href="#" className="image-hvr-effect">
                    <img src="assets/images/post-img1.jpg" alt="post" className="post-image" />			
                  </a>
                </figure>
                <div className="post-item">	
                  <div className="meta-date">Mar 30, 2021</div>			
                  <h3><a href="#">Reading books always makes the moments happy</a></h3>
                  <span>Post by : Paul </span>

                  <div className="links-element">
                    <div>INSPIRATION</div>
                    <div className="social-links">
                      <ul>
                        <li>
                          <a href="#"><i className="icon icon-facebook" /></a>
                        </li>
                        <li>
                          <a href="#"><i className="icon icon-twitter" /></a>
                        </li>
                      
                      </ul>
                    </div>
                  </div>{/*links-element*/}
                </div>
              </article>
            </div>
            <div className="col-md-4">
              <article className="column" data-aos="fade-down">
                <figure>
                  <a href="#" className="image-hvr-effect">
                    <img src="assets/images/post-img2.jpg" alt="post" className="post-image" />
                  </a>
                </figure>
                <div className="post-item">	
                  <div className="meta-date">Mar 29, 2021</div>			
                  <h3><a href="#">Reading books always makes the moments happy</a></h3>
                  <span>Post by : Henri </span>
                  <div className="links-element">
                  <div>INSPIRATION</div>
                    <div className="social-links">
                      <ul>
                        <li>
                          <a href="#"><i className="icon icon-facebook" /></a>
                        </li>
                        <li>
                          <a href="#"><i className="icon icon-twitter" /></a>
                        </li>
                       
                      </ul>
                    </div>
                  </div>{/*links-element*/}
                </div>
              </article>
            </div>
            <div className="col-md-4">
              <article className="column" data-aos="fade-up">
                <figure>
                  <a href="#" className="image-hvr-effect">
                    <img src="assets/images/post-img3.jpg" alt="post" className="post-image" />
                  </a>
                </figure>
                <div className="post-item">		
                  <div className="meta-date">Feb 27, 2021</div>			
                  <h3><a href="#">Reading books always makes the moments happy</a></h3>
                  <span>Post by : Alain </span>
                  <div className="links-element">
                  <div>INSPIRATION</div>
                    <div className="social-links">
                      <ul>
                        <li>
                          <a href="#"><i className="icon icon-facebook" /></a>
                        </li>
                        <li>
                          <a href="#"><i className="icon icon-twitter" /></a>
                        </li>
                      
                      </ul>
                    </div>
                  </div>{/*links-element*/}
                </div>
              </article>
            </div>
          </div>
          <div id="re" className="row">
            <div className="btn-wrap align-center">
              <a href="#" className="btn btn-outline-accent btn-accent-arrow" tabIndex="0">Read All Articles<i className="icon" />
              <i class='fa fa-arrow-right' />
              </a>
            </div>
          </div>
        </div>	
      </div>
    </div>
  </section>
    </div>
  )
}
