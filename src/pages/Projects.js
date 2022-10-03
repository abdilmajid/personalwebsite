import React from 'react'
import ProjectItem from '../components/ProjectItem'
import FaceRecApp from '../assets/Proj1/Proj1_07face1.png'
import ShoppingApp from '../assets/Proj2/01HomePage.png'
import ShowApp from '../assets/Proj3/Showtracker.jpeg'
import "../styles/Projects.css";

function Projects() {
  return (
    <div className='projects'>
      <h1> My Project</h1> 
      <div className='projectList'>
        <ProjectItem name="Face Recognition App" image={FaceRecApp}/>
        <ProjectItem name="Shopping Site" image={ShoppingApp}/>
        <ProjectItem name="Show Tracker Site" image={ShowApp}/>
      </div>
    </div>
    );
  }
  
  export default Projects;