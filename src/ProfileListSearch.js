import React from 'react';
import Layout from './Layout'
import { Link } from 'react-router-dom'
import './MatchedProfiles.css';
import ProfileCard from './ProfileCard';
import { API,graphqlOperation } from 'aws-amplify';
import {getUsers, listUsers} from './graphql/queries';
import { useState, useEffect } from 'react';
import SideBar from './SideBar';

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
      // TODO: add major into this
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

export default function ProfileList(props) {


  
  let skillsConstraints = [];
  const {myObject} = props; // store array of arrays
  console.log("hello");
  console.log(myObject);
  const [all_user, setCurrUser] = useState([]);
  if (myObject != null) {
    skillsConstraints = myObject[0].skills;
    skillsConstraints = Array.from(skillsConstraints);
    skillsConstraints = skillsConstraints.map(item=>item.toLowerCase());

  }
  const interestsConstraints = [];


  useEffect(() => {
    async function fetchData() {
      const user = await fetchUser();
      setCurrUser(user);
    }
    fetchData();

    return () => setCurrUser([]);
  }, []);
  fetchUser();

  


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
          {/* <div class="searchbar">
              <input type="text" placeholder="Search.."></input>
          </div> */}
        </div>
        <section className="overarchingPortion">


        <SideBar />

          {/* <div class="filterBar">
            Name 
            <input type="nameFilterInput" placeholder="Enter in Name Filters.."></input>
            Major 
            <input type="nameFilterInput" placeholder="Enter in Major Filters.."></input>
            Skils 
            <input type="nameFilterInput" placeholder="Enter in Skills Filters.."></input>
            Interests 
            <input type="nameFilterInput" placeholder="Enter in Interests Filters.."></input>


            <button onClick="renderPageAgain">Enter Filters</button>

            <div class="filteredItems">

            </div>

            
          </div> */}

          <div id="page-wrap">

          <profile>
            {[...all_user.entries()].map(([userId, userData]) => {
                let printOut = false;
                console.log(userData);

                




                // i think we can somehow get a list of attributes for each type that we want, have them compared with what we have here without casing
                // and a check if that 'list' is empty

                // that table that comes from the checklist of the filters needs to be stored as a lower case only array

                // list names for now: skillsConstraints, interestsConstraints

                // console.log(" this is the userData.skills array " + userData.skills);
                // console.log(" this is the skill constaints array " + skillsConstraints);

                if (skillsConstraints.length == 0) {
                  console.log("i am about to return the object because array size is 0 " + userData.name);
                  return <ProfileCard myObject={userData}> </ProfileCard>
                } else {

                  if (userData.skills[0] != null) {

                    for (let i = 0; i < (userData.skills).length; i++) {

                      console.log(userData.skills.length);
  
                      if (skillsConstraints.includes((userData.skills)[i].toLowerCase())) {
                        console.log("matches on " + (userData.skills)[i].toLowerCase());
                        printOut = true;
                        i = userData.skills.length;
                      } 
  
                    }
                    
                  }

                  

                }

                if (printOut == true) {
                  console.log("i am about to return the object " + userData.name);
                  return <ProfileCard myObject={userData}> </ProfileCard>
                }

                
                
                // if ((skillsConstraints.length == 0 || Array.from(skillsConstraints).some(value => (Array.from(userData.skills)).includes(value.toLowerCase()))) || (interestsConstraints.length == 0 || interestsConstraints.some(value => (userData.interests).includes(value.toLowerCase())))) {
                //   // this checks to see if some values of one array and in the other array, meaning we would want to include it
                
                //   return <ProfileCard myObject={userData}> </ProfileCard>
                // }
            })}
          </profile>

          </div>

        </section>
        
      
      </box>
    
    
      </div>
    </div>

  );
}