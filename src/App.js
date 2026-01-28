import './App.css';
import './index.css'
import Home from './Components/Home/Home';
import About from './Components/About/About';
import Skills from './Components/Skills/Skills';
import Projects from './Components/Projects/Projects';
import Services from './Components/Services/Services';
import Certificates from './Components/Certificates/Certificates';
import Contact from './Components/Contact/Contact';
import Navbar from './Components/Navbar/Navbar';
import { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";



function App() {
  useEffect(() => {
    AOS.init({
      duration: 800,
      once: true,
      easing: "ease-in-out",
      offset:120,
    });
  }, []);

  return (
    <>
    <Navbar/>
    <section id="home" className='min-h-screen scroll-mt-28'>
      <div data-aos='fade-left' >
        <Home />
      </div>        
      </section>

      <section id="about" className='min-h-screen scroll-mt-28' >
        <div data-aos='fade-right' data-aos-delay="200">
        <About />  
        </div>
      </section>

      <section id="skills" className='min-h-screen scroll-mt-28' >
        <div data-aos='zoom-in' data-aos-delay="200">
          <Skills />
        </div>
      </section>

      <section id="projects" className='min-h-[100svh] mt-10 scroll-mt-28' >
        <div data-aos='fade-up' data-aos-delay="200">
          <Projects />
        </div>
      </section>

      <section id="certificates" className='min-h-[100svh] scroll-mt-28' >
        <div data-aos='fade-left' data-aos-delay="200">
          <Certificates />
        </div>
      </section>

      <section id="services" className='min-h-[100svh] scroll-mt-28'>
        <div data-aos='fade-right' data-aos-delay="200">
          <Services />
        </div>
      </section>

      <section id="contact" className='min-h-screen scroll-mt-28'>
        <div data-aos='fade-up' data-aos-delay="200">
          <Contact />
        </div>
        

        
      </section>
      <a href="#home" className="fixed bottom-6 right-6 z-50 
                                bg-cyan-500 
                                hover:bg-cyan-600 
                                text-black 
                                 p-3 
                                 rounded-full 
                                 shadow-lg 
                               transition 
                              duration-300
  "
>
  ↑
</a>
      
    </>
  );
}

export default App;
