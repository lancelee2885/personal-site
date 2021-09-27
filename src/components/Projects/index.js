import React from 'react'
import { 
  ProjectsContanier, 
  ProjectsH1, 
  ProjectsWrapper, 
  ProjectsCard, 
  ProjectsIcon, 
  ProjectsH2, 
  ProjectsP } from './ProjectElements'

  import Icon1 from '../../images/svg-1.svg'
  import Icon2 from '../../images/svg-1.svg'
  import Icon3  from '../../images/svg-1.svg'
  
  function Projects() {
  return (
    <ProjectsContanier id='projects'>
      <ProjectsH1>
        My Projects
      </ProjectsH1>
      <ProjectsWrapper>
        <ProjectsCard>
          <ProjectsIcon src={Icon1} />
          <ProjectsH2>Jobly</ProjectsH2>
          <ProjectsP>Paragraph</ProjectsP>
        </ProjectsCard>
        <ProjectsCard>
          <ProjectsIcon src={Icon2} />
          <ProjectsH2>Warbler</ProjectsH2>
          <ProjectsP>Paragraph</ProjectsP>
        </ProjectsCard>
        <ProjectsCard>
          <ProjectsIcon src={Icon3} />
          <ProjectsH2>Students Mobile Portal</ProjectsH2>
          <ProjectsP>Paragraph</ProjectsP>
        </ProjectsCard>
      </ProjectsWrapper>

    </ProjectsContanier>
  )
}

export default Projects
