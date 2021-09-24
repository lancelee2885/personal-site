import React from 'react';
import { Link } from "react-router-dom";

import ProjectCard from './ProjectCard'

function Home() {
  console.log("Home Renders");


  return (
    <div>
      <h3>Welcome</h3>
      <h5>This is currently a placeholder page</h5>
      <div>
        <ProjectCard title="Jobly" description="Jobs" ghLink="https://www.google.com" demoLink="test.com"/>
      </div>
    </div>

  )
}

export default Home