import React from 'react';
import wbPicture from '../../img/william-barela-900.jpg'

function Main() {
  return (
    <main>
    <article className="hero">
      <div className="hero--svg-container">
        <svg viewBox="50,0,750,900" className="hero--svg">
          <image href={wbPicture} width="900" height="900"></image>
        </svg>
      </div>
        <section className="hero--text">
          <h1>Hi! I'm William.</h1>
          <p>
            I'm a Full Stack Software Engineer and a former Linux System Admin.
            Thanks for stopping by. This page is currently under construction, but is soon to be fully functional.
          </p>
        </section>
    </article>
    </main>
  )
}

export default Main;
