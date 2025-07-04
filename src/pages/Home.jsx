import React from 'react'
import ThemeToggle from '../components/ThemeToggle'
import StarBackground from '../components/StarBackground'
import Navbar from '../components/Navbar'
import HeroSection from '../components/HeroSection'
import AboutMe from '../components/AboutMe'
import Skills from '../components/Skills'
import Projects from '../components/Projects'
import Contact from '../components/Contact'
import { Footer } from '../components/Footer'
function Home() {
  return (
    <div className='min-h-screen bg-background text-foreground overflow-x-hidden'>
     {/* Theme Toggle */}
    {<ThemeToggle/>}
        {/* Background Effects */}
        <StarBackground/>
        {/* Navbar */}
        <Navbar/>
        {/* Main Content */}
        <main>
        <HeroSection/>
        <AboutMe/>
        <Skills/>
        <Projects/>
        <Contact/>
        </main>
        {/* Footer        */}
        <Footer/>
    </div>
  )
}

export default Home
