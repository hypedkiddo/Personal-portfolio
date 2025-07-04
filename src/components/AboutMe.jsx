import { Briefcase, Code, User } from 'lucide-react'
import React from 'react'

function AboutMe() {
  return (
   <section id='about' className='py-24 px-4 relative'>
    <div className='container mx-auto max-w-5xl'>
        <h2 className='text-3xl  md:text-4xl font-bold mb-12 text-center'>
            About Me
        </h2>

        <div className='grid grid-cols-1
         md:grid-cols-2 gap-12 items-center'>
            <div className='space-y-6'>
                <h3 className='text-2xl font-semibold'>An Passionate Web developer</h3>
              <p className='text-muted-foreground text-2xl'>
  I am a passionate web developer with a strong foundation in building modern, responsive, and user-friendly web applications. My expertise spans both front-end and back-end technologies, allowing me to create seamless digital experiences from concept to deployment.
</p>
                <div className='flex flex-col sm:flex-row gap-4 pt-4 justify-center'>
                    <a href="#contact" className='cosmic-button'>
                       Get in Touch
                    </a>
                    <a href="" className='px-6 py-2 rounded-full border border-primary text-primary hover:bg-primary/10 transition-colors duration-100 '>
                      Download CV
                    </a>
                </div>
            </div>
            <div className='grid grid-cols-1 gap-6'>
                <div className='gradient-border p-6 card-hover'>
                    <div className='flex items-start gap-4'>
                        <div className='p-3 rounded-full bg-primary/10'>
                            <Code className='h-6 w-6 text-primary'/>
                        </div>
                        <div className='text-left'>
                            <h4 className='font-semibold text-lg'>Web devlopment</h4>
                            <p>
                                Creating responsive websites and web applications
                            </p>
                        </div>
                    </div>
                </div>
                 <div className='gradient-border p-6 card-hover'>
                     <div className='flex items-start gap-4'>
                        <div className='p-3 rounded-full bg-primary/10'>
                            <User className='h-6 w-6 text-primary'/>
                        </div>
                         <div className='text-left'>
                            <h4 className='font-semibold text-lg'>Problem solver</h4>
                            <p>
                                Enjoy solving coding Problems on a daily basis
                            </p>
                        </div>
                    </div>
                 </div>
                  <div className='gradient-border p-6 card-hover'>
                     <div className='flex items-start gap-4'>
                        <div className='p-3 rounded-full bg-primary/10'>
                            <Briefcase className='h-6 w-6 text-primary'/>
                        </div>
                         <div className='text-left'>
                            <h4 className='font-semibold text-lg'>Always Learning</h4>
                            <p>
                                Continuously learning new technologies to stay up to date with trends
                            </p>
                        </div>
                    </div>
                  </div>
            </div>
        </div>
    </div>
   </section>
  )
}

export default AboutMe
