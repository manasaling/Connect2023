import React from 'react';
import { MDBCol, MDBContainer, MDBRow, MDBCard, MDBCardText, MDBCardBody, MDBCardImage, MDBTypography, MDBIcon } from 'mdb-react-ui-kit';
import './ProfileCard.css';
import { Link } from "react-router-dom";
import {getUsers, listUsers} from './graphql/queries';
import { useState, useEffect } from 'react';
import { API, Auth, Storage } from 'aws-amplify';



export default function TestPC(props) {

  const { myObject } = props;
  console.log("in profile card");
  console.log(myObject);
  console.log("image is found" + myObject.image);
  return (

  <div className='card'>
                <body>
                {/* <body class="cardInfo"> */}
                {/*<div className="overarching_card">*/}
                <div className="cardi">
                    <div class="card-header">
                      <Link to= "/moreInfo" state={{ from: myObject }} >
                        <img src={`./images2/${myObject.image}`}  class="profile-img"></img>
                        {console.log("test image again" + `./images/${myObject.image}`)}
                      </Link>
                     
                        
                    </div>
                    <div class="card-body">
                      <p class="name">{myObject.name}</p>
                        <div class = "profile-credentials">
                          <p class="college"><p className="fa fa-briefcase fa-fw w3-margin-right icon-blue"></p><b>{myObject.university}</b></p>
                          <label><p class="job"><p className="fa fa-asterisk fa-fw w3-margin-right icon-blue"></p><b>Skills:</b> {(myObject.skills).join(', ')}</p></label>
                          <p class="job"><p className="fa fa-globe fa-fw w3-margin-right icon-blue"></p><b>Interests:</b> {(myObject.interests).join(', ')}</p>
                        </div>
                      {/* <a href="#" class="mail">{myObject.university}</a> */}
                    </div>


                    
                </div>

                <div>
                    {/* <div class="card-footer"> */}
                      {/*<Link to= "/moreInfo" state={{ from: myObject }} > Learn More </Link>
                        {/* <p class="count"><Link to='/profile'>More Info</Link></p> */}
                    {/* </div> */}
                </div>
              {/*  </div> */}
            </body> 
  
    </div>
  );
}