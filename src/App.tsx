import React from 'react'
import Header from './components/Header'
import Hero from './components/Hero'
import About from './components/About'
import Skills from './components/Skills'
import Experience from './components/Experience'
import Achievements from './components/Achievements'
import Contact from './components/Contact'
import Footer from './components/Footer'

const App = () => {
  return (
    <div className="bg-slate-900 text-white">
      <Header />
      <Hero />

      {/* Visual separator */}
      <div className="h-1 bg-gradient-to-r from-transparent via-cyan-500/30 to-transparent my-16 md:my-24 lg:my-32"></div>

      <About />

      {/* Visual separator */}
      <div className="h-1 bg-gradient-to-r from-transparent via-blue-500/30 to-transparent my-16 md:my-24 lg:my-32"></div>

      <Skills />

      {/* Visual separator */}
      <div className="h-1 bg-gradient-to-r from-transparent via-cyan-500/30 to-transparent my-16 md:my-24 lg:my-32"></div>

      <Experience />

      {/* Visual separator */}
      <div className="h-1 bg-gradient-to-r from-transparent via-blue-500/30 to-transparent my-16 md:my-24 lg:my-32"></div>

      <Achievements />

      {/* Visual separator */}
      <div className="h-1 bg-gradient-to-r from-transparent via-cyan-500/30 to-transparent my-16 md:my-24 lg:my-32"></div>

      <Contact />
      <Footer />
    </div>
  )
}

export default App
