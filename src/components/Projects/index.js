import React, { useState } from 'react'
import {
  ProjectsContanier,
  ProjectsH1,
  ProjectsWrapper,
  ProjectsCard,
  ProjectsIcon,
  ProjectsH2,
  ProjectsP
} from './ProjectElements'
import Collapse from 'react-bootstrap/Collapse'


import joblyImg from '../../images/jobly.svg'
import warblerImg from '../../images/warbler.svg'
import sisImg from '../../images/sis.svg'

/** Projects: Projects section of the page. 
 * Used react-bootstrap/Collapse for collapsing animation.
 * 
 * States:
 *  - isShown1: for determining whether a project card 
 *    should be collapsed or not depending on hover effect.
 *  - isShown2
 *  - isShown3
 * 
 * @category React Components
 * @component
 */
function Projects() {

  const [isShown1, setIsShown1] = useState(false);
  const [isShown2, setIsShown2] = useState(false);
  const [isShown3, setIsShown3] = useState(false);

  return (
    <ProjectsContanier id='projects'>
      <ProjectsH1>
        My Projects
      </ProjectsH1>
      <ProjectsWrapper>
        <ProjectsCard onMouseEnter={() => setIsShown1(true)}
          onMouseLeave={() => setIsShown1(false)}>
          <ProjectsIcon src={joblyImg} />
          <ProjectsH2>Jobly</ProjectsH2>
          <Collapse in={isShown1}>
            <ProjectsP>
              Job listing application focusing on React
              and connecting backend with Restful API.
              <hr />
              <a href='https://github.com/lancelee2885/react-jobly'>
                <i className="fab fa-github-square fa-2x iconCard"></i>
              </a>
              <a href='http://jobly-lance.surge.sh/'>
                <i class="fas fa-window-maximize fa-2x iconCard" ></i>
              </a>
            </ProjectsP>
          </Collapse>
        </ProjectsCard>
        <ProjectsCard
          onMouseEnter={() => setIsShown2(true)}
          onMouseLeave={() => setIsShown2(false)}>
          <ProjectsIcon src={warblerImg} />
          <ProjectsH2>Warbler</ProjectsH2>
          <Collapse in={isShown2}>
            <ProjectsP>
              A Twitter clone using Javascript(AJAX), Python, Flask and PostgreSQL
              <hr />
              <a href='https://github.com/lancelee2885/warbler'>
                <i className="fab fa-github-square fa-2x iconCard"></i>
              </a>
              <a href='https://lance-warbler.herokuapp.com'>
                <i class="fas fa-window-maximize fa-2x iconCard" ></i>
              </a>
            </ProjectsP>
          </Collapse>
        </ProjectsCard>
        <ProjectsCard
          onMouseEnter={() => setIsShown3(true)}
          onMouseLeave={() => setIsShown3(false)}>
          <ProjectsIcon src={sisImg} />
          <ProjectsH2>Students Mobile Portal</ProjectsH2>
          <Collapse in={isShown3}>
            <ProjectsP>
              A page designed by using SwiftUI for displaying upcoming topics of current curriculum.
              <hr />
              <a href='https://github.com/lancelee2885/mobile-rithm-SIS'>
                <i className="fab fa-github-square fa-2x iconCard"></i>
              </a>
            </ProjectsP>
          </Collapse>
        </ProjectsCard>
      </ProjectsWrapper>

    </ProjectsContanier>
  )
}

export default Projects
