import userEvent from '@testing-library/user-event';
import React from 'react';


const IndividualProfile = () => {
    return (   
        <div>
            <link rel="stylesheet" href="C:\Users\prana\Desktop\connect_profilePage\style.css"></link>
            <link rel='stylesheet' href='https://fonts.googleapis.com/css?family=Roboto'></link>

                    <div class="w3-content w3-margin-top" style="max-width:1400px;">
                    <div class="w3-row-padding">


                    <div class="w3-third">
                    
                        <div class="w3-white w3-text-grey w3-card-4">
                        <div class="w3-display-container">
                            
                            <div class="w3-container w3-text-black">
                            <h2>Jane Doe</h2>
                            </div>
                        </div>
                        <div class="w3-container">
                            <p><i class="fa-solid fa-briefcase fa-fw w3-margin-right w3-large icon-purple"></i>Designer</p>
                            <p><i class="fa-solid fa-house fa-fw w3-margin-right w3-large icon-purple"></i>London, UK</p>
                            <p><i class="fa-solid fa-envelope fa-fw w3-margin-right w3-large icon-purple"></i>ex@mail.com</p>
                            <p><i class="fa-solid fa-phone fa-fw w3-margin-right w3-large icon-purple"></i>1224435534</p>

                            <p class="w3-large"><b><i class="fa fa-asterisk fa-fw w3-margin-right icon-blue"></i>Skills</b></p>
                            <p>Adobe Photoshop</p>
                            <div class="w3-light-grey w3-round-xlarge w3-small">
                            <div class="w3-container w3-center w3-round-xlarge connect-blue" style="width:90%">90%</div>
                            </div>
                            <p>Photography</p>
                            <div class="w3-light-grey w3-round-xlarge w3-small">
                            <div class="w3-container w3-center w3-round-xlarge connect-blue" style="width:80%">
                                <div class="w3-center w3-text-white">80%</div>
                            </div>
                            </div>
                            <p>Illustrator</p>
                            <div class="w3-light-grey w3-round-xlarge w3-small">
                            <div class="w3-container w3-center w3-round-xlarge connect-blue" style="width:75%">75%</div>
                            </div>
                            <p>Media</p>
                            <div class="w3-light-grey w3-round-xlarge w3-small">
                            <div class="w3-container w3-center w3-round-xlarge connect-blue" style="width:50%">50%</div>
                            </div>
                        

                            <p class="w3-large w3-text-theme"><b><i class="fa fa-globe fa-fw w3-margin-right icon-blue"></i>Interests</b></p>
                            <p>Healthcare</p>
                            <div class="w3-light-grey w3-round-xlarge">
                            <div class="w3-round-xlarge connect-purple" style="height:24px;width:100%"></div>
                            </div>
                            <p>Education</p>
                            <div class="w3-light-grey w3-round-xlarge">
                            <div class="w3-round-xlarge connect-purple" style="height:24px;width:55%"></div>
                            </div>
                            <p>Justice</p>
                            <div class="w3-light-grey w3-round-xlarge">
                            <div class="w3-round-xlarge connect-purple" style="height:24px;width:25%"></div>
                            </div>
                        </div>
                        </div>
                    </div>

                    <div class="w3-twothird">
                    
                        <div class="w3-container w3-card w3-white w3-margin-bottom">
                        <h2 class="w3-text-grey w3-padding-16"><i class="fa fa-suitcase fa-fw w3-margin-right w3-xxlarge icon-purple"></i>Experience</h2>
                        <div class="w3-container">
                            <h5 class="w3-opacity"><b>Front End Developer / w3schools.com</b></h5>
                            <h6 class="w3-text-black"><i class="fa fa-calendar fa-fw w3-margin-right icon-blue"></i>Jan 2015 - Current</h6>
                            <p>Lorem ipsum dolor sit amet. Praesentium magnam consectetur vel in deserunt aspernatur est reprehenderit sunt hic. Nulla tempora soluta ea et odio, unde doloremque repellendus iure, iste.</p>

                        </div>
                        <div class="w3-container">
                            <h5 class="w3-opacity"><b>Web Developer / something.com</b></h5>
                            <h6 class="w3-text-black"><i class="fa fa-calendar fa-fw w3-margin-right icon-blue"></i>Mar 2012 - Dec 2014</h6>
                            <p>Consectetur adipisicing elit. Praesentium magnam consectetur vel in deserunt aspernatur est reprehenderit sunt hic. Nulla tempora soluta ea et odio, unde doloremque repellendus iure, iste.</p>

                        </div>
                        <div class="w3-container">
                            <h5 class="w3-opacity"><b>Graphic Designer / designsomething.com</b></h5>
                            <h6 class="w3-text-black"><i class="fa fa-calendar fa-fw w3-margin-right icon-blue"></i>Jun 2010 - Mar 2012</h6>
                            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. </p>
                        </div>
                        </div>

                        <div class="w3-container w3-card w3-white">
                        <h2 class="w3-text-grey w3-padding-16"><i class="fa fa-certificate fa-fw w3-margin-right w3-xxlarge icon-purple"></i>Education</h2>
                        <div class="w3-container">
                            <h5 class="w3-opacity"><b>W3Schools.com</b></h5>
                            <h6 class="w3-text-black"><i class="fa fa-calendar fa-fw w3-margin-right icon-blue"></i>Forever</h6>
                            <p>Web Development! All I need to know in one place</p>

                        </div>
                        <div class="w3-container">
                            <h5 class="w3-opacity"><b>London Business School</b></h5>
                            <h6 class="w3-text-black"><i class="fa fa-calendar fa-fw w3-margin-right icon-blue"></i>2013 - 2015</h6>
                            <p>Master Degree</p>

                        </div>
                        <div class="w3-container">
                            <h5 class="w3-opacity"><b>School of Coding</b></h5>
                            <h6 class="w3-text-black"><i class="fa fa-calendar fa-fw w3-margin-right icon-blue"></i>2010 - 2013</h6>
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