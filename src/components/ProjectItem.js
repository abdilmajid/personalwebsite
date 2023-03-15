// import { SiGithub } from "react-icons/si";
import GitHubIcon from '@material-ui/icons/GitHub';
import Demo from'../assets/Demo.png'

// import { RiExternalLinkLine } from "react-icons/ri";

function ProjectItem({image,name,githublink,demolink}) {
  return (
    <div className='projectItem '>
      <div style={{ backgroundImage: `url(${image})` }} className="bgImage" />

        <h1> {name} </h1>
        <a href={`url(${githublink})`} className="social">
          <GitHubIcon />
        </a>
        <a href={`url(${demolink})`}>
          <img src={Demo} alt="demo" className="pulse social"/>
        </a>
    </div>
  );
}

export default ProjectItem