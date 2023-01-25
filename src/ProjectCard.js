import React from 'react';
import { MDBCol, MDBContainer, MDBRow, MDBCard, MDBCardText, MDBCardBody, MDBCardImage, MDBTypography, MDBIcon } from 'mdb-react-ui-kit';
import './ProjectCard.css';
import { Link } from "react-router-dom";
export default function ProjectCard() {
  return (
    <section>
      <div class="card">
        <div class = "titlePic">
        <h1>Climate.io</h1>
        <MDBCardImage
              style={{ width: '180px', borderRadius: '10px' }}
              src='https://mdbcdn.b-cdn.net/img/Photos/new-templates/bootstrap-profiles/avatar-1.webp'
              alt='Generic placeholder image'
              fluid />
        </div>
        <p class="title">Fighting Climate Change One Plant At A Time</p>
        <p>Skills Needed: Front End, Figma, Java</p>
        <p>Track: Environment</p>
        
        <p><button><Link to='/project'>More Info</Link></button></p>
        
        </div>
    </section>
  );
}