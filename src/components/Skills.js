import  React from 'react'

class Skills extends React.Component{
    constructor(){
        super()
        this.state = {
            skills : ['Full Stack Web Development', 'Git and GitHub', 'RESTfull API Design & Development', 'Mobile First Application', 'User Authentication with JWT', 'User Experience Design', 'User Interface Design', 'Low and High Fidelity Prototyping', 'Front-end Development', 'Motions Graphics', 'Graphics Designing', '2D & 3D Animations']
        }
    }

    render(){
        return(
           <div>
                <section className="ftco-section about-section">
            <div className="container">
              <div className="row d-flex" data-scrollax-parent="true">
                <div className="col-md-2"></div>
                <div className="col-md-6 wrap ftco-animate">
                  <div className="about-desc">
                    <h1 className="bold-text">SKILLS</h1>
                    <div className="p-5">
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className = "container" >
          
				<div class="exp mt-5 ftco-animate">
							<h2 class="mb-4"></h2>
							{
								this.state.skills.map(skill => {
									return (
										<div class="exp-wrap py-4">
										<div class="desc">
											<h4> {skill} </h4>
										</div>
									</div>
									)
								})
							}

						</div>
			</div>
          </section>
          <br></br>
          <br></br>
          <br></br>
           </div>
        )
    }
}

export default Skills