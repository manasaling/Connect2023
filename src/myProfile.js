import userEvent from '@testing-library/user-event';
import React from 'react';
import './IndividualProfile.css';
import profilePicture from './images/betty.jpg';
import Layout from './Layout.js'

const IndividualProfile = () => {
//class IndividualProfile extends React.Component {
   // render() {
        return (
            
            <div>
                <Layout></Layout>
                <br></br>
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
                        <h2>Betty Kloss</h2>
                        <br></br>
                    </div>
                    </div>
                    <div className="w3-container">
                    <p><i className="fa fa-briefcase fa-fw w3-margin-right w3-large icon-purple"></i>Designer</p>
                    <p><i className="fa fa-globe fa-fw w3-margin-right w3-large icon-purple"></i>London, UK</p>
                    <p><i className="fa fa-envelope fa-fw w3-margin-right w3-large icon-purple"></i>shanedon@mail.com</p>
                    <p><i className="fa fa-phone fa-fw w3-margin-right w3-large icon-purple"></i>4250008535</p>
                    <hr/>

                    <p className="w3-large"><b><i className="fa fa-asterisk fa-fw w3-margin-right icon-blue"></i>Skills</b></p>
                    <br></br>
                    <p>Adobe Photoshop</p>
                    <div className="w3-light-grey w3-round-xlarge w3-small">
                        <div className="w3-container w3-center w3-round-xlarge connect-blue" style={{width:'90%'}}>90%</div>
                    </div>
                    <br></br>
                    <p>Photography</p>
                    <div className="w3-light-grey w3-round-xlarge w3-small">
                        <div className="w3-container w3-center w3-round-xlarge connect-blue"  style={{width:'80%'}}>
                        <div className="w3-center w3-text-white">80%</div>
                        </div>
                    </div>
                    <br></br>
                    <p>Illustrator</p>
                    <div className="w3-light-grey w3-round-xlarge w3-small">
                        <div className="w3-container w3-center w3-round-xlarge connect-blue"  style={{width:'75%'}}>75%</div>
                    </div>
                    <br></br>
                    <p>Media</p>
                    <div className="w3-light-grey w3-round-xlarge w3-small">
                        <div className="w3-container w3-center w3-round-xlarge connect-blue"  style={{width:'50%'}}>50%</div>
                    </div>
                    <br/>

                    <p className="w3-large w3-text-theme"><b><i className="fa fa-globe fa-fw w3-margin-right icon-blue"></i>Interests</b></p>
                    <br></br>
                    <p>Healthcare</p>
                    <div className="w3-light-grey w3-round-xlarge">
                        <div className="w3-round-xlarge connect-purple" style={{height:'24px',width:'100%'}}></div>
                    </div>
                    <br></br>
                    <p>Education</p>
                    <div className="w3-light-grey w3-round-xlarge">
                        <div className="w3-round-xlarge connect-purple" style={{height:'24px',width:'55%'}}></div>
                    </div>
                    <br></br>
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
                    <h3><b>Front End Developer / DataSector</b></h3>
                    <h6 className="w3-text-black"><i className="fa fa-calendar fa-fw w3-margin-right icon-blue"></i>Jan 2015 - Current</h6>
                    <p>I have been working as a front end developer for now 7 years. I work specifically on the main website for DataSector, implementing accessibility for all parties involved. </p>
                    <hr/>
                    </div>
                    <div className="w3-container">
                    <h3><b>Web Developer / Dream-Works </b></h3>
                    <h6 className="w3-text-black"><i className="fa fa-calendar fa-fw w3-margin-right icon-blue"></i>Mar 2012 - Dec 2014</h6>
                    <p>Prior to DataSector, I worked as a Web Developer at DreamWorks, working with Node to build the application from bottom up. I worked with a team of 3 others, showcasing strong collaboration abilities. </p>
                    <hr/>
                    </div>
                    <div className="w3-container">
                    <h3><b>Graphic Designer / Create Today</b></h3>
                    <h6 className="w3-text-black"><i className="fa fa-calendar fa-fw w3-margin-right icon-blue"></i>Jun 2010 - Mar 2012</h6>
                    <p>I began my career working at CreateNow. I worked on the login feature for CreateNow, building a seamless and effective method + UI for users to use. I built on feedback and was flexible with my work. I brought user count up by 200%. </p><br/>
                    </div>
                </div>

                <div className="w3-container w3-card w3-white">
                    <h2 className="w3-text-grey w3-padding-16"><i className="fa fa-certificate fa-fw w3-margin-right w3-xxlarge icon-purple"></i>Education</h2>
                    <div className="w3-container">
                    <h3><b>University of Toronto</b></h3>
                    <h6 className="w3-text-black"><i className="fa fa-calendar fa-fw w3-margin-right icon-blue"></i>2018-2020</h6>
                    <p>I got my Masters in Computer Science from the University of Toronto. I graduated with honors. I researched under Dr. Chris Pan, in the Accessible Design Lab. I focussed on building websites for Blind users. </p>
                    <hr/>
                    </div>
                    <div className="w3-container">
                    <h3><b>London Business School</b></h3>
                    <h6 className="w3-text-black"><i className="fa fa-calendar fa-fw w3-margin-right icon-blue"></i>2012 - 2016</h6>
                    <p>I got my bachelors in Human Computer Design and Engineering, graduating Summa Cum Luade. I was heavily involved in Design for London, an organization that built websites for small businesses around the area.  </p>
                    <hr/>
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