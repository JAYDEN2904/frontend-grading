import React from 'react'

import './Header.css'
const Header = () => {
  return (
    <section className="h-wrapper">
      <div className="flexCenter paddings innerWidth h-container">
        <h1>GradeTrack</h1>

        <div className="flexCenter h-menu">
          <a href='/'>Home</a>
          <a href='/'>About</a>
          <a href='/'>Contact</a>
          <a href='/'>Help</a>
          <a href='/'>GetStarted</a>
          <button className='button'><a href='/'>Log In</a></button>
        </div>
      </div>
    </section>
  )
}

export default Header