import  React from 'react'

class Languages extends React.Component{
    constructor(){
        super()
        this.state = {
            frontend : ['JavaScript', 'React js', 'Redux js'],
            backend : ['Node js', 'Express js'],
            designLibrary : ['Reactstrap', 'Material Design', 'MDBootstrap (React)', 'Fabric JS'],
            database : ['MongoDB', 'Mongoose js']
        }

    }

    render(){
        return(
            <section className="ftco-section about-section">
            <div className="container">
              <div className="row d-flex" data-scrollax-parent="true">
                <div className="col-md-2"></div>
                <div className="col-md-6 wrap ftco-animate">
                  <div className="about-desc">
                    <h1 className="bold-text"  style = {{marginTop : "200px"}} >LANGUAGES</h1>
                    <div className="p-5">
							<h2 class="mb-5"  style = {{marginTop : "200px"}} >LANGUAGES</h2>

                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className = "container"  >
           <div className = "row" >
		  
				<div class="exp mt-5 ftco-animate col-md-3">
							<h2 class="mb-4">FRONTEND</h2>
							{
								this.state.frontend.map(skill => {
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

				<div class="exp mt-5 ftco-animate col-md-3">
							<h2 class="mb-4">DESIGN LIBRARY</h2>
							{
								this.state.designLibrary.map(skill => {
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

				<div class="exp mt-5 ftco-animate col-md-3">
							<h2 class="mb-4">BACKEND</h2>
							{
								this.state.backend.map(skill => {
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

					<div class="exp mt-5 ftco-animate col-md-3">
					<h2 class="mb-4">DATABASE</h2>
					{
						this.state.database.map(skill => {
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
			<br></br>
			</div>
			</div>
          </section>
        )
    }
}

export default Languages