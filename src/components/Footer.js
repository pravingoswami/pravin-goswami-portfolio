import React from 'react'

function Footer(props){
    return(
        <footer className="ftco-footer ftco-bg-dark ftco-section">
        <div className="container">
          <div className="row mb-5 justify-content-center">
            <div className="col-md-5 text-center">
              <div className="ftco-footer-widget mb-5">
                <ul className="ftco-footer-social list-unstyled">
                  <li className="ftco-animate"><a href="https://github.com/pravingoswami" target="_blank"  ><span className="icon-github" ></span></a></li>
                  <li className="ftco-animate"><a href="https://www.linkedin.com/in/pravin-goswami-712865114/" target="_blank" ><span className="icon-linkedin"></span></a></li>
                  <li className="ftco-animate"><a href="https://www.behance.net/pravingoswami"><span className="icon-behance" target="_blank"  ></span></a></li>
                  <li className="ftco-animate"><a href="https://dribbble.com/goswami4737"><span className="icon-dribbble" target="_blank"  ></span></a></li>
                </ul>
              </div>
              <div className="ftco-footer-widget">
                <h2 className="mb-3">Contact Me</h2>
                <p className="h3 email"><a href="#">goswami4737@email.com</a></p>
              </div>
            </div>
          </div>
          <div className="row">
            <div className="col-md-12 text-center">
            </div>
          </div>
        </div>
      </footer>
    )
}

export default Footer