import React from "react"
import "./courses.css"
import { online } from "../../dummydata"
import Heading from "../common/heading/Heading"

const OnlineCourses = () => {
  return (
    <>
      <section className='online'>
        <div className='container'>
          <Heading subtitle='COURSES' title='Upcoming Courses' />
          <div className='content grid3'>
            {online.map((val) => (
              <div className='box'>
                <div className='img'>
                  <img src={val.cover} />
                  <img src={val.hoverCover} alt='' className='show' />
                </div>
                <h1>{val.courseName}</h1>
              
              </div>
            ))}
          </div>
        </div>
      </section>
      <br></br>
      {/* <Heading subtitle='FreeTube' title='Ask Your Doubts in comments' /> */}
    </>
  )
}

export default OnlineCourses
