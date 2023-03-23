import React from 'react';
import { MDBCol, MDBContainer, MDBRow, MDBCard, MDBCardText, MDBCardBody, MDBCardImage, MDBTypography, MDBIcon } from 'mdb-react-ui-kit';
import './ProfileCard.css';
import { Link } from "react-router-dom";
import { API,graphqlOperation } from 'aws-amplify';
import {getUsers, listUsers} from './graphql/queries';
import { useState, useEffect } from 'react';

var curr_user;

async function fetchUser() {

  const userMap = new Map();
  let curr_user = '';
  try {
    const allUsers = await API.graphql ({
      query : listUsers
    });

   
    allUsers.data.listUsers.items.forEach(user => {
     const userData = {
      name: user.name,
      university: user.university,
      skills: user.skills,
      interests: user.interests
  
    };
    
    userMap.set(user.id, userData);
    });


  }
   catch (err) {
      console.log("error fetching user: ", err);
  }

  return userMap;
}

export default function ProfileCard(props) {

  const { myObject } = props;
  console.log("in profile card");
  console.log(myObject);


  return (

    <section>
       <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css"></link>
      <div class="profile-card">
      <div class = "swing">
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
      </div>
        </div>
    </section>
  );
}