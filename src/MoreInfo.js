import { useLocation } from "react-router-dom";
import IndividualProfile from "./IndividualProfile";
import './IndividualProfile.css';
import { MDBCol, MDBContainer, MDBRow, MDBCard, MDBCardText, MDBCardBody, MDBCardImage, MDBTypography, MDBIcon } from 'mdb-react-ui-kit';
function MoreInfo() {
    const location = useLocation();
    const{from} = location.state
    const{imgSrc} = from.image; 

    console.log(from);

    if (!from) {
      return <div>User information not available</div>;
    }

    return (
      <div>
        <IndividualProfile myProp={from}></IndividualProfile>
        <MDBCardImage class = "title-profile-pic"
              style={{ width: '200px',  }}
              src={imgSrc}
              alt='Generic placeholder image'
              fluid />
      </div>
    );
  }

export default MoreInfo;