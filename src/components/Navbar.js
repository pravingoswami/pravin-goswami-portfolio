import React from 'react'
import bannerImage from '../images/author-2.jpg'
import {Link} from 'react-router-dom'


function Navbar(props){
    return (
        <nav id="colorlib-main-nav" role="navigation">
      <a href="#" className="js-colorlib-nav-toggle colorlib-nav-toggle active"><i></i></a>
      <div className="js-fullheight colorlib-table">
        <div className="img" style = {{backgroundImage : `url(${bannerImage})`}} ></div>
        <div className="colorlib-table-cell js-fullheight">
          <div className="row no-gutters">
            <div className="col-md-12 text-center">
              <h1 className="mb-4"><a href="index.html" className="logo">Pravin Goswami</a></h1>
              <ul>
                <li><a><Link to = "/" ><span><small>01</small>Home</span></Link></a></li>
                <li><a><Link to = "/about" ><span><small>02</small>Resume</span></Link></a></li>
                <li><a href="#service"><span><small>03</small>Services</span></a></li>
                <li><a href="portfolio.html"><span><small>04</small>Portfolio</span></a></li>
                <li><a href="blog.html"><span><small>05</small>Blog</span></a></li>
                <li><a href="contact.html"><span><small>06</small>Contact</span></a></li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </nav>
    )
}

export default Navbar