import React from 'react'
import { poppins } from '../layout'
import Image from 'next/image'

const About = () => {
  return (
    <div className={poppins.className}>
      <h1>About</h1>
       <Image
      src={"https://images.unsplash.com/photo-1795753350299-6a3fd87d54f3?q=80&w=663&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=NHwxMjA3fDA%3D"}
      alt="Picture of the author"
      width={500} 
      height={500}
      // blurDataURL="data:..." automatically provided
      // placeholder="blur" // Optional blur-up while loading
    />
    </div>
  )
}

export default About