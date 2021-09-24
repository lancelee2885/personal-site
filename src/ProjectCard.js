import React, { useState } from 'react';
import { CSSTransition } from 'react-transition-group'

function ProjectCard({ title, description, ghLink, demoLink, image }) {
  const [isShown, setIsShown] = useState(false);

  var cleft = 100;
  var ctop = 100;
  var ctrans = 'translate(' + cleft + 'px, ' + ctop + 'px)';
  var css = {}
  if (isShown) {
    css = {
      transform: ctrans
    }
  }

  return (



    <div className="card border-primary mb-3" style={{ maxWidth: "20rem" }}>
      <div className="card-header d-flex flex-row">
        <a className='icon-link' href={ghLink}>
          <i className="fab fa-github-square"></i>
        </a>
        <a className='icon-link' href={demoLink}>
          <i className="fas fa-folder"></i>
        </a>
      </div>
      <div class="card-body"
        onMouseEnter={() => setIsShown(true)}
        onMouseLeave={() => setIsShown(false)}>
        {isShown && (
          <p>
            <h4 class="card-title">{title}</h4>
            <p class="card-text">Hover!</p>
          </p>
        )}
        {!isShown && (
          <p>
            <h4 class="card-title">{title}</h4>
            <p class="card-text">{description}</p>
          </p>
        )}

        <p style={css}>
          Text
        </p>

      </div>
    </div>

  )

}

export default ProjectCard