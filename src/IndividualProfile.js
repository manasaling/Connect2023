import userEvent from '@testing-library/user-event';
import React from 'react';
import './IndividualProfile.css';


const IndividualProfile = () => {
    return (   
        <div>
            <link rel="stylesheet" href="C:\Users\prana\Desktop\connect_profilePage\style.css"></link>
            <link rel='stylesheet' href='https://fonts.googleapis.com/css?family=Roboto'></link>

                    <div className="w3-content w3-margin-top">
                    <div className="w3-row-padding">


                    <div className="w3-third">
                    
                        <div className="w3-white w3-text-grey w3-card-4">
                        <div className="w3-display-container">
                            
                            <div className="w3-container w3-text-black">
                            <h2>Jane Doe</h2>
                            </div>
                        </div>
                        <div className="w3-container">
                            <p><i className="fa-solid fa-briefcase fa-fw w3-margin-right w3-large icon-purple"></i>Designer</p>
                            <p><i className="fa-solid fa-house fa-fw w3-margin-right w3-large icon-purple"></i>London, UK</p>
                            <p><i className="fa-solid fa-envelope fa-fw w3-margin-right w3-large icon-purple"></i>ex@mail.com</p>
                            <p><i className="fa-solid fa-phone fa-fw w3-margin-right w3-large icon-purple"></i>1224435534</p>

                            <p className="w3-large"><b><i className="fa fa-asterisk fa-fw w3-margin-right icon-blue"></i>Skills</b></p>
                            <p>Adobe Photoshop</p>
                            <div className="w3-light-grey w3-round-xlarge w3-small">
                            <div className="w3-container w3-center w3-round-xlarge connect-blue">90%</div>
                            </div>
                            <p>Photography</p>
                            <div className="w3-light-grey w3-round-xlarge w3-small">
                            <div className="w3-container w3-center w3-round-xlarge connect-blue" >
                                <div className="w3-center w3-text-white">80%</div>
                            </div>
                            </div>
                            <p>Illustrator</p>
                            <div className="w3-light-grey w3-round-xlarge w3-small">
                            <div className="w3-container w3-center w3-round-xlarge connect-blue">75%</div>
                            </div>
                            <p>Media</p>
                            <div className="w3-light-grey w3-round-xlarge w3-small">
                            <div className="w3-container w3-center w3-round-xlarge connect-blue">50%</div>
                            </div>
                        

                            <p className="w3-large w3-text-theme"><b><i className="fa fa-globe fa-fw w3-margin-right icon-blue"></i>Interests</b></p>
                            <p>Healthcare</p>
                            <div className="w3-light-grey w3-round-xlarge">
                            <div className="w3-round-xlarge connect-purple" ></div>
                            </div>
                            <p>Education</p>
                            <div className="w3-light-grey w3-round-xlarge">
                            <div className="w3-round-xlarge connect-purple" ></div>
                            </div>
                            <p>Justice</p>
                            <div className="w3-light-grey w3-round-xlarge">
                            <div className="w3-round-xlarge connect-purple"></div>
                            </div>
                        </div>
                        </div>
                    </div>

                    <div className="w3-twothird">
                    
                        <div className="w3-container w3-card w3-white w3-margin-bottom">
                        <h2 className="w3-text-grey w3-padding-16"><i className="fa fa-suitcase fa-fw w3-margin-right w3-xxlarge icon-purple"></i>Experience</h2>
                        <div className="w3-container">
                            <h5 className="w3-opacity"><b>Front End Developer / w3schools.com</b></h5>
                            <h6 className="w3-text-black"><i className="fa fa-calendar fa-fw w3-margin-right icon-blue"></i>Jan 2015 - Current</h6>
                            <p>Lorem ipsum dolor sit amet. Praesentium magnam consectetur vel in deserunt aspernatur est reprehenderit sunt hic. Nulla tempora soluta ea et odio, unde doloremque repellendus iure, iste.</p>

                        </div>
                        <div className="w3-container">
                            <h5 className="w3-opacity"><b>Web Developer / something.com</b></h5>
                            <h6 className="w3-text-black"><i className="fa fa-calendar fa-fw w3-margin-right icon-blue"></i>Mar 2012 - Dec 2014</h6>
                            <p>Consectetur adipisicing elit. Praesentium magnam consectetur vel in deserunt aspernatur est reprehenderit sunt hic. Nulla tempora soluta ea et odio, unde doloremque repellendus iure, iste.</p>

                        </div>
                        <div className="w3-container">
                            <h5 className="w3-opacity"><b>Graphic Designer / designsomething.com</b></h5>
                            <h6 className="w3-text-black"><i className="fa fa-calendar fa-fw w3-margin-right icon-blue"></i>Jun 2010 - Mar 2012</h6>
                            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. </p>
                        </div>
                        </div>

                        <div className="w3-container w3-card w3-white">
                        <h2 className="w3-text-grey w3-padding-16"><i className="fa fa-certificate fa-fw w3-margin-right w3-xxlarge icon-purple"></i>Education</h2>
                        <div className="w3-container">
                            <h5 className="w3-opacity"><b>W3Schools.com</b></h5>
                            <h6 className="w3-text-black"><i className="fa fa-calendar fa-fw w3-margin-right icon-blue"></i>Forever</h6>
                            <p>Web Development! All I need to know in one place</p>

                        </div>
                        <div className="w3-container">
                            <h5 className="w3-opacity"><b>London Business School</b></h5>
                            <h6 className="w3-text-black"><i className="fa fa-calendar fa-fw w3-margin-right icon-blue"></i>2013 - 2015</h6>
                            <p>Master Degree</p>

                        </div>
                        <div className="w3-container">
                            <h5 className="w3-opacity"><b>School of Coding</b></h5>
                            <h6 className="w3-text-black"><i className="fa fa-calendar fa-fw w3-margin-right icon-blue"></i>2010 - 2013</h6>
                            <p>Bachelor Degree</p>
                        </div>
                        </div>


                    </div>
                    

                    </div>


                    </div>
            
            
        </div>

     );
}
 
export default IndividualProfile;