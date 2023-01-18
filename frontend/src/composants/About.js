import React from 'react'
import {useParams } from 'react-router-dom';
import {Component, useEffect, useState} from 'react'
import { NavLink} from 'react-router-dom';

export default function About() {

    
    return (
    <div>
          <div className="about">
    <div className="container ">
      <div className="row d_flex">
        <div className="col-md-12">
          <div className="titlepage">
            <h2>About Our Company</h2>
            <span>
            Welcome to our online bookstore! We offer a wide selection of books for all ages and interests.
<br/><br/>

On our homepage, you'll find featured titles, new releases, and staff picks. You can also browse our categories to find books in your favorite genres, such as mystery, romance, science fiction, and more.
<br/>
<br/>

If you're looking for a specific book, you can use the search bar at the top of the page to find it quickly. You can also filter your search by price, release date, and rating to help you find the perfect book.
<br/>
<br/>

When you're ready to make a purchase, simply add the book to your cart and proceed to checkout. We offer secure payment options and fast, reliable shipping.
<br/>
<br/>

Thank you for visiting our bookstore. We hope you find something you love!
            </span>
            <NavLink className="read_more" to="about"> Read More</NavLink>

          </div>
        </div>
        
      </div>
    </div>
  </div>
    </div>
  )
}
