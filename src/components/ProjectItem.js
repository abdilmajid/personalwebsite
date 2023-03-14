import { SiGithub } from "react-icons/si";
import { FcLink } from "react-icons/fc";
import { RiExternalLinkFill } from "react-icons/ri";
import { RiExternalLinkLine } from "react-icons/ri";

function ProjectItem({image,name,githublink,demolink}) {
  return (
    <div className='projectItem'>
      <div style={{ backgroundImage: `url(${image})` }} className="bgImage" />
        <h1> {name} </h1>
        <a href={`url(${githublink})`}><SiGithub className="icons"/></a>
        <a href={`url(${demolink})`}><RiExternalLinkFill className="icons"/></a>
        <a href={`url(${demolink})`}><RiExternalLinkLine className="icons"/></a>
        <a href={`url(${demolink})`}><FcLink className="icons"/></a>
    </div>
  );
}

export default ProjectItem