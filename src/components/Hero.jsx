import React from 'react'
import './Hero.css'


const Hero = () => {
  return (
    <section className="hero-wrapper">
      <div className="paddings innnerWidth flexCenter hero-container">

        <div className="hero-left">
          <div className="hero-title">
            <h1>GradeTrack</h1>
          </div>
          <div className="flexColStart hero-des">
          <h2><span>Find And Recover Your Missing Grades </span></h2>
        </div>
        <div className="flexCenter stats">
          <div className="flexColCenter stat">
            <span>
              <span>15</span>
              <span>%</span>
              </span>
            <span className="secondaryText">Missing Grade Rate</span>
          </div>
          <div className="flexColCenter stat">
            <span>
              <span>80</span>
              <span>%</span>
              </span>
            <span className="secondaryText">Resolution Success Rate</span>
          </div>
          <div className="flexColCenter stat">
            <span>
              <span>60</span>
              <span>%</span>
              </span>
            <span className="secondaryText">Student Engagement</span>
          </div>
        </div>
        </div>

  
 

        <div className="flexCenter hero-right">
          <div className="image-container">
            <img src="./hero.jpg" alt=""/>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Hero