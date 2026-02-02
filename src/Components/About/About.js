import React from 'react';
import '../About/About.css';

const About = () => {
  return (
    <section id="about" className='w-full flex flex-col justify-center pt-28 md:pt-32 px-6 md:px-12'>
      <div className='max-w-6xl mx-auto text-center'>
        <h1 className='text-3xl md:text-5xl font-bold mb-6 text-white'>About <span className='text-blue-500'>Me</span></h1>
        <p className='text-white text-base md:text-xl leading-relaxed'>
          I’m a passionate Frontend Developer with a strong foundation in
          HTML, CSS, Bootstrap, Tailwind CSS, React, and Git focused on
          building responsive and user-friendly web interfaces. I work with
          React, Tailwind CSS, and modern JavaScript, and I enjoy transforming
          ideas into clean, functional designs. I’m continuously improving my
          skills through hands-on projects and problem-solving.
        </p>
      </div>
    </section>
  );
};

export default About;
