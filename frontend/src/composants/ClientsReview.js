import React from 'react'

export default function ClientsReview() {
  return (
    <div>
        <div className="says">
    <div className="container-fluid">
      <div className="row">
        <div className="col-md-12">
          <div id="proj" className="carousel slide says_ban" data-ride="carousel">
            <ol className="carousel-indicators">
              <li data-target="#proj" data-slide-to={0} className="active" />
              <li data-target="#proj" data-slide-to={1} />
              <li data-target="#proj" data-slide-to={2} />
            </ol>
            <div className="carousel-inner">
              <div className="carousel-item active">
                <div className="container">
                  <div className="carousel-caption relative3">
                    <div className="row">
                      <div className="col-md-12">
                        <div className="readert">
                          <div className="readert_img text_align_center">
                            <figure><img src="assets/images/pic-6.png" alt="#" /></figure>
                          </div>
                          <div className="readert_text">
                            <h3>Jacksmith sand</h3>
                            <p>There are many variations of passages of Lorem Ipsum available, but the <br /> majority have suffered alteration in some form</p>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="carousel-item">
                <div className="container">
                  <div className="carousel-caption relative3">
                    <div className="row">
                      <div className="col-md-12">
                        <div className="readert">
                          <div className="readert_img text_align_center">
                            <figure><img src="assets/images/pic-1.png" alt="#" /></figure>
                          </div>
                          <div className="readert_text">
                            <h3>Jacksmith sand</h3>
                            <p>There are many variations of passages of Lorem Ipsum available, but the <br /> majority have suffered alteration in some form</p>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="carousel-item">
                <div className="container">
                  <div className="carousel-caption relative3">
                    <div className="row">
                      <div className="col-md-12">
                        <div className="readert">
                          <div className="readert_img text_align_center">
                            <figure><img src="assets/images/pic-4.png" alt="#" /></figure>
                          </div>
                          <div className="readert_text">
                            <h3>Jacksmith sand</h3>
                            <p>There are many variations of passages of Lorem Ipsum available, but the <br /> majority have suffered alteration in some form</p>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <a className="carousel-control-prev" href="#proj" role="button" data-slide="prev">
                <i className="fa fa-arrow-left" aria-hidden="true" />
                <span className="sr-only">Previous</span>
              </a>
              <a className="carousel-control-next" href="#proj" role="button" data-slide="next">
                <i className="fa fa-arrow-right" aria-hidden="true" />
                <span className="sr-only">Next</span>
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
    </div>
  )
}
