import React from 'react';
import Layout from '../components/Layout'
import { Link } from 'react-router-dom'

const projectProfile = ({location}) => {
  return (
    <Layout>
      <box>
        <div class="searchbar">
            <input type="text" placeholder="Search.."></input>
        </div>
        <div class="topnav">
            <Link to='/individualProfile'>Individual</Link>
            <a class="active" href="#projects">Projects</a>
            <Link to='/matchedProfiles'>Matched</Link>
        </div>
        <profile></profile>
        <profile></profile>
      </box>
    </Layout>
  )
}

export default projectProfile;