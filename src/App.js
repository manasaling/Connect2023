//import './App.css';
import Home from './Home';
import { MDBCol, MDBContainer, MDBRow, MDBCard, MDBCardText, MDBCardBody, MDBCardImage, MDBTypography, MDBIcon } from 'mdb-react-ui-kit';
import { BrowserRouter, Route, Routes} from 'react-router-dom';
import Login from './Login';
import SignUp from './SignUp';
import EventCode from './EventCode';
import UserHome from './UserHome';
import IndividualProfile from './IndividualProfile';
import Project from './Project';
import ProjectsList from './ProjectsList';
import ProfileList from './ProfileList';
import React from 'react'
import ReactDOM from 'react-dom'
import Questions from './Questions';
import MatchedProfiles from './MatchedProfiles';


function App() {
 
  
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home/>} />
          <Route path="/login" element={<Login/>} />
          <Route path="/signup" element={<SignUp/>} />
          <Route path="/eventcode" element={<EventCode/>} />
          <Route path="/userHome" element={<UserHome/>} />
          <Route path="/matched" element={<MatchedProfiles/>} />
          <Route path="/profile" element={<IndividualProfile/>} />
          <Route path="/questions" element={<Questions/>} />
          <Route path="/project" element={<Project/>} />
          <Route path="/projectsList" element={<ProjectsList/>} />
          <Route path="/profileList" element={<ProfileList/>} />
          
          
          
        </Routes>
      </BrowserRouter>

      
    </div>
  );
  // function PersonalProfile() {
  //   return (
  //     <section className="vh-100" style={{ backgroundColor: '#f4f5f7' }}>
  //       <MDBContainer className="py-5 h-100">
  //         <MDBRow className="justify-content-center align-items-center h-100">
  //           <MDBCol lg="6" className="mb-4 mb-lg-0">
  //             <MDBCard className="mb-3" style={{ borderRadius: '.5rem' }}>
  //               <MDBRow className="g-0">
  //                 <MDBCol md="4" className="gradient-custom text-center text-white"
  //                   style={{ borderTopLeftRadius: '.5rem', borderBottomLeftRadius: '.5rem' }}>
  //                   <MDBCardImage src="https://mdbcdn.b-cdn.net/img/Photos/new-templates/bootstrap-chat/ava1-bg.webp"
  //                     alt="Avatar" className="my-5" style={{ width: '80px' }} fluid />
  //                   <MDBTypography tag="h5">Marie Horwitz</MDBTypography>
  //                   <MDBCardText>Web Designer</MDBCardText>
  //                   <MDBIcon far icon="edit mb-5" />
  //                 </MDBCol>
  //                 <MDBCol md="8">
  //                   <MDBCardBody className="p-4">
  //                     <MDBTypography tag="h6">Information</MDBTypography>
  //                     <hr className="mt-0 mb-4" />
  //                     <MDBRow className="pt-1">
  //                       <MDBCol size="6" className="mb-3">
  //                         <MDBTypography tag="h6">Email</MDBTypography>
  //                         <MDBCardText className="text-muted">info@example.com</MDBCardText>
  //                       </MDBCol>
  //                       <MDBCol size="6" className="mb-3">
  //                         <MDBTypography tag="h6">Phone</MDBTypography>
  //                         <MDBCardText className="text-muted">123 456 789</MDBCardText>
  //                       </MDBCol>
  //                     </MDBRow>
  
  //                     <MDBTypography tag="h6">Information</MDBTypography>
  //                     <hr className="mt-0 mb-4" />
  //                     <MDBRow className="pt-1">
  //                       <MDBCol size="6" className="mb-3">
  //                         <MDBTypography tag="h6">Email</MDBTypography>
  //                         <MDBCardText className="text-muted">info@example.com</MDBCardText>
  //                       </MDBCol>
  //                       <MDBCol size="6" className="mb-3">
  //                         <MDBTypography tag="h6">Phone</MDBTypography>
  //                         <MDBCardText className="text-muted">123 456 789</MDBCardText>
  //                       </MDBCol>
  //                     </MDBRow>
  
  //                     <div className="d-flex justify-content-start">
  //                       <a href="#!"><MDBIcon fab icon="facebook me-3" size="lg" /></a>
  //                       <a href="#!"><MDBIcon fab icon="twitter me-3" size="lg" /></a>
  //                       <a href="#!"><MDBIcon fab icon="instagram me-3" size="lg" /></a>
  //                     </div>
  //                   </MDBCardBody>
  //                 </MDBCol>
  //               </MDBRow>
  //             </MDBCard>
  //           </MDBCol>
  //         </MDBRow>
  //       </MDBContainer>
  //     </section>
  //   );
  // }
  
}

export default App;
