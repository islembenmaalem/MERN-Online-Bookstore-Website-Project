import React from 'react'

export default function PolpularBooks() {
  return (
<div>
<div className="row">
        <div className="col-sm-12">
          <div className="titlepage">
            <h2>Popular Books</h2>
          </div>
        </div>
      </div>
  <section id="popular-books" className="bookshelf">
    <div className="container">
      <div className="row">
        <div className="col-md-12">
          
            
          
          <ul className ="tabs nav nav-pills mb-3" id="pills-tab" role="tablist">
  <li class="tab" role="presentation">
    <a class=" active" id="pills-home-tab" data-bs-toggle="pill" data-bs-target="#all-genre" role="tab" aria-controls="pills-home" aria-selected="true">All genre</a>
  </li>
  <li class="tab" role="presentation">
    <a  id="pills-profile-tab" data-bs-toggle="pill" data-bs-target="#business"  role="tab" aria-controls="pills-profile" aria-selected="false">business</a>
  </li>
  <li class="tab" role="presentation">
    <a  id="pills-contact-tab" data-bs-toggle="pill" data-bs-target="#technology"  role="tab" aria-controls="pills-contact" aria-selected="false">technology</a>
  </li>
  <li class="tab" role="presentation">
    <a  id="pills-contact-tab" data-bs-toggle="pill" data-bs-target="#romantic"  role="tab" aria-controls="pills-contact" aria-selected="false">romantic</a>
  </li>
  <li class="tab" role="presentation">
    <a  id="pills-contact-tab" data-bs-toggle="pill" data-bs-target="#adventure"  role="tab" aria-controls="pills-contact" aria-selected="false">adventure</a>
  </li>
  <li class="tab" role="presentation">
    <a  id="pills-contact-tab" data-bs-toggle="pill" data-bs-target="#fictional"  role="tab" aria-controls="pills-contact" aria-selected="false">fictional</a>
  </li>
</ul>
          <div className="tab-content">
            <div id="all-genre" data-tab-content className="active">
              <div className="row">
                <div className="col-md-3">
                  <figure className="product-style">
                    <img src="assets/images/tab-item1.jpg" alt="Books" className="product-item" />
                    <button type="button" className="add-to-cart" data-product-tile="add-to-cart">Add to Cart</button>
                    <figcaption>
                      <h3>Portrait photography</h3>
                      <p>Adam Silber</p>
                      <div className="item-price">$ 40.00</div>
                    </figcaption>
                  </figure>
                </div>
                <div className="col-md-3">
                  <figure className="product-style">
                    <img src="assets/images/tab-item2.jpg" alt="Books" className="product-item" />
                    <button type="button" className="add-to-cart" data-product-tile="add-to-cart">Add to Cart</button>
                    <figcaption>
                      <h3>Once upon a time</h3>
                      <p>Klien Marry</p>
                      <div className="item-price">$ 35.00</div>
                    </figcaption>
                  </figure>
                </div>
                <div className="col-md-3">
                  <figure className="product-style">
                    <img src="assets/images/tab-item3.jpg" alt="Books" className="product-item" />
                    <button type="button" className="add-to-cart" data-product-tile="add-to-cart">Add to Cart</button>
                    <figcaption>
                      <h3>Tips of simple lifestyle</h3>
                      <p>Bratt Smith</p>
                      <div className="item-price">$ 40.00</div>
                    </figcaption>
                  </figure>
                </div>
                <div className="col-md-3">
                  <figure className="product-style">
                    <img src="assets/images/tab-item4.jpg" alt="Books" className="product-item" />
                    <button type="button" className="add-to-cart" data-product-tile="add-to-cart">Add to Cart</button>
                    <figcaption>
                      <h3>Just felt from outside</h3>
                      <p>Nicole Wilson</p>
                      <div className="item-price">$ 40.00</div>
                    </figcaption>
                  </figure>
                </div>
              </div>
              <div className="row">
                <div className="col-md-3">
                  <figure className="product-style">
                    <img src="assets/images/tab-item5.jpg" alt="Books" className="product-item" />
                    <button type="button" className="add-to-cart" data-product-tile="add-to-cart">Add to Cart</button>
                    <figcaption>
                      <h3>Peaceful Enlightment</h3>
                      <p>Marmik Lama</p>
                      <div className="item-price">$ 40.00</div>
                    </figcaption>
                  </figure>
                </div>
                <div className="col-md-3">
                  <figure className="product-style">
                    <img src="assets/images/tab-item6.jpg" alt="Books" className="product-item" />
                    <button type="button" className="add-to-cart" data-product-tile="add-to-cart">Add to Cart</button>
                    <figcaption>
                      <h3>Great travel at desert</h3>
                      <p>Sanchit Howdy</p>
                      <div className="item-price">$ 40.00</div>
                    </figcaption>
                  </figure>
                </div>
                <div className="col-md-3">
                  <figure className="product-style">
                    <img src="assets/images/tab-item7.jpg" alt="Books" className="product-item" />
                    <button type="button" className="add-to-cart" data-product-tile="add-to-cart">Add to Cart</button>
                    <figcaption>
                      <h3>Life among the pirates</h3>
                      <p>Armor Ramsey</p>
                      <div className="item-price">$ 40.00</div>
                    </figcaption>
                  </figure>
                </div>
                <div className="col-md-3">
                  <figure className="product-style">
                    <img src="assets/images/tab-item8.jpg" alt="Books" className="product-item" />
                    <button type="button" className="add-to-cart" data-product-tile="add-to-cart">Add to Cart</button>
                    <figcaption>
                      <h3>Simple way of piece life</h3>
                      <p>Armor Ramsey</p>
                      <div className="item-price">$ 40.00</div>
                    </figcaption>
                  </figure>
                </div>
              </div>
            </div>
            <div id="business" data-tab-content >
              <div className="row">
                <div className="col-md-3">
                  <figure className="product-style">
                    <img src="assets/images/tab-item2.jpg" alt="Books" className="product-item" />
                    <button type="button" className="add-to-cart" data-product-tile="add-to-cart">Add to Cart</button>
                    <figcaption>
                      <h3>Peaceful Enlightment</h3>
                      <p>Marmik Lama</p>
                      <div className="item-price">$ 40.00</div>
                    </figcaption>
                  </figure>
                </div>
                <div className="col-md-3">
                  <figure className="product-style">
                    <img src="assets/images/tab-item4.jpg" alt="Books" className="product-item" />
                    <button type="button" className="add-to-cart" data-product-tile="add-to-cart">Add to Cart</button>
                    <figcaption>
                      <h3>Great travel at desert</h3>
                      <p>Sanchit Howdy</p>
                      <div className="item-price">$ 40.00</div>
                    </figcaption>
                  </figure>
                </div>
                <div className="col-md-3">
                  <figure className="product-style">
                    <img src="assets/images/tab-item6.jpg" alt="Books" className="product-item" />
                    <button type="button" className="add-to-cart" data-product-tile="add-to-cart">Add to Cart</button>
                    <figcaption>
                      <h3>Life among the pirates</h3>
                      <p>Armor Ramsey</p>
                      <div className="item-price">$ 40.00</div>
                    </figcaption>
                  </figure>
                </div>
                <div className="col-md-3">
                  <figure className="product-style">
                    <img src="assets/images/tab-item8.jpg" alt="Books" className="product-item" />
                    <button type="button" className="add-to-cart" data-product-tile="add-to-cart">Add to Cart</button>
                    <figcaption>
                      <h3>Simple way of piece life</h3>
                      <p>Armor Ramsey</p>
                      <div className="item-price">$ 40.00</div>
                    </figcaption>
                  </figure>
                </div>
              </div>
            </div>
            <div id="technology" data-tab-content>
              <div className="row">
                <div className="col-md-3">
                  <figure className="product-style">
                    <img src="assets/images/tab-item1.jpg" alt="Books" className="product-item" />
                    <button type="button" className="add-to-cart" data-product-tile="add-to-cart">Add to Cart</button>
                    <figcaption>
                      <h3>Peaceful Enlightment</h3>
                      <p>Marmik Lama</p>
                      <div className="item-price">$ 40.00</div>
                    </figcaption>
                  </figure>
                </div>
                <div className="col-md-3">
                  <figure className="product-style">
                    <img src="assets/images/tab-item3.jpg" alt="Books" className="product-item" />
                    <button type="button" className="add-to-cart" data-product-tile="add-to-cart">Add to Cart</button>
                    <figcaption>
                      <h3>Great travel at desert</h3>
                      <p>Sanchit Howdy</p>
                      <div className="item-price">$ 40.00</div>
                    </figcaption>
                  </figure>
                </div>
                <div className="col-md-3">
                  <figure className="product-style">
                    <img src="assets/images/tab-item5.jpg" alt="Books" className="product-item" />
                    <button type="button" className="add-to-cart" data-product-tile="add-to-cart">Add to Cart</button>
                    <figcaption>
                      <h3>Life among the pirates</h3>
                      <p>Armor Ramsey</p>
                      <div className="item-price">$ 40.00</div>
                    </figcaption>
                  </figure>
                </div>
                <div className="col-md-3">
                  <figure className="product-style">
                    <img src="assets/images/tab-item7.jpg" alt="Books" className="product-item" />
                    <button type="button" className="add-to-cart" data-product-tile="add-to-cart">Add to Cart</button>
                    <figcaption>
                      <h3>Simple way of piece life</h3>
                      <p>Armor Ramsey</p>
                      <div className="item-price">$ 40.00</div>
                    </figcaption>
                  </figure>
                </div>
              </div>
            </div>
            <div id="romantic" data-tab-content>
              <div className="row">
                <div className="col-md-3">
                  <figure className="product-style">
                    <img src="assets/images/tab-item1.jpg" alt="Books" className="product-item" />
                    <button type="button" className="add-to-cart" data-product-tile="add-to-cart">Add to Cart</button>
                    <figcaption>
                      <h3>Peaceful Enlightment</h3>
                      <p>Marmik Lama</p>
                      <div className="item-price">$ 40.00</div>
                    </figcaption>
                  </figure>
                </div>
                <div className="col-md-3">
                  <figure className="product-style">
                    <img src="assets/images/tab-item3.jpg" alt="Books" className="product-item" />
                    <button type="button" className="add-to-cart" data-product-tile="add-to-cart">Add to Cart</button>
                    <figcaption>
                      <h3>Great travel at desert</h3>
                      <p>Sanchit Howdy</p>
                      <div className="item-price">$ 40.00</div>
                    </figcaption>
                  </figure>
                </div>
                <div className="col-md-3">
                  <figure className="product-style">
                    <img src="assets/images/tab-item5.jpg" alt="Books" className="product-item" />
                    <button type="button" className="add-to-cart" data-product-tile="add-to-cart">Add to Cart</button>
                    <figcaption>
                      <h3>Life among the pirates</h3>
                      <p>Armor Ramsey</p>
                      <div className="item-price">$ 40.00</div>
                    </figcaption>
                  </figure>
                </div>
                <div className="col-md-3">
                  <figure className="product-style">
                    <img src="assets/images/tab-item7.jpg" alt="Books" className="product-item" />
                    <button type="button" className="add-to-cart" data-product-tile="add-to-cart">Add to Cart</button>
                    <figcaption>
                      <h3>Simple way of piece life</h3>
                      <p>Armor Ramsey</p>
                      <div className="item-price">$ 40.00</div>
                    </figcaption>
                  </figure>
                </div>
              </div>
            </div>
            <div id="adventure" data-tab-content>
              <div className="row">
                <div className="col-md-3">
                  <figure className="product-style">
                    <img src="assets/images/tab-item5.jpg" alt="Books" className="product-item" />
                    <button type="button" className="add-to-cart" data-product-tile="add-to-cart">Add to Cart</button>
                    <figcaption>
                      <h3>Life among the pirates</h3>
                      <p>Armor Ramsey</p>
                      <div className="item-price">$ 40.00</div>
                    </figcaption>
                  </figure>
                </div>
                <div className="col-md-3">
                  <figure className="product-style">
                    <img src="assets/images/tab-item7.jpg" alt="Books" className="product-item" />
                    <button type="button" className="add-to-cart" data-product-tile="add-to-cart">Add to Cart</button>
                    <figcaption>
                      <h3>Simple way of piece life</h3>
                      <p>Armor Ramsey</p>
                      <div className="item-price">$ 40.00</div>
                    </figcaption>
                  </figure>
                </div>
              </div>
            </div>
            <div id="fictional" data-tab-content>
              <div className="row">
                <div className="col-md-3">
                  <figure className="product-style">
                    <img src="assets/images/tab-item5.jpg" alt="Books tab-item5 " className="product-item" />
                    <button type="button" className="add-to-cart" data-product-tile="add-to-cart">Add to Cart</button>
                    <figcaption>
                      <h3>Life among the pirates</h3>
                      <p>Armor Ramsey</p>
                      <div className="item-price">$ 40.00</div>
                    </figcaption>
                  </figure>
                </div>
                <div className="col-md-3">
                  <figure className="product-style">
                    <img src="assets/images/tab-item7.jpg" alt="Books" className="product-item" />
                    <button type="button" className="add-to-cart" data-product-tile="add-to-cart">Add to Cart</button>
                    <figcaption>
                      <h3>Simple way of piece life</h3>
                      <p>Armor Ramsey</p>
                      <div className="item-price">$ 40.00</div>
                    </figcaption>
                  </figure>
                </div>
              </div>
            </div>
          </div>
        </div>{/*inner-tabs*/}
      </div>
    </div>
    <div className="row">
        <div className="col-sm-12">
          <div className="titlepage">
            <h2>Books with offer</h2>
          </div>
        </div>
      </div>
  </section>
 <section id="special-offer" className="bookshelf">
 
  <div className="container">
    <div className="row">
      <div className="inner-content">	
  
        <div className="product-list" data-aos="fade-up">
          <div className="grid product-grid ">	
          <div className="row">
			
            <figure className="product-style">
              <img src="assets/images/product-item5.jpg" alt="Books" className="product-item" />
              <button type="button" className="add-to-cart" data-product-tile="add-to-cart">Add to Cart</button>
              <figcaption>
                <h3>Simple way of piece life</h3>
                <p>Armor Ramsey</p>
                <div className="item-price">
                  <span className="prev-price">$ 50.00</span>$ 40.00</div>
              </figcaption>
            </figure>
            <figure className="product-style">
              <img src="assets/images/product-item6.jpg" alt="Books" className="product-item" />
              <button type="button" className="add-to-cart" data-product-tile="add-to-cart">Add to Cart</button>
              <figcaption>
                <h3>Great travel at desert</h3>
                <p>Sanchit Howdy</p>
                <div className="item-price">
                  <span className="prev-price">$ 30.00</span>$ 38.00</div>
              </figcaption>
            </figure>
            <figure className="product-style">
              <img src="assets/images/product-item7.jpg" alt="Books" className="product-item" />
              <button type="button" className="add-to-cart" data-product-tile="add-to-cart">Add to Cart</button>
              <figcaption>
                <h3>The lady beauty Scarlett</h3>
                <p>Arthur Doyle</p>
                <div className="item-price">
                  <span className="prev-price">$ 35.00</span>$ 45.00</div>
              </figcaption>
            </figure>
            <figure className="product-style">
              <img src="assets/images/product-item8.jpg" alt="Books" className="product-item" />
              <button type="button" className="add-to-cart" data-product-tile="add-to-cart">Add to Cart</button>
              <figcaption>
                <h3>Once upon a time</h3>
                <p>Klien Marry</p>
                <div className="item-price">
                  <span className="prev-price">$ 25.00</span>$ 35.00</div>
              </figcaption>
            </figure>
            <figure className="product-style">
              <img src="assets/images/product-item2.jpg" alt="Books" className="product-item" />
              <button type="button" className="add-to-cart" data-product-tile="add-to-cart">Add to Cart</button>
              <figcaption>
                <h3>Simple way of piece life</h3>
                <p>Armor Ramsey</p>
                <div className="item-price">$ 40.00</div>
              </figcaption>
            </figure>					
          </div>{/*grid*/}
          </div>
          </div>
      </div>{/*inner-content*/}
    </div>
  </div>
</section>

</div>

  )
}
