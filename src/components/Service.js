import React from 'react'

function Service(props){
    return(
        <section className="ftco-section"  id = "service">
        <div className="container">
          <div className="row justify-content-center mb-5 pb-5">
            <div className="col-md-7 text-center heading-section ftco-animate">
              <span>What i do</span>
              <h2>My services</h2>
            </div>
          </div>
          <div className="row">
            <div className="col-md-4 d-flex align-self-stretch ftco-animate">
              <div className="media block-6 services p-3 py-4 d-block text-center">
                <div className="icon mb-3"><span className="icon-layers"></span></div>
                <div className="media-body">
                  <h3 className="heading">UX Research</h3>
                  <h3 className="heading">Prototyping Design</h3>
                  <h3 className="heading">Responsive Design</h3>
                </div>
              </div>      
            </div>
            <div className="col-md-4 d-flex align-self-stretch ftco-animate">
              <div className="media block-6 services p-3 py-4 d-block text-center">
                <div className="icon mb-3"><span className="icon-code"></span></div>
                <div className="media-body">
                  <h3 className="heading">Frontend Development</h3>
                  <h3 className="heading">Website Development</h3>
                  <h3 className="heading">UI Design</h3>

                </div>
              </div>      
            </div>
            <div className="col-md-4 d-flex align-self-stretch ftco-animate">
              <div className="media block-6 services p-3 py-4 d-block text-center">
                <div className="icon mb-3"><span className="icon-gears"></span></div>
                <div className="media-body">
                  <h3 className="heading">Backend Development</h3>
                  <h3 className="heading">RESTful API Design</h3>
                  <h3 className="heading">Database Design</h3>
                </div>
              </div>    
            </div>
          </div>
        </div>
      </section>

    )
}

export default Service