import userEvent from '@testing-library/user-event';
import React from 'react';
import './IndividualProfile.css';
import profilePicture from './images/ramenFood.jpg';
import { useState, useEffect } from 'react';
import { API, Auth, Storage } from 'aws-amplify';
import Layout from './Layout.js'

const IndividualProfile = (props) => {

  console.log("img received: " + props.myProp.image);
    const name = props.myProp.name;
    const uni = props.myProp.university; 


    const [imageSrc, setImageSrc] = useState(null); // state variable to store the image source

  useEffect(() => {
    console.log( Auth.configure() )
    async function getImage() {
      try {
        const imageSrc = await Storage.get(props.myProp.image); // retrieve the image from S3
        setImageSrc(imageSrc);
      } catch (error) {
        console.log('Error retrieving image: ', error);
      }
    }

    getImage();
  }, [props.myProp.image]);
 
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
                    <img src={imageSrc} alt="Profile Image" class="prof-img"></img>
                    <div className="w3-container w3-text-black">
                        <h2>{name}</h2>
                    </div>
                    </div>
                    <div className="w3-container">
                    <p className='bullet-details'><i className="fa fa-briefcase fa-fw w3-margin-right w3-large icon-purple more-info"></i>{uni}</p>
                    <p className='bullet-details' ><i className="fa fa-globe fa-fw w3-margin-right w3-large icon-purple more-info"></i>London, UK</p>
                    <p className='bullet-details'><i className="fa fa-envelope fa-fw w3-margin-right w3-large icon-purple more-info"></i>ex@mail.com</p>
                    <p className='bullet-details'><i className="fa fa-phone fa-fw w3-margin-right w3-large icon-purple more-info"></i>1224435534</p>
                    <hr/>

                    <p className="w3-large"><b><i className="fa fa-asterisk fa-fw w3-margin-right icon-blue"></i>Skills</b></p>
                    <p>{props.myProp.skills[0]}</p>
                    <div className="w3-light-grey w3-round-xlarge ">
                        <div className="w3-container w3-center w3-round-xlarge connect-blue" style={{width:'90%'}}>90%</div>
                    </div>
                    <p>{props.myProp.skills[1]}</p>
                    <div className="w3-light-grey w3-round-xlarge ">
                        <div className="w3-container w3-center w3-round-xlarge connect-blue"  style={{width:'80%'}}>
                        <div className="w3-center w3-text-white">80%</div>
                        </div>
                    </div>
                    <p>{props.myProp.skills[2]}</p>
                    <div className="w3-light-grey w3-round-xlarge">
                        <div className="w3-container w3-center w3-round-xlarge connect-blue" style={{width:'90%'}}>70%</div>
                    </div>

                    
                    <p className="w3-large w3-text-theme"><b><i className="fa fa-globe fa-fw w3-margin-right icon-blue"></i>Interests</b></p>
                    <p>{props.myProp.interests[0]}</p>
                    <div className="w3-light-grey w3-round-xlarge">
                        <div className="w3-round-xlarge connect-purple" style={{height:'24px',width:'100%'}}></div>
                    </div>
                    {/* <p>Education</p>
                    <div className="w3-light-grey w3-round-xlarge">
                        <div className="w3-round-xlarge connect-purple" style={{height:'24px',width:'55%'}}></div>
                    </div>
                    <p>Justice</p>
                    <div className="w3-light-grey w3-round-xlarge">
                        <div className="w3-round-xlarge connect-purple" style={{height:'24px',width:'25%'}}></div>
                    </div> */}
                    <br/>
                    </div>
                </div><br/>

                </div>

                <div className="w3-twothird">
                    

    <div  className="w3-container w3-card w3-white w3-margin-bottom-yee">     



           <div className = "info-card">
           <div className="w3-twothird">
                <h2 className="w3-text-grey w3-padding-16"><i className="fa fa-suitcase fa-fw w3-margin-right w3-xxlarge icon-purple"></i>Experience</h2>
                {props.myProp.experiences.map((item, index) => {
                console.log("testing " + item);
                const [jobTitle, endDate, project] = item.split('/'); // split the item into three parts
                return (
                //<div key={index} className="w3-container w3-card w3-white w3-margin-bottom">
                    <div className="w3-container">
                    <h3><b>{jobTitle}</b></h3>
                    <h6 className="w3-text-black"><i className="fa fa-calendar fa-fw w3-margin-right icon-blue"></i>{endDate}</h6>
                    <p>{project}</p>
                    <hr/>
                    </div>
               // </div>
                );
            })}
            </div>

            <div className='info-card'>


<div className="w3-twothird">
   <h2 className="w3-text-grey w3-padding-16"><i className="fa fa-certificate fa-fw w3-margin-right w3-xxlarge icon-purple"></i>Education</h2>
   {props.myProp.education.map((item, index) => {
   console.log("testing " + item);
   const [jobTitle, endDate, project] = item.split('/'); // split the item into three parts
   return (
  // <div key={index} className="w3-container w3-card w3-white w3-margin-bottom">
       <div className="w3-container">
       <h3><b>{jobTitle}</b></h3>
       <h6 className="w3-text-black"><i className="fa fa-calendar fa-fw w3-margin-right icon-blue"></i>{endDate}</h6>
       <p>{project}</p>
       <hr/>
       </div>
       
  // </div>

   
   
   );

})}
</div> 
</div>



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