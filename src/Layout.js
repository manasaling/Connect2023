import React from 'react'
import { Link } from 'react-router-dom'
import './layout.css'
import ConnectLogo from './images/connectlogo2.png'
import './App.css'

const Layout = ({children}) => {
    return (
        <>
    {/* <img src={ConnectLogo} alt="Connect Logo" id="connectLogo"></img> */}
    <img src={ConnectLogo} alt="Connect Logo" id="connectLogo"></img>
      <div class="menu">
            <Link to='/myProfile'>PROFILE</Link>
            <a href>|</a>
            <Link to='/profileListTotal'>FIND</Link>
            <a href>|</a>
            <Link to='/eventcode'>EVENTS</Link>
      </div>
            
            <main>
                {children}
            </main>
        </>
    )
}

export default Layout