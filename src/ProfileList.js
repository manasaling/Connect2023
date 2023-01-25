import React from 'react';
import Layout from './Layout'
import { Link } from 'react-router-dom'
import './MatchedProfiles.css';
import ProfileCard from './ProfileCard';
const ProfileList = ({location}) => {
  return (
    <div>
      <Layout></Layout>
      <div className='background'>
      <box>
      <div className='topBar'>
          
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
          <ProfileCard> </ProfileCard>
        </profile>
        <profile>
        <ProfileCard> </ProfileCard>
        </profile>
        <profile>
        <ProfileCard> </ProfileCard>
        </profile>
        <profile>
        <ProfileCard> </ProfileCard>
        </profile>
        <profile>
        <ProfileCard> </ProfileCard>
        </profile>
      </box>
    
    
      </div>
    </div>

  )
}

export default ProfileList;