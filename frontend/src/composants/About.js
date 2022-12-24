import React from 'react'
import {useParams } from 'react-router-dom';
import {Component, useEffect, useState} from 'react'

export default function About() {

    
    return (
    <div>
          <div className="about">
    <div className="container ">
      <div className="row d_flex">
        <div className="col-md-5">
          <div className="titlepage">
            <h2>About Our Company</h2>
            <span>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco</span>
            <a className="read_more" href=""> Read More</a>
          </div>
        </div>
        <div className="col-md-7">
          <div className="about_img">
            <figure><img src="assets/images/about.png" alt="#" /></figure>
          </div>
        </div>
      </div>
    </div>
  </div>
    </div>
  )
}
