import React from 'react'
import certi from '../../Assets/Qtree Certificate Image.jpeg';

const Certificates = () => {
  return (
    <section className='flex flex-col mt-10 items-center px-4'>
      <h1 className='text-3xl text-center md:text-5xl text-white'>My <span>Certificate</span></h1>
      <div className='certi-img mt-10'>
        <img src={certi} alt='certficate' className='w-full max-w-[450px] h-auto
            rounded-xl
            cursor-pointer
            shadow-[0_0_20px_rgba(0,101,248,0.7)]
            hover:scale-105
            transition'></img>
      </div>

    </section>
  )
}

export default Certificates