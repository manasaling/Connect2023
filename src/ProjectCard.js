import React from 'react';
import { MDBCol, MDBContainer, MDBRow, MDBCard, MDBCardText, MDBCardBody, MDBCardImage, MDBTypography, MDBIcon } from 'mdb-react-ui-kit';
import './ProfileCard.css';
import { Link } from "react-router-dom";
import { API,graphqlOperation } from 'aws-amplify';
import {getUsers, listUsers} from './graphql/queries';
import { useState, useEffect } from 'react';



export default function ProfileCard(props) {

  const { myObject } = props;
  console.log("in profile card");
  console.log(myObject);





  return (
  
    <div className="background">
       <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css"></link>
      <div class="card">
      <div class = "card-info-without-button">

      <div class = "profile-titlePic">
        {/* project name */}
        <p class="profile-title-name">{myObject.name}</p> 
        <MDBCardImage class = "title-profile-pic"
              style={{ width: '200px',  }}
              src={`/images2/${myObject.logo}`}
              alt='Generic placeholder image'
              fluid />
        </div>
        
        <div class = "profile-credentials">
        <p class = "project-description-name">{myObject.description}</p>
        <p><i className="fa fa-briefcase fa-fw w3-margin-right w3-large icon-blue"></i>{myObject.interests}</p>
        <p><i className="fa fa-asterisk fa-fw w3-margin-right icon-blue"></i>Skills Needed: {(myObject.skills).join(', ')}</p>
        {/* <p><i className="fa fa-globe fa-fw w3-margin-right icon-blue"></i>Interests: {(myObject.interests).join(', ')}</p> */}
        </div>
        </div>
        <p><button class="profile-button"><a href="mailto:example@example.com">Contact</a></button></p>


      
        </div>
  
    </div>
  );
}