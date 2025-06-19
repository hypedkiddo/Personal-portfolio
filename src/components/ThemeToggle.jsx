import { Moon, Sun } from 'lucide-react';
import React, { useState } from 'react'
import { cn } from '../lib/utils';
//At the end of the day Its the cars standing at your park ,how big is your house ,and how beautiful is your wife that matters..
function ThemeToggle() {
    const[isDarkMode,setIsDarkMode]=useState(true);
    //making of a toggletheme function
    const toggleTheme=()=>{
        if(isDarkMode){
            document.documentElement.classList.remove("dark");
            setIsDarkMode(false);
            }
        else{
            document.documentElement.classList.add("dark");
            setIsDarkMode(true);
        }
    }


  return (
    <button onClick={toggleTheme} className={cn("fixed max-sm:hidden top-5 right-5 z-50 p-2 rounded-full transition-colors duration-300",
    "focus:outlin-hidden"
    )}>
         {isDarkMode ? (
                <Sun className="h-6 w-6 text-yellow-300" />
            ) : (
                <Moon className="h-6 w-6 text-blue-900" />
            )}
        </button>
  )
}

export default ThemeToggle
