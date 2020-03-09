import  React from 'react'

class Experience extends React.Component{
    constructor(){
        super()
        this.state = {
            experience : [
                {
                    name  : "DCT ACADEMY", 
                    post : "FULL STACK DEVELOPMENT (SOFTWARE TRAINEE)",
                    year : "OCT - 2019",
                    description : "Developed full-stack applications using MongoDB, mongoose, Express, ReactJS, Redux, NodeJS (MERN Stack) and explored many javascript libraries."
                },
                {
                    name  : "SNK IT SOLUTION", 
                    post : "UI / UX DESIGNER",
                    year : "MAY - 2018",
                    description : "During the internship, I worked on Graphics Designing, Game Designing, UI / UX Designing, Animations, and Motions Graphics."
                },
                {
                    name  : "GOLDENMACE", 
                    post : "WEB DEVELOPER",
                    year : "DEC - 2017",
                    description : "During the internship, I worked on Front-end Web Development, Motion Graphics Designing, Animations and Graphics Designing."
                },
                {
                    name  : "FREELANCING", 
                    post : "GRAPHICS DESIGNING",
                    year : "SINCE 2018",
                    description : "Graphics Designing Works Like Logo Design, Business Cards & Stationery, Flyers & Brochures, Social Media Design, Infographics Design, Invitations, etc."
                },
                {
                    name  : "FREELANCING", 
                    post : "VIDEO & ANIMATION",
                    year : "SINCE 2018",
                    description : "Videos and Animations Work Like Intros & Outros, Logo Animations, Slideshows Videos, Video Editing, Visual Eects, Lyric & Music Videos, Product Promotional Videos, etc"
                },

            ]
        }
    }

    render(){
        return(
           <div>
      
                <section className="ftco-section about-section"  >
            <div className="container">
              <div className="row d-flex" data-scrollax-parent="true">
                <div className="col-md-2"></div>
                <div className="col-md-6 wrap ftco-animate">
                  <div className="about-desc">
                    <h1 className="bold-text" >Experience</h1>
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
								this.state.experience.map(exe => {
									return (
										<div class="exp-wrap py-4">
                                            <div class="desc">
                                    <h4>{exe.post}<span> - {exe.name}</span> </h4>
                                    <p class="location">{exe.description}</p>
                                            </div>
                                            <div class="year">
                                    <p>{exe.year}</p>
                                            </div>
                                        </div>
									)
								})
							}

						</div>
                        
			</div>
          </section>

           </div>
        )
    }
}

export default Experience