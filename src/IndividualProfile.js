import userEvent from '@testing-library/user-event';
import React from 'react';
import './IndividualProfile.css';
import profilePicture from './images/ramenFood.jpg';

const IndividualProfile = () => {
//class IndividualProfile extends React.Component {
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
                    <div className="w3-container w3-text-black">
                        <h2>Jane Doe</h2>
                    </div>
                    </div>
                    <div className="w3-container">
                    <p><i className="fa fa-briefcase fa-fw w3-margin-right w3-large icon-purple"></i>Designer</p>
                    <p><i className="fa fa-globe fa-fw w3-margin-right w3-large icon-purple"></i>London, UK</p>
                    <p><i className="fa fa-envelope fa-fw w3-margin-right w3-large icon-purple"></i>ex@mail.com</p>
                    <p><i className="fa fa-phone fa-fw w3-margin-right w3-large icon-purple"></i>1224435534</p>
                    <hr/>

                    <p className="w3-large"><b><i className="fa fa-asterisk fa-fw w3-margin-right icon-blue"></i>Skills</b></p>
                    <p>Adobe Photoshop</p>
                    <div className="w3-light-grey w3-round-xlarge w3-small">
                        <div className="w3-container w3-center w3-round-xlarge connect-blue" style={{width:'90%'}}>90%</div>
                    </div>
                    <p>Photography</p>
                    <div className="w3-light-grey w3-round-xlarge w3-small">
                        <div className="w3-container w3-center w3-round-xlarge connect-blue"  style={{width:'80%'}}>
                        <div className="w3-center w3-text-white">80%</div>
                        </div>
                    </div>
                    <p>Illustrator</p>
                    <div className="w3-light-grey w3-round-xlarge w3-small">
                        <div className="w3-container w3-center w3-round-xlarge connect-blue"  style={{width:'75%'}}>75%</div>
                    </div>
                    <p>Media</p>
                    <div className="w3-light-grey w3-round-xlarge w3-small">
                        <div className="w3-container w3-center w3-round-xlarge connect-blue"  style={{width:'50%'}}>50%</div>
                    </div>
                    <br/>

                    <p className="w3-large w3-text-theme"><b><i className="fa fa-globe fa-fw w3-margin-right icon-blue"></i>Interests</b></p>
                    <p>Healthcare</p>
                    <div className="w3-light-grey w3-round-xlarge">
                        <div className="w3-round-xlarge connect-purple" style={{height:'24px',width:'100%'}}></div>
                    </div>
                    <p>Education</p>
                    <div className="w3-light-grey w3-round-xlarge">
                        <div className="w3-round-xlarge connect-purple" style={{height:'24px',width:'55%'}}></div>
                    </div>
                    <p>Justice</p>
                    <div className="w3-light-grey w3-round-xlarge">
                        <div className="w3-round-xlarge connect-purple" style={{height:'24px',width:'25%'}}></div>
                    </div>
                    <br/>
                    </div>
                </div><br/>

                </div>

                <div className="w3-twothird">
                
                <div className="w3-container w3-card w3-white w3-margin-bottom">
                    <h2 className="w3-text-grey w3-padding-16"><i className="fa fa-suitcase fa-fw w3-margin-right w3-xxlarge icon-purple"></i>Experience</h2>
                    <div className="w3-container">
                    <h3><b>Front End Developer / w3schools.com</b></h3>
                    <h6 className="w3-text-black"><i className="fa fa-calendar fa-fw w3-margin-right icon-blue"></i>Jan 2015 - Current</h6>
                    <p>Lorem ipsum dolor sit amet. Praesentium magnam consectetur vel in deserunt aspernatur est reprehenderit sunt hic. Nulla tempora soluta ea et odio, unde doloremque repellendus iure, iste.</p>
                    <hr/>
                    </div>
                    <div className="w3-container">
                    <h3><b>Web Developer / something.com</b></h3>
                    <h6 className="w3-text-black"><i className="fa fa-calendar fa-fw w3-margin-right icon-blue"></i>Mar 2012 - Dec 2014</h6>
                    <p>Consectetur adipisicing elit. Praesentium magnam consectetur vel in deserunt aspernatur est reprehenderit sunt hic. Nulla tempora soluta ea et odio, unde doloremque repellendus iure, iste.</p>
                    <hr/>
                    </div>
                    <div className="w3-container">
                    <h3><b>Graphic Designer / designsomething.com</b></h3>
                    <h6 className="w3-text-black"><i className="fa fa-calendar fa-fw w3-margin-right icon-blue"></i>Jun 2010 - Mar 2012</h6>
                    <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. </p><br/>
                    </div>
                </div>

                <div className="w3-container w3-card w3-white">
                    <h2 className="w3-text-grey w3-padding-16"><i className="fa fa-certificate fa-fw w3-margin-right w3-xxlarge icon-purple"></i>Education</h2>
                    <div className="w3-container">
                    <h3><b>W3Schools.com</b></h3>
                    <h6 className="w3-text-black"><i className="fa fa-calendar fa-fw w3-margin-right icon-blue"></i>Forever</h6>
                    <p>Web Development! All I need to know in one place</p>
                    <hr/>
                    </div>
                    <div className="w3-container">
                    <h3><b>London Business School</b></h3>
                    <h6 className="w3-text-black"><i className="fa fa-calendar fa-fw w3-margin-right icon-blue"></i>2013 - 2015</h6>
                    <p>Master Degree</p>
                    <hr/>
                    </div>
                    <div className="w3-container">
                    <h3><b>School of Coding</b></h3>
                    <h6 className="w3-text-black"><i className="fa fa-calendar fa-fw w3-margin-right icon-blue"></i>2010 - 2013</h6>
                    <p>Bachelor Degree</p><br/>
                    </div>
                </div>

                </div>
                
      
            </div>
            
       
            </div>

            <footer class="w3-container connect-blue w3-center w3-margin-top">
                <p>Find me on social media.</p>
                <i class="fa fa-facebook-official w3-hover-opacity"></i>
                <i class="fa fa-instagram w3-hover-opacity"></i>
                <i class="fa fa-snapchat w3-hover-opacity"></i>
                <i class="fa fa-pinterest-p w3-hover-opacity"></i>
                <i class="fa fa-twitter w3-hover-opacity"></i>
                <i class="fa fa-linkedin w3-hover-opacity"></i>
                <p></p>
            </footer>

            </div>
        )
    //}
}
 
export default IndividualProfile;