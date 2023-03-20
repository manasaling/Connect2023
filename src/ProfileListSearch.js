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

  let selectedNameFilters = ["manasa"];
  let selectedSkillsFilters = ["java"];  
  let selectedInterestsFilters = [];

  
  const [filteredItems, setFilteredItems] = useState(all_user);
  
  // // name
  // const [selectedNameFilters, setSelectedNameFilters] = useState([]);

  // // skills
  // const [selectedSkillsFilters, setSelectedSkillsFilters] = useState([]);
  
  // // interests
  // const [selectedInterestsFilters, setSelectedInterestsFilters] = useState([]);


  const handleFilterButtonClick = () => {
    // setSelectedNameFilters(nameFilters);
    // setSelectedSkillsFilters(skillsFilters);
    // setSelectedInterestsFilters(interestsFilters);
    filterItems();
  };

  // useEffect(() => {
  //   filterItems();
  // }, [selectedNameFilters, selectedSkillsFilters, selectedInterestsFilters]);


  // const addFilterName = (event) => {
  //   if (event.key === 'Enter') {
  //     const skillsFilterInput = document.getElementById('skillsFilterInput');
  //     const filteredItemsDiv = document.getElementById('filteredItems');
  //     const indSkillFilter = skillsFilterInput.value.toLowerCase();
  //     if (!selectedSkillsFilters.includes(indSkillFilter)) {
  //       selectedSkillsFilters.push(indSkillFilter);
  //       const filteredItem = document.createElement('div');
  //       filteredItem.innerText = `${selectedSkillsFilters}`;
  //       filteredItemsDiv.appendChild(filteredItem);

  //     }
  //     // setSkillsArray(prevSkillsArray => [...prevSkillsArray, skillsFilter]);

  //     skillsFilterInput.value = '';
  //     //this.setState({reload:!this.state.reload});
  //   }
  // };

  const filterItems = () => {
    if (selectedNameFilters.length > 0  || selectedSkillsFilters.length > 0 || selectedInterestsFilters.length > 0 ) {
      let tempItems = [];
      {[...all_user.entries()].map(([userId, userData]) => {


          let alreadyAdded = false;

          //name
          if (userData.name != null && !alreadyAdded) {
            if (selectedNameFilters.includes((userData.name).toLowerCase())) {
              tempItems.push(userData);
              alreadyAdded = true;
            }
              
            }
          
          // checks all skills filters
          if (userData.skills[0] != null && !alreadyAdded) {
          for (let i = 0; i < (userData.skills).length; i++) {
              if (selectedSkillsFilters.includes((userData.skills)[i].toLowerCase())) {
                tempItems.push(userData);
                i = userData.skills.length;
                alreadyAdded = true;
              }

            }
            
          }
            // interests
            if (userData.interests[0] != null && !alreadyAdded) {
              for (let i = 0; i < (userData.interests).length; i++) {
                  if (selectedInterestsFilters.includes((userData.interests)[i].toLowerCase())) {
                    tempItems.push(userData);
                    i = userData.interests.length;
                    alreadyAdded = true;
                  }
    
                }
                
              }
                        
        })

      }
      console.log("temp items:");
      console.log([...tempItems]);
      setFilteredItems(tempItems);
    } else {
      let allUserArray = [];
      {[...all_user.entries()].map(([userId, userData]) => {
        allUserArray.push(userData);
      
      })
      console.log([...all_user]);
      setFilteredItems(allUserArray);
    }
  }
  };

  return (

    <div>

      {/* <div>
          Name
          <input type="text" id="nameFilterInput" placeholder="Enter in Name Filters.." />
          Major
          <input type="text" id="majorFilterInput" placeholder="Enter in Major Filters.." />
          Skills
          <input type="text" id="skillsFilterInput" placeholder="Enter in Skills Filters.." onKeyUp={addFilterName} />
          Interests
          <input type="text" id="interestsFilterInput" placeholder="Enter in Interests Filters.." />

          <button id="filterButton" onClick={handleFilterButtonClick()}>
            Enter Filters
          </button>

          <div id="filteredItems">initial</div>

      </div> */}
      
      <button onClick={() => handleFilterButtonClick()}>
          </button>

      <div className="items-container">

      <div className="items-container">      
          {filteredItems.map((id, item) => {
            return <ProfileCard myObject={id}/>;
          })}
        </div>
      </div>
    </div>
  );
}
