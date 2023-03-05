import React from 'react';
import Layout from './Layout'
import { Link } from 'react-router-dom'
import './MatchedProfiles.css';
import ProfileCard from './ProfileCard';
import { API,graphqlOperation } from 'aws-amplify';
import {getUsers, listUsers} from './graphql/queries';
import { useState, useEffect } from 'react';

async function fetchUser() {

  const userMap = new Map();
  let curr_user = '';
  try {
    //const allUsers = await API.graphql({ query: queries.listUsers });
    //console.log(allUsers); // result: { "data": { "listTodos": { "items": [/* ..... */] } } }

    //Fetch a single record by its identifier
    // const oneUser = await API.graphql({
    // query: queries.getUserByUsername,
    // //variables: { id: '5c5c43e1-032a-473c-a425-d61141094381' }
    // variables: { username: "manasaling" }
    // });

    const allUsers = await API.graphql ({
      query : listUsers
    });

    console.log(allUsers);

   
    allUsers.data.listUsers.items.forEach(user => {
     // console.log(user.id, user.name);
     const userData = {
      name: user.name,
      university: user.university,
      skills: user.skills || [],
      interests: user.interests || []
  
      // add other relevant attributes here
    };
    
    userMap.set(user.id, userData);
    });

    // const oneUser = await API.graphql({
    //   query: getUsers,
    //   variables: { id: '5c5c43e1-032a-473c-a425-d61141094381' }
    //   //variables: { username: 'pranatidani' },
    //   // debug: true
    //   });

    // console.log(oneUser);
    // curr_user = (oneUser.data.getUsers.name);
    // //console.log(curr_user);

  }
   catch (err) {
      console.log("error fetching user: ", err);
  }

  return userMap;
}

const ProfileList = ({location}) => {
  const [all_user, setCurrUser] = useState([]);


  useEffect(() => {
    async function fetchData() {
      const user = await fetchUser();
      setCurrUser(user);
    }
    fetchData();
  }, []);
  fetchUser();

  //console.log(all_user);

  return (
    <div>
      <Layout></Layout>
      <div className='background'>
      <box>
      <div className='topBar'>
      <div className='header'>Connect</div>
          
          <div class="topnav">
              <Link to='/profileList'>Individual</Link>
              <Link to='/projectsList'>Projects</Link>
              <Link to ="/matched">Matched</Link>
          </div>
          <div class="searchbar">
              <input type="text" placeholder="Search.."></input>
          </div>
        </div>
        <profile>
          {[...all_user.entries()].map(([userId, userData]) => {
              //console.log(userData);
              return <ProfileCard myObject={userData}> </ProfileCard>
          })}
        </profile>
      
      </box>
    
    
      </div>
    </div>

  )
}

export default ProfileList;