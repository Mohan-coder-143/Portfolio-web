import React from 'react';
import certi from '../../Assets/Qtree Certificate Image.jpeg';

const Certificates = () => {
  return (
    <section id="certificates" className='flex flex-col pt-28 md:pt-32 px-6 md:px-12 items-center'>
      <h1 className='text-3xl md:text-5xl text-white text-center mb-12'>My <span className='text-blue-500'>Certificates</span></h1>
      
      <div className='w-full max-w-lg'>
        <img 
          src={certi} 
          alt='Certificate' 
          className='w-full h-auto rounded-xl cursor-pointer shadow-lg hover:scale-105 transition-transform duration-300'
        />
      </div>
    </section>
  );
};

export default Certificates;
