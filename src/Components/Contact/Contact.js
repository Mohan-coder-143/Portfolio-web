import React from 'react'

const Contact = () => {
  return (
    <section className='flex flex-col max-w-6xl md:mb-10 mt-10 mx-auto px-4 pt-24'>
    <h1 className='text-3xl text-center md:text-5xl text-white'>Contact <span>Me</span></h1>

    <p className="text-center text-gray-400 mb-12">
        Feel free to reach out for job opportunities or collaborations.
      </p>

      {/* Main Content */}
      <div className="grid md:grid-cols-2 gap-10">

        {/* LEFT SIDE */}
        <div className="text-white space-y-4">
          <h2 className="text-2xl font-semibold">Let’s work together</h2>
          <p className="text-gray-400">
            I’m open to frontend developer roles, internships, and freelance work.
          </p>

          <p>
            📧 Email:  
            <span className="text-cyan-400"> mohanraj28110@gmail.com</span>
          </p>

          <p>
            📍 Location: Tiruppur, India
          </p>
        </div>

        {/* RIGHT SIDE FORM */}
        <form
          action="https://formsubmit.co/mohanraj28110@gmail.com"
          method="POST"
          className="bg-white/5 p-6 rounded-xl space-y-4"
        >

          <input
            type="text"
            name="name"
            placeholder="Enter Your Name"
            required
            className="w-full p-3 rounded bg-transparent border border-gray-500 text-white"
          />

          <input
            type="email"
            name="email"
            placeholder="Enter Your Email"
            required
            className="w-full p-3 rounded bg-transparent border border-gray-500 text-white"
          />

          <textarea
            name="message"
            placeholder="Your Message"
            rows="5"
            required
            className="w-full p-3 rounded bg-transparent border border-gray-500 text-white"
          ></textarea>

          <button
            type="submit"
            className="w-full bg-cyan-500 hover:bg-cyan-600 text-black font-semibold py-3 rounded"
          >
            Send Message
          </button>

        </form>
        
      </div>  

    </section>
  )
}

export default Contact