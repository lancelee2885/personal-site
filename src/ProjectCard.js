import React, { useState } from 'react';
import Collapse from 'react-bootstrap/Collapse'

function ProjectCard({ title, description, ghLink, demoLink, image }) {
  const [isShown, setIsShown] = useState(false);
  const [inProp, setInProp] = useState(false);

  const defaultStyle = {
    dispaly: 'none',
  }

  const transitionStyles = {
    entering: { display: 'none' },
    entered: { display: 'inline' },
    exiting: { dispaly: 'inline' },
    exited: { display: 'none' },
  };

  return (

    <div className="card border-primary mb-3" style={{ maxWidth: "20rem" }}>
      <div className="card-header d-flex flex-row" 
           onMouseEnter={() => setIsShown(true)}
           onMouseLeave={() => setIsShown(false)}>
        <a className='icon-link' href={ghLink}>
          <i className="fab fa-github-square"></i>
        </a>
        <a className='icon-link' href={demoLink}>
          <i className="fas fa-folder"></i>
        </a>
      </div>
      <Collapse in={isShown}>
        <div>
        <h4 className="card-title">123</h4>
        <p className="card-text">{description} 123</p>
        </div>
      </Collapse>
    </div>
  )

  {/* <div className="card-body example"
          onMouseEnter={() => setIsShown(true)}
          onMouseLeave={() => setIsShown(false)}>
          {isShown ? (
            <Transition in={isShown} timeout={300}>
              {state => (
                <>
                  <h4 className="card-title"
                    onMouseEnter={() => setIsShown(true)}
                    onMouseLeave={() => setIsShown(false)}
                    style={{
                      ...defaultStyle,
                      ...transitionStyles[state]
                    }}>123</h4>
                  <p className="card-text">{description} 123</p>
                </>
              )}
            </Transition>
          ) :
            <div className='demo'>
              <h4 className="card-title">{title} 123</h4>
              <p className="card-text">{description} 123</p>
            </div>
          }

        </div>
        <button onMouseEnter={() => setInProp(true)}
          onMouseLeave={() => setInProp(false)}>
          Click to Enter
        </button>
      </div>

    )*/}

  // <div class="container d-flex align-items-center justify-content-center position-relative flex-wrap">
  //   <div class="card d-flex position-relative flex-column">
  //     <div class='imgContainer'> 
  //     <img src='https://images.pexels.com/photos/1456268/pexels-photo-1456268.jpeg' alt='x'/> </div>
  //     <div class="content">
  //       <h2>Card One</h2>
  //       <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse eget velit tristique, sollicitudin leo viverra, suscipit neque. Aliquam ut facilisis urna, in pretium nibh. Morbi in leo in eros commodo volutpat ac sed dolor.</p>
  //     </div>
  //   </div>
  //   <div class="card d-flex position-relative flex-column">
  //     <div class='imgContainer'> <img src='https://images.pexels.com/photos/196667/pexels-photo-196667.jpeg' alt='x' /> </div>
  //     <div class="content">
  //       <h2>Card Two</h2>
  //       <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse eget velit tristique, sollicitudin leo viverra, suscipit neque. Aliquam ut facilisis urna, in pretium nibh. Morbi in leo in eros commodo volutpat ac sed dolor.</p>
  //     </div>
  //   </div>
  //   <div class="card d-flex position-relative flex-column">
  //     <div class='imgContainer'> <img src='https://images.pexels.com/photos/847483/pexels-photo-847483.jpeg' alt='x' /> </div>
  //     <div class="content">
  //       <h2>Card Three</h2>
  //       <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse eget velit tristique, sollicitudin leo viverra, suscipit neque. Aliquam ut facilisis urna, in pretium nibh. Morbi in leo in eros commodo volutpat ac sed dolor.</p>
  //     </div>
  //   </div>
  // </div>
  // )

}

export default ProjectCard