import './Home.css'
import { Link } from "react-router-dom";
import React from 'react';
const Home = () => {
    return ( 
        <div className="home">
            <p className='title'>connect</p>
            <div className="button-class">
                <Link to="/login">
                    <button className='button'>LOGIN  </button>
                </Link>
                <Link to="signup">
                    <button className='button'>SIGNUP</button>
                </Link>
            </div>
        </div>
     );
}
 
export default Home;