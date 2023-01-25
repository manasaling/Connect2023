import React from 'react'
import { Link } from 'react-router-dom'
import './layout.css'

const Layout = ({children}) => {
    return (
        <>
      <div class="menu">
            
            <Link to='/profile'>PROFILE</Link>
            <a href>|</a>
            <Link to='/team'>TEAM</Link>
            <a href>|</a>
            <Link to='/individualProfile'>FIND</Link>
            <a href>|</a>
            <Link to='/signup'>INTERESTS</Link>
            <a href>|</a>
            <Link to='/login'>EVENTS</Link>
      </div>
            
            <main>
                {children}
            </main>
        </>
    )
}

export default Layout