import React from 'react';
import { MDBCol, MDBContainer, MDBRow, MDBCard, MDBCardText, MDBCardBody, MDBCardImage, MDBTypography, MDBIcon } from 'mdb-react-ui-kit';
import './ProfileCard.css';
import { Link } from "react-router-dom";
import { API } from 'aws-amplify';
import * as queries from './graphql/queries';
import { useState, useEffect } from 'react';

var curr_user;

async function fetchUser() {

  let curr_user = '';
  try {
    //const allUsers = await API.graphql({ query: queries.listUsers });
    //console.log(allUsers); // result: { "data": { "listTodos": { "items": [/* ..... */] } } }

    //Fetch a single record by its identifier
    const oneUser = await API.graphql({
    query: queries.getUsers,
    //variables: { id: '5c5c43e1-032a-473c-a425-d61141094381' }
    variables: { id: '5c5c43e1-032a-473c-a425-d61141094381' }
    });

    curr_user = (oneUser.data.getUsers.name);
    //console.log(curr_user);

  }
   catch (err) {
      console.log("error fetching user");
  }

  return curr_user;
}

export default function PersonalProfile() {

  const [curr_user, setCurrUser] = useState('');

  useEffect(() => {
    async function fetchData() {
      const user = await fetchUser();
      setCurrUser(user);
    }
    fetchData();
  }, []);
  fetchUser();

  console.log(curr_user);
  // Simple query
  // Simple query

  // var curr_name = await fetchUser();

  // fetchUser().then(x=> {
  //   curr_name = x;
  //   return curr_name;
  // });

  // console.log(curr_name);
  
  // (async () => {
  //   curr_name = await fetchUser();
  //   console.log(curr_name);
  // })()
  // // const curr_name = fetchUser();
  // console.log(curr_name);

  return (
    <section>
      <div class="card">
        <div class = "titlePic">
        <h1>{curr_user}</h1>
        <MDBCardImage
              style={{ width: '180px', borderRadius: '10px' }}
              src='https://mdbcdn.b-cdn.net/img/Photos/new-templates/bootstrap-profiles/avatar-1.webp'
              alt='Generic placeholder image'
              fluid />
        </div>
        <p class="title">CS @ UW Seattle</p>
        <p>Skills: Front End, Figma, Java</p>
        <p>Interests: Environment, Healthcare</p>
        
        <p><button><Link to='/profile'>More Info</Link></button></p>
        
        </div>
    </section>
  );
}