import React from 'react'
import '../About/About.css'

const About = () => {
  return (
    <section className='flex flex-col items-center py-16'>
      <div className='max-w-6xl text-center'>
        <h1 className='text-4xl md:text-5xl font-bold mb-6 text-white'>About <span>Me</span></h1>
      <p className="text-white text-base md:text-2xl leading-relaxed">
          I’m a passionate Frontend Developer with a strong foundation in
          HTML, CSS, Bootstrap, Tailwind CSS, React, and Git focused on
          building responsive and user-friendly web interfaces. I work with
          React, Tailwind CSS, and modern JavaScript, and I enjoy transforming
          ideas into clean, functional designs. I’m continuously improving my
          skills through hands-on projects and problem-solving.
        </p>
    </div>
    </section>
  )
}

export default About