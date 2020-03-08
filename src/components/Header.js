import React from 'react'
import logoImage from '../images/person_1.jpg'


function Header(props){
    return(
        <header>
        <div className="container">
          <div className="row">
            <div className="col-md-12">
              <div className="colorlib-navbar-brand">
                <a className="colorlib-logo" href="index.html"><span className="logo-img" style = {{backgroundImage :`url(${logoImage})`}} ></span>Pravin Goswami</a>
              </div>
              {/* <a href="#" className="js-colorlib-nav-toggle colorlib-nav-toggle"><i></i></a> */}
            </div>
          </div>
        </div>
      </header>
    )
}

export default Header

