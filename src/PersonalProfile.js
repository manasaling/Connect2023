import React from 'react';
import { MDBCol, MDBContainer, MDBRow, MDBCard, MDBCardText, MDBCardBody, MDBCardImage, MDBTypography, MDBIcon } from 'mdb-react-ui-kit';
import './PersonalProfile.css';
export default function PersonalProfile() {
  return (
    <section>
      <div class="card">
        <div class = "titlePic">
        <h1>John Doe</h1>
        <MDBCardImage
              style={{ width: '180px', borderRadius: '10px' }}
              src='https://mdbcdn.b-cdn.net/img/Photos/new-templates/bootstrap-profiles/avatar-1.webp'
              alt='Generic placeholder image'
              fluid />
        </div>
        <p class="title">CS @ UW Seattle</p>
        <p>Skills: Front End, Figma, Java</p>
        <p>Interests: Environment, Healthcare</p>
        <p><button>More Info</button></p>
        
        </div>
    </section>
  );
}