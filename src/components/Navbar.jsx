import React, { useState,useEffect } from 'react'
import {cn} from "@/lib/utils.js"
import { Menu } from 'lucide-react';
const navItems=[
  {name:"Home",href:"#hero"},
  {name:"About",href:"#about"},
  {name:"Skills",href:"#skills"},
  {name:"Projects",href:"#projects"},
  {name:"Contacts",href:"#contacts"},
]

function Navbar() {
  const [isScrolled,setIsScrolled]=useState(false);
  const [isMenuOpen,setisMenuOpen]=useState(false);
  useEffect(()=>{
    const handleScrolled=()=>{
      setIsScrolled(window.screenY > 10);
    };
    window.addEventListener("scroll",handleScrolled);
    return ()=> window.removeEventListener("scroll",handleScrolled)
  },[])
  return (
    <nav className={cn("fixed w-full z-40 transition-all duration-300", isScrolled ? "py-3 bg-background/80 background-blur-md shadow-xs" : "py-5")}>
      <div className='container flex items-center justify-between'>
       <a className='text-xl font-bold text-primary flex items-center' href='#about'>
          <span className=' text-2xl relative z-10'>
            <span className='text-glow text-foreground'>Naren`s</span> Portfolio
          </span>
       </a>

      {/* desktop nav */}

      <div className='hidden md:flex space-x-8'>
        {
          navItems.map((item,key)=>(
            <a key={key} href={item.href} className='text-2xl text-foreground/80 hover:text-primary transition-colors duration-300'>{item.name}</a>
          ))
        }
      </div>
      {/* mobile nav */}
      <button>{isMenuOpen ? <X size={24}></X> : <Menu size={24}/>}</button>
      <div className={cn('fixed inset-0 bg-background/95 backdrop-blur-md z-40 flex flex-col items-center justify-center transition-all duration-300 md:hidden ', isMenuOpen ? "opacity-100 pointer-events-auto" : "opacity-0 pointer-events-none")}>
      <div className='flex flex-col  space-y-8 text-xl'>
        {
          navItems.map((item,key)=>(
            <a key={key} href={item.href} className='text-2xl text-foreground/80 hover:text-primary transition-colors duration-300'>{item.name}</a>
          ))
        }
      </div>
      </div>
      </div>
    </nav>
  )
}

export default Navbar
