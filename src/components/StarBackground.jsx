import React, {useState, useEffect } from 'react'

function StarBackground() {
    const [stars,setStars]=useState([]);
    const [metors,setMetors]=useState([]);
    useEffect(()=>{
      generateStars()
      generateMetors()
    },[]);
    const generateStars=()=>{
      const numberOfStars=Math.floor(window.innerWidth*window.innerHeight/10000);
      const newStars=[];
      for(let i=0;i<numberOfStars;i++){
        newStars.push({
          id:i,
          size:Math.random() * 3+1,
          x: Math.random() *100,
          y:Math.random()*100,
          opacity:Math.random()*0.5+0.5,
          animationDuration:Math.random()*4+2,
        })
      }

      setStars(newStars);
    }
    //generating Metors animation
    const generateMetors=()=>{
      const numberOfMetors=4;
      const newMetors=[];
      for(let i=0;i<numberOfMetors;i++){
        newMetors.push({
          id:i,
          size:Math.random() * 2+1,
          x: Math.random() *100,
          y:Math.random()*10,
          delay:Math.random()*15,
          animationDuration:Math.random()*3+3,
        })
      }

      setMetors(newMetors);
    }
  return (
    <div className='fixed inset-0 overflow-hidden pointer-events-none z-0'>
      {
        stars.map((star)=>(
          <div key={star.id} className='star animate-pulse-subtle' style={{
            width: star.size + "px",
            height: star.size + "px",
            left: star.x + "%",
            top: star.y + "%",
            opacity: star.opacity,
            animationDuration: star.animationDuration + "s",
          }}></div>
        ))
      }

{
        metors.map((metor)=>(
          <div key={metor.id} className='meteor animate-meteor' style={{
            width: metor.size * 20+ "px",
            height:metor.size  * 2+ "px",
            left: metor.x + "%",
            top: metor.y + "%",
            animationDelay:metor.delay,
            animationDuration: metor.animationDuration + "s",
          }}></div>
        ))
      }
    </div>
  )
}

export default StarBackground
