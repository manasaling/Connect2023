import React from 'react';
import { MDBCol, MDBContainer, MDBRow, MDBCard, MDBCardText, MDBCardBody, MDBCardImage, MDBTypography, MDBIcon } from 'mdb-react-ui-kit';
import './ProfileCard.css';
import { Link } from "react-router-dom";
import {getUsers, listUsers} from './graphql/queries';
import { useState, useEffect } from 'react';
import { API, Auth, Storage } from 'aws-amplify';



export default function ProfileCard(props) {

  const { myObject } = props;
  console.log("in profile card");
  console.log(myObject);

  const [imageSrc, setImageSrc] = useState(null); // state variable to store the image source

  useEffect(() => {
    console.log( Auth.configure() )
    async function getImage() {
      try {
        const imageSrc = await Storage.get(myObject.image); // retrieve the image from S3
        setImageSrc(imageSrc);
      } catch (error) {
        console.log('Error retrieving image: ', error);
      }
    }

    getImage();
  }, [myObject.image]);


  return (

    // <section>
    //    <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css"></link>
    //   <div class="profile-card">
    //   <div class = "swing">
    //   <div class = "profile-titlePic">
    //     <p class="profile-title-name">{myObject.name}</p>
    //     <MDBCardImage class = "title-profile-pic"
    //           style={{ width: '200px',  }}
    //           src='https://mdbcdn.b-cdn.net/img/Photos/new-templates/bootstrap-profiles/avatar-1.webp'
    //           alt='Generic placeholder image'
    //           fluid />
    //   </div>


    //   <div class = "profile-credentials">
    //     <p><i className="fa fa-briefcase fa-fw w3-margin-right w3-large icon-blue"></i>{myObject.university}</p>
    //     <p><i className="fa fa-asterisk fa-fw w3-margin-right icon-blue"></i>Skills: {(myObject.skills).join(', ')}</p>
    //     <p><i className="fa fa-globe fa-fw w3-margin-right icon-blue"></i>Interests: {(myObject.interests).join(', ')}</p>
    //   </div>
       
    //     <p><button class="profile-button"><Link to='/profile'>More Info</Link></button></p>
    //   </div>
    //     </div>
       
    // </section>

    
  <div className='card'>
    {/* <div className="cardInfo"> */}
      {/* <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css"></link>
      <div class = "card-info-without-button">

      <div class = "profile-titlePic">
        <p class="profile-title-name">{myObject.name}</p>
        <MDBCardImage class = "title-profile-pic"
              style={{ width: '200px',  }}
              src='https://mdbcdn.b-cdn.net/img/Photos/new-templates/bootstrap-profiles/avatar-1.webp'
              alt='Generic placeholder image'
              fluid />
        </div>
        
        <div class = "profile-credentials">
          <p><i className="fa fa-briefcase fa-fw w3-margin-right w3-large icon-blue"></i>{myObject.university}</p>
          <p><i className="fa fa-asterisk fa-fw w3-margin-right icon-blue"></i>Skills: {(myObject.skills).join(', ')}</p>
          <p><i className="fa fa-globe fa-fw w3-margin-right icon-blue"></i>Interests: {(myObject.interests).join(', ')}</p>
        </div>
      <p><button class="profile-button"><Link to='/profile'>More Info</Link></button></p>


      
    </div> */}
                <body>
                {/* <body class="cardInfo"> */}
                <div className="cardi">
                    <div class="card-header">
                        <img src="https://mdbcdn.b-cdn.net/img/Photos/new-templates/bootstrap-profiles/avatar-1.webp" alt="Profile Image" class="profile-img"></img>
                    </div>
                    <div class="card-body">
                      <p class="name">{myObject.name}</p>
                        <div class = "profile-credentials">
                          <p class="job"><i className="fa fa-briefcase fa-fw w3-margin-right icon-blue"></i>{myObject.university}</p>
                          <p class="job"><i className="fa fa-asterisk fa-fw w3-margin-right icon-blue"></i>Skills: {(myObject.skills).join(', ')}</p>
                          <p class="job"><i className="fa fa-globe fa-fw w3-margin-right icon-blue"></i>Interests: {(myObject.interests).join(', ')}</p>
                        </div>
                      {/* <a href="#" class="mail">{myObject.university}</a> */}
                       
                    </div>

                    {/* <div class="social-links">
                        <a href="#" class="fab fa-github social-icon"></a>
                        <a href="#" class="fab fa-twitter social-icon"></a>
                        <a href="#" class="fab fa-youtube social-icon"></a>
                        <a href="#" class="fab fa-linkedin social-icon"></a>
                    </div> */}

                    {/* <p><button class="profile-button"></button></p> */}

                    <div class="card-footer">
                      <Link to= "/moreInfo" state={{ from: myObject }} > Learn More </Link>
                        {/* <p class="count"><Link to='/profile'>More Info</Link></p> */}
                    </div>
                </div>
            </body>
  
    </div>
  );
}