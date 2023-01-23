import React from 'react';
import Layout from './Layout'
import { Link } from 'react-router-dom'
import PersonalProfile from './PersonalProfile';
import './MatchedProfiles.css';
import IndividualProfile from './IndividualProfile';
const matchedProfiles = ({location}) => {
  return (
    
    <div className='background'>
      <Layout>
    <box>
      <div className='topBar'>
        <div class="searchbar">
            <input type="text" placeholder="Search.."></input>
        </div>
        <div class="topnav">
            <Link to='/individualProfile'>Individual</Link>
            <Link to='/teamProfile'>Projects</Link>
            <a class="active" href="#matched">Matched</a>
        </div>
      </div>
      <profile>
        <PersonalProfile></PersonalProfile>
      </profile>
      <profile>
        <PersonalProfile></PersonalProfile>
      </profile>
      <profile>
        <PersonalProfile></PersonalProfile>
      </profile>
    </box>
  </Layout>
  
    </div>

  )
}

export default matchedProfiles;