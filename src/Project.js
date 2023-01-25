import userEvent from '@testing-library/user-event';
import React from 'react';
import './IndividualProfile.css';
import profilePicture from './images/ramenFood.jpg';
import PersonalProfile from './PersonalProfile';


const Project = () => {
//className IndividualProfile extends React.Component {
   // render() {
    return (
        <div>
            <link rel='stylesheet' href='https://fonts.googleapis.com/css?family=Roboto'></link>
            <script src="https://kit.fontawesome.com/d5a2ab1878.js" ></script>
            <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css"></link>

        <div className="w3-content w3-margin-top" style={{maxWidth:'1400px'}}>

        <div className="w3-row-padding">
        
            <div className="w3-third">
            
            <div className="w3-white w3-text-grey w3-card-4">
                <div className="w3-display-container">
                <img src={profilePicture} style={{width:'100%'}} alt="Avatar"/>
                <br/>
                <div className="w3-container w3-text-black">
                    <h2><i className= "fa-solid fa-people-group fa-fw w3-margin-right w3-xxlarge icon-purple"></i>Team Connect</h2>
                </div>
                </div>
                <div className="w3-container">
                Lorem ipsum dolor sit amet. Praesentium magnam consectetur vel in deserunt aspernatur est reprehenderit sunt hic. Nulla tempora soluta ea et odio, unde doloremque repellendus iure, iste.
                <br/>

                <h2 className="w3-text-black w3-padding-16"><i className="fa fa-suitcase fa-fw w3-margin-right w3-xxlarge icon-purple"></i>Looking For:</h2>
                <div className="w3-container">
                    Designer <br/>
                    Artist <br/>
                    Computer Engineer <br/>
                    Data Analyst <br/>
                    Curious <br/>
                    Hard Working <br/>
                    <br/>
                    <br/>
                </div>

                </div>

            </div><br/>
            
            </div>
            <div className="w3-twothird">

            
            <div className="w3-container w3-card w3-white w3-margin-bottom">
                <h2 className="w3-text-grey w3-padding-16"><i className="fa fa-suitcase fa-fw w3-margin-right w3-xxlarge icon-purple"></i>People</h2>
                
                <profile>
                    <PersonalProfile></PersonalProfile>
                </profile>
                <profile>
                    <PersonalProfile></PersonalProfile>
                </profile>
                <profile>
                    <PersonalProfile></PersonalProfile>
                </profile>
                <profile>
                    <PersonalProfile></PersonalProfile>
                </profile>
                

            </div>

            </div>
        </div>
        
        </div>
            
       
    </div>
    )
}
 
export default Project;