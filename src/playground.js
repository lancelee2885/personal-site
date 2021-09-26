import React, { useState } from 'react';
import { CSSTransition, TransitionGroup, Transition } from 'react-transition-group';

function ProjectCard({ title, description, ghLink, demoLink, image }) {
  const [isShown, setIsShown] = useState(false);
  const [inProp, setInProp] = useState(false);

  const defaultStyle = {
    transition: `opacity 300ms ease-in-out`,
    opacity: 0,
  }

  const transitionStyles = {
    entering: { opacity: 1 },
    entered: { opacity: 1 },
    exiting: { opacity: 0 },
    exited: { opacity: 0 },
  };

  return (

//     
//   <div class="card-header">Header</div>
//   <div class="card-body">
//     <h4 class="card-title">Primary card title</h4>
//     <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
//   </div>
// </div>


<div className="card border-primary mb-3" style={{maxWidth: '20rem'}}>      
<Transition in={inProp} timeout={500}>
        {state => (
          <p style={{...defaultStyle, ...transitionStyles[state]}}> 123123 </p>
        )}
      </Transition>
      <button onMouseEnter={() => setInProp(true)}
      onMouseLeave={() => setInProp(false)}>
        Click to Enter
      </button>
    </div>

  )

}

export default ProjectCard