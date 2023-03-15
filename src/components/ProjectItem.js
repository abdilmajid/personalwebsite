import { RiExternalLinkLine } from "react-icons/ri";
import { SiGithub } from "react-icons/si";

function ProjectItem({image,name,githublink,demolink}) {
  return (
    <div className='projectItem '>
      <div style={{ backgroundImage: `url(${image})` }} className="bgImage" />
        <h1> {name} </h1>
        <div className="social">

        <a href={githublink} >
          <SiGithub/>
        </a>
        <a href={demolink}>
          <RiExternalLinkLine className="pulse"/>
        </a>
        </div>
    </div>
  );
}

export default ProjectItem