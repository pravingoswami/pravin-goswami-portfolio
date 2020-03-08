import React from 'react'

class Work extends React.Component{

    constructor(){
        super()
        this.state = {
            work : [
                {
                header : "MERN APP",
                title : "MECHANIC ON WHEEL",
                description : "This application is about receiving mechanical help on the road. In a situation like a breakdown or run out of fuel through this application you can contact a person regarding the issue of breakdown.",
                link : "https://github.com/pravingoswami/mechanic-on-wheel-full-stack-mern-app",
                image : "https://media.istockphoto.com/photos/auto-mechanic-service-and-repair-picture-id652660058?k=6&m=652660058&s=612x612&w=0&h=kaPNUKxm6-DVr_OEs5fOjeXpe5hfESqc-NLwKVHswek="
            },
            {
                header : "MERN APP",
                title : "ONLINE VIDEO PLATFORM",
                description : "An online video platform, Where the platform is divided into multiple categories and sub-categories, Where you can customize your playlist and you can keep track of views and comments on the videos.",
                link : "https://github.com/pravingoswami/online-video-platform",
                image : "https://wallpapercave.com/wp/wp4001466.jpg",
                order : "order-2"
            },
            {
                header : "MERN APP",
                title : "TICKET MASTER APP",
                description : "This web application is a simple ticket managing app where the user can generate a ticket and also manage the status of the ticket, departments,            employees, and customers.",
                link : "https://github.com/pravingoswami/ticket-mster-app-backend",
                image : "https://images.unsplash.com/photo-1539627831859-a911cf04d3cd?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&w=1000&q=80",
            },
            {
                header : "MERN APP",
                title : "NOTES APP",
                description : "This web application features of managing daily tasks and keeping daily reports of an individual or an industry, where the task can be a dierentiated     basis on color and you can pin your important task and manage those tasks with user authentication.",
                link : "https://github.com/pravingoswami/google-keep-notes-fullstack-mern-app",
                image : "https://www.ecopetit.cat/wpic/mpic/151-1517774_background-sticky-notes-design.jpg",
                order : "order-2"

            },
            {
                header : "FRONTEND APP",
                title : "E - LEARNING APP",
                description : "This web application features of reading interview questions for different types of languages like JavaScript,  React Js, ExpressJS, and Node Js.",
                link : "https://github.com/pravingoswami/interview-question-answer-app-with-redux",
                image : "https://wallpaperaccess.com/full/1426870.png"

            },
            {
                header : "FRONTEND APP",
                title : "BLOG UI APP",
                description : "This Web application builds with React & Redux to work with RESTfull APIs. Different types of UI screen for Authors, Posts, and Comments of different users.",
                link : "https://github.com/pravingoswami/blog-ui-with-redux",
                image : "https://356labs.com/wp-content/uploads/2019/04/356labs_Prezi_How-to-insert-and-edit-images-and-background_Blog.png",
                order : "order-2"
            }
        ]
        }

    }

    render(){
        return(
            <section className="ftco-section">
            <div className="container">
              <div className="row justify-content-center mb-5 pb-5">
                <div className="col-md-7 text-center heading-section ftco-animate">
                  <span>Portfolio</span>
                  <h2>Checkout a few of my works</h2>
                </div>
              </div>
              <div className="row no-gutters">

                {
                    this.state.work.map(work => {
                        return(
                            <div className="block-3 d-md-flex ftco-animate" data-scrollax-parent="true">
                            <a href={work.link} target = "_blank" className= {`image d-flex justify-content-center align-items-center ${work.order && work.order}`} style = {{backgroundImage : `url(${work.image})`}} data-scrollax=" properties: { translateY: '-30%'}">
                              <div className="icon d-flex text-center justify-content-center align-items-center">
                                <span className="icon-search"></span>
                              </div>
                            </a>
                            <div className="text">
                        <h4 className="subheading">{work.header}</h4>
                        <h2 className="heading"><a href={work.link} target = "_blank">{work.title}</a></h2>
                        <p>{work.description}</p>
                              <p><a  href={work.link} target = "_blank" >View Project</a></p>
                            </div>
                          </div>
                        )
                    })
                }
            </div>
            </div>
          </section>
        )
    }

}

export default Work