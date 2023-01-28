import React from 'react';
import Layout from './Layout'
import { Link } from 'react-router-dom'
import './MatchedProfiles.css';
import ProjectCard from './ProjectCard';
const ProjectsList = ({location}) => {
  return (
    
    <div className='background'>
      <Layout></Layout>
      <box>
    <div className='topBar'>
    <div className='header'>Connect</div>
        <div class="topnav">
            <Link to='/profileList'>Individual</Link>
            <Link to='/projectsList'>Projects</Link>
            <Link to ="/matched">Matched</Link>
            
        </div>
        <div class="searchbar">
                <input type="text" placeholder="Search.."></input>
            </div> 
      </div>
      <profile>
        <ProjectCard></ProjectCard>
      </profile>
      <profile>
        <ProjectCard></ProjectCard>
      </profile>
      <profile>
        <ProjectCard></ProjectCard>
      </profile>
      <profile>
        <ProjectCard></ProjectCard>
      </profile>
     
    </box>
  
  
    </div>

  )
}

export default ProjectsList;