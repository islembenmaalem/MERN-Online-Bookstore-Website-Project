import React from 'react'
//import { Link } from 'react-router-dom'
import { NavLink ,useLocation} from 'react-router-dom';

export default function Header() {
  const location = useLocation();
function createT() {
  let title=""
  if ( window.location.pathname==="/about")
          {title="About"}
  if ( window.location.pathname==="/")
    {title=""}
  if ( window.location.pathname==="/service")
    {title="Service"}
    if ( window.location.pathname==="/blog")
    {title="Blog"}
  if ( window.location.pathname==="/Contact")
    {title="Contact"}
  if ( window.location.pathname==="/admin")
    {title="Admin"}
  if ( window.location.pathname==="/PolpularBooks")
    {title="Polpular Books"}
  return {
     __html: title  };
}; 




    return (
    <div>
<header className="full_bg">

  {/* header inner */}
  <div className="header">
    <div className="container">
      <div className="row">
        <div className="col-xl-3 col-lg-3 col-md-3 col-sm-3 col logo_section">
          <div className="full">
            <div className="center-desk">
              <div className="logo">
                <a href="index.html">Booksshop.org</a>
              </div>
            </div>
          </div>
        </div>
        <div className="col-xl-9 col-lg-9 col-md-9 col-sm-9">
          <nav className="navigation navbar navbar-expand-md navbar-dark ">
            <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarsExample04" aria-controls="navbarsExample04" aria-expanded="false" aria-label="Toggle navigation">
              <span className="navbar-toggler-icon" />
            </button>
            <div className="collapse navbar-collapse" id="navbarsExample04">
              <ul className="navbar-nav mr-auto">
                <li className="nav-item active">
                  <NavLink className="nav-link" to="">Home</NavLink>
                </li>
                <li className="nav-item">
                  <NavLink className="nav-link" to="PolpularBooks">Polpular Books</NavLink>
                </li>
                <li className="nav-item">
                  <NavLink className="nav-link" to="about">About</NavLink>
                </li>
                <li className="nav-item">
                  <NavLink className="nav-link" to="service">Service</NavLink>
                </li>
                <li className="nav-item">
                  <NavLink className="nav-link" to="blog">Blog</NavLink>
                </li>
                <li className="nav-item">
                  <NavLink className="nav-link" to="Contact">Contact Us</NavLink>
                </li>                
                
                <li className="nav-item">
                  <NavLink className="nav-link" to="AdminLogin">Admin</NavLink>
                </li>   
                <li className="nav-item">
                  <NavLink className="nav-link" to="Signup">Sing up</NavLink>
                </li>             
              </ul>
            </div>
            
          </nav>
        </div>
      </div>
    </div>
  </div>
  {/* end header inner */}
  {/* end header */}
  {/* banner */}
  <section className="banner_main">
    <div id="myCarousel" className="carousel slide banner" data-ride="carousel">
      <ol className="carousel-indicators">
        <li data-target="#myCarousel" data-slide-to={0} className="active" />
        <li data-target="#myCarousel" data-slide-to={1} />
        <li data-target="#myCarousel" data-slide-to={2} />
      </ol>
      <div className="carousel-inner">
        <div className="carousel-item active">
          <div className="container">
            <div className="carousel-caption  banner_po">
              <div className="row">
                <div className="col-lg-8 col-md-9 ">
                  <div className="build_box">
                  <h1>Books <span className="orang"> Collection </span></h1>
                  <h1> <span className="orang"> <div  className="orang" dangerouslySetInnerHTML={createT()} />  </span></h1>
                    <p>Welcome to our online bookstore! We offer a wide selection of books for all ages and interests. </p>
                    <NavLink className="read_more quote_btn" role="button"  to="PolpularBooks">Get A Book</NavLink>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="carousel-item">
          <div className="container">
            <div className="carousel-caption banner_po">
              <div className="row">
                <div className="col-lg-8 col-md-9 ">
                  <div className="build_box">
                    <h1>Books <span className="orang">Collection</span></h1>
                    <p>Welcome to our online bookstore! We offer a wide selection of books for all ages and interests. </p>
                    <a className="read_more quote_btn" role="button">Get A Quote</a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="carousel-item">
          <div className="container">
            <div className="carousel-caption banner_po">
              <div className="row">
                <div className="col-lg-8 col-md-9 ">
                  <div className="build_box">
                    <h1>Books <span className="orang">Collection</span></h1>
                    <p>Welcome to our online bookstore! We offer a wide selection of books for all ages and interests.</p>
                    <a className="read_more quote_btn"  role="button">Get A Quote</a>
                  </div>
                </div>
              </div>
            </div>
          </div> 
        </div>
      </div>
      <a className="carousel-control-prev" href="#myCarousel" role="button" data-slide="prev">
        <i className="fa fa-angle-left" aria-hidden="true" />
        <span className="sr-only">Previous</span>
      </a>
      <a className="carousel-control-next" href="#myCarousel" role="button" data-slide="next">
        <i className="fa fa-angle-right" aria-hidden="true" />
        <span className="sr-only">Next</span>
      </a>
    </div>
  </section>
</header>
</div>
  )}