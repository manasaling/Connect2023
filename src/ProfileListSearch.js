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

    const allUsers = await API.graphql ({
      query : listUsers
    });

    //console.log(allUsers);

   
    allUsers.data.listUsers.items.forEach(user => {
     const userData = {
      name: user.name,
      university: user.university,
      skills: user.skills || [],
      interests: user.interests || []

    };
    
    userMap.set(user.id, userData);
    });

  }
   catch (err) {
      console.log("error fetching user: ", err);
  }

  return userMap;
}

export default function ProfileListSearch() {

  const [all_user, setCurrUser] = useState([]);

  useEffect(() => {
    async function fetchData() {
      const user = await fetchUser();
      setCurrUser(user);
    }
    fetchData();

    return () => setCurrUser([]);
  }, []);
  fetchUser();

  let filters = ["Java"];

  const [selectedFilters, setSelectedFilters] = useState([]);
  const [filteredItems, setFilteredItems] = useState(all_user);


  const handleFilterButtonClick = () => {
    setSelectedFilters(filters);
  };

  useEffect(() => {
    filterItems();
  }, [selectedFilters]);

  const filterItems = () => {
    // change the array to put in the right user_data information
    console.log("topof filter items");
    if (selectedFilters.length > 0) {
      let tempItems = [];
      {[...all_user.entries()].map(([userId, userData]) => {
          // checks all skills filters
          if (userData.skills[0] != null) {

            for (let i = 0; i < (userData.skills).length; i++) {

              //console.log(userData.skills.length);
              if (selectedFilters.includes((userData.skills)[i].toLowerCase())) {
                //console.log("hi");
                // console.log("user data added: " + userData);
                tempItems.add(userData);
                i = userData.skills.length;
              }

            }
            
          }
        })

      }

      setFilteredItems(tempItems);
    } else {
      setFilteredItems([...all_user]);
    }
  };

  return (
    <div>
      <script>
        setSelectedFilters(filters);
      </script>

      
      
      {/* <button onClick={() => handleFilterButtonClick()}>
          </button> */}


          
        
      <div className="items-container">

      <div className="items-container">
        {/* <script>
            console.log(filteredItems);
          </script> */}
      
          {filteredItems.map((item) => {
          
            // console.log(item); // Add this line to print out each item
            return <ProfileCard myObject={item}/>;
          })}
        </div>
        {/* {filteredItems.map((userData) => (
            console.log(userData);
            <ProfileCard myObject={userData}> </ProfileCard>
        ))} */}
      </div>
    </div>
  );
}
