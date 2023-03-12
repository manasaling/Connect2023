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


  /*
      do we want the checkbox code to be in a seperate file that renders the whole profiles list page again if needed?
  */


  // testing some things out for tomorro

  /*
    some code for checklists:

    import React, { useState } from 'react';

    function Checklist() {
      const [selectedValues, setSelectedValues] = useState([]);

      const handleCheckboxChange = (event) => {
        const value = event.target.value;
        const isChecked = event.target.checked;

        if (isChecked) {
          setSelectedValues([...selectedValues, value]); // add the selected value to the state
        } else {
          setSelectedValues(selectedValues.filter((v) => v !== value)); // remove the unselected value from the state
        }
      };

      const handleSubmit = (event) => {
        event.preventDefault();
        console.log(selectedValues); // output the selected values to the console
        // TODO: send the selected values to the server
      };

      return (
        <form onSubmit={handleSubmit}>
          <input type="checkbox" value="option1" onChange={handleCheckboxChange} />
          <label>Option 1</label>

          <input type="checkbox" value="option2" onChange={handleCheckboxChange} />
          <label>Option 2</label>

          <input type="checkbox" value="option3" onChange={handleCheckboxChange} />
          <label>Option 3</label>

          <button type="submit">Submit</button>
        </form>
      );
    }


  */


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

              // i think we can somehow get a list of attributes for each type that we want, have them compared with what we have here without casing
              // and a check if that 'list' is empty

              // that table that comes from the checklist of the filters needs to be stored as a lower case only array

              // list names for now: skillsConstraints, interestsConstraints
              if ((skillsConstraints.length == 0 || skillsConstraints.some(value => (userData.skills).includes(value.toLowerCase()))) || (interestsConstraints.length == 0 || interestsConstraints.some(value => (userData.interests).includes(value.toLowerCase())))) {
                // this checks to see if some values of one array and in the other array, meaning we would want to include it
                return <ProfileCard myObject={userData}> </ProfileCard>
              }
          })}
        </profile>
      
      </box>
    
    
      </div>
    </div>

  )
}

export default ProfileList;