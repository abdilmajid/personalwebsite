import React from 'react'
import GitHubIcon from '@material-ui/icons/GitHub';


function ProjectItem({image,name,githublink,demolink}) {
  return (
    <div className='projectItem'>
      <div style={{ backgroundImage: `url(${image})` }} className="bgImage" />
        <h1> {name} </h1>
        <a href={`url(${githublink})`}> GitHub </a>
        <a href={`url(${demolink})`}> Live Demo </a>
    </div>
  );
}

export default ProjectItem