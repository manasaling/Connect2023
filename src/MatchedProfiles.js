import React from 'react';
import Layout from './Layout'
import { Link } from 'react-router-dom'

const matchedProfiles = ({location}) => {
  return (
    
    <Layout>
    <box>
      <div class="searchbar">
          <input type="text" placeholder="Search.."></input>
      </div>
      <div class="topnav">
          <Link to='/individualProfile'>Individual</Link>
          <Link to='/teamProfile'>Projects</Link>
          <a class="active" href="#matched">Matched</a>
      </div>
      <profile>
          <profilename></profilename>
      </profile>
      <profile></profile>
      <profile></profile>
      <profile></profile>
    </box>
  </Layout>
  )
}

export default matchedProfiles;