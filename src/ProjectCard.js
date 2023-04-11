import React from 'react';
import { MDBCol, MDBContainer, MDBRow, MDBCard, MDBCardText, MDBCardBody, MDBCardImage, MDBTypography, MDBIcon } from 'mdb-react-ui-kit';
import './ProfileCard.css';
import { Link } from "react-router-dom";
import { API,graphqlOperation } from 'aws-amplify';
import {getUsers, listUsers} from './graphql/queries';
import { useState, useEffect } from 'react';



export default function ProjectCard(props) {

  const { myObject } = props;
  console.log("in profile card");
  console.log(myObject);





  return (


    <div className='card'>
    <body>
    {/* <body class="cardInfo"> */}
    <div className="cardi">
        <div class="card-header">
            <img src={`/images2/${myObject.logo}`} alt="Profile Image" class="profile-img"></img>
        </div>
        <div class="card-body">
          <p class="name">{myObject.name}</p>
            <div class = "profile-credentials">
            <p class = "job margin-right icon-blue">{myObject.description}</p>
            <p class="job"><i className="fa fa-briefcase fa-fw w3-margin-right w3-large icon-blue"></i>{myObject.interests}</p>
            <p class="job"><i className="fa fa-asterisk fa-fw w3-margin-right icon-blue"></i>Skills Needed: {(myObject.skills).join(', ')}</p>
             
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
            <p class="count"><a href="mailto:example@example.com">Contact</a></p>
        </div>

        {/* <p><button class="profile-button"><a href="mailto:example@example.com">Contact</a></button></p> */}
    </div>
</body>
</div>
  
  );
}