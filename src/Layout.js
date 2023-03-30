import React from 'react'
import { Link } from 'react-router-dom'
import './layout.css'

const Layout = ({children}) => {
    return (
        <>
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