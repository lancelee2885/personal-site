import React from 'react'

function Projects() {
  return (
    <ProjectsContanier id='projects'>
      <ProjectsH1>
        My Projects
      </ProjectsH1>
      <ProjectsWrapper>
        <ProjectsCard>
          <ProjectIcon src={Icon1}/>
          <ProjectsH2>Jobly</ProjectsH2>
          <ProjectsP>Paragraph</ProjectsP>
        </ProjectsCard>
        <ProjectsCard>
          <ProjectIcon src={Icon2}/>
          <ProjectsH2>Warbler</ProjectsH2>
          <ProjectsP>Paragraph</ProjectsP>
        </ProjectsCard>
        <ProjectsCard>
          <ProjectIcon src={Icon3}/>
          <ProjectsH2>Students Mobile Portal</ProjectsH2>
          <ProjectsP>Paragraph</ProjectsP>
        </ProjectsCard>
      </ProjectsWrapper>

    </ProjectsContanier>
  )
}

export default Projects
