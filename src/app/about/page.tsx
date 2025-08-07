import React from 'react'
import Intro from '../components/about/Intro'
import Education from '../components/about/Education'
import TechStack from '../components/about/TechStack'

const page = () => {
  return (
    <div>
      <Intro/>
      <Education/>
      <TechStack/>
    </div>
  )
}

export default page