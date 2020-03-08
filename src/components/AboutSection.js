import React from 'react'
import sideImage from '../images/author-1.jpg'

function AboutSection(props){
    return(
        <section className="ftco-section about-section">
        <div className="container">
          <div className="row d-flex" data-scrollax-parent="true">
            <div className="col-md-4 author-img" style = {{backgroundImage : `url(${sideImage})`, height : "700px"}} data-scrollax=" properties: { translateY: '-70%'}"></div>
            <div className="col-md-2"></div>
            <div className="col-md-6 wrap ftco-animate">
              <div className="about-desc">
                <h1 className="bold-text">About</h1>
                <div className="p-5">
                  <h2 className="mb-5">Hi! I'm Pravin Goswami</h2>
                  <p>I am a full stack developer & designer.
                    Ready to turn your ideas into implementation, whether it is a development, UX research, UI design or motion graphics designing.</p>
                  <p><a href="#">Checkout my resume</a></p>
                  <ul className="ftco-footer-social list-unstyled mt-4">
                    <li><a href="https://github.com/pravingoswami" target="_blank"  ><span className="icon-github" ></span></a></li>
                    <li><a href="https://www.linkedin.com/in/pravin-goswami-712865114/" target="_blank" ><span className="icon-linkedin"></span></a></li>
                    <li><a href="https://www.behance.net/pravingoswami"><span className="icon-behance" target="_blank"  ></span></a></li>
                    <li><a href="https://dribbble.com/goswami4737"><span className="icon-dribbble" target="_blank"  ></span></a></li>
                  </ul>
                  <h5>Contact me here!</h5>
                  <p>Email: <a href="#">goswami4737@gmail.com</a></p>
                  <p>Phone: <a href="#">+91 9638204963</a></p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    )
}

export default AboutSection