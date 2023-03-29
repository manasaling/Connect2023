import React from 'react';
import Layout from './Layout'
import { Link } from 'react-router-dom'
import './MatchedProfiles.css';
import ProfileCard from './ProfileCard';
import { API,graphqlOperation } from 'aws-amplify';
import {getUsers, listUsers} from './graphql/queries';
import { useState, useEffect } from 'react';
import SideBar from './SideBar';
import './cardFilter.css'
import './Login.css'

let filtersNone = true;

async function fetchUser() {
  

  const userMap = new Map();
  let curr_user = '';
  try {

    const allUsers = await API.graphql ({
      query : listUsers
    });
   
    allUsers.data.listUsers.items.forEach(user => {
     
      if (user._deleted != true) {
        const userData = {
        name: user.name,
        university: user.university,
        skills: user.skills || [],
        interests: user.interests || [],
        image: user.image

      };

      userMap.set(user.id, userData);

    }
    
    
    });

  }
   catch (err) {
      console.log("error fetching user: ", err);
  }

  return userMap;
}

export default function ProfileListSearch() {

  window.addEventListener("DOMContentLoaded", (event) => {
    handleFilterButtonClick();
  });

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

  let selectedNameFilters = [];
  let selectedSkillsFilters = [];  
  let selectedInterestsFilters = [];

  
  const [filteredItems, setFilteredItems] = useState(all_user);
  

  const handleFilterButtonClick = () => {
    document.getElementById("defaultText").style.display = 'none';
    filterItems();
    document.getElementById('filteredItems').innerHTML = "selected filters: <br> NONE ";
    filtersNone = true;
  };

  const addNameFilter = (event) => {

    if (event.key === 'Enter') {
      if (filtersNone == true) {
        document.getElementById('filteredItems').innerHTML = "selected filters:";
      }
      filtersNone = false;
      console.log("in filter names");
      const nameFilterInput = document.getElementById('nameFilterInput');
      const filteredItemsDiv = document.getElementById('filteredItems');
      const indNameFilter = nameFilterInput.value.toLowerCase();
      if (!selectedNameFilters.includes(indNameFilter)) {
        console.log("in if statement");
        selectedNameFilters.push(indNameFilter);
        // const filteredItem = document.getElementById('filteredItem');
        // filteredItem.innerText = `${selectedSkillsFilters}`;
        filteredItemsDiv.innerHTML += "<br>" + indNameFilter;

      }
      // setSkillsArray(prevSkillsArray => [...prevSkillsArray, skillsFilter]);

      nameFilterInput.value = '';
      //this.setState({reload:!this.state.reload});
    }
  };
  
  const addSkillsFilter = (event) => {
    if (event.key === 'Enter') {
      if (filtersNone == true) {
        document.getElementById('filteredItems').innerHTML = "selected filters:";
      }
      filtersNone = false;
      console.log("in filter names");
      const skillsFilterInput = document.getElementById('skillsFilterInput');
      const filteredItemsDiv = document.getElementById('filteredItems');
      const indSkillFilter = skillsFilterInput.value.toLowerCase();
      if (!selectedSkillsFilters.includes(indSkillFilter)) {
        console.log("in if statement");
        selectedSkillsFilters.push(indSkillFilter);
        // const filteredItem = document.getElementById('filteredItem');
        // filteredItem.innerText = `${selectedSkillsFilters}`;
        filteredItemsDiv.innerHTML += "<br>" + indSkillFilter;

      }
      // setSkillsArray(prevSkillsArray => [...prevSkillsArray, skillsFilter]);

      skillsFilterInput.value = '';
      //this.setState({reload:!this.state.reload});
    }
  };

  const addInterestsFilter = (event) => {
    if (event.key === 'Enter') {
      if (filtersNone == true) {
        document.getElementById('filteredItems').innerHTML = "selected filters:";
      }
      filtersNone = false;
      console.log("in filter names");
      const interestsFilterInput = document.getElementById('interestsFilterInput');
      const filteredItemsDiv = document.getElementById('filteredItems');
      const indInterestFilter = interestsFilterInput.value.toLowerCase();
      if (!selectedInterestsFilters.includes(indInterestFilter)) {
        console.log("in if statement");
        selectedInterestsFilters.push(indInterestFilter);
        // const filteredItem = document.getElementById('filteredItem');
        // filteredItem.innerText = `${selectedSkillsFilters}`;
        filteredItemsDiv.innerHTML += "<br>" + indInterestFilter;

      }
      // setSkillsArray(prevSkillsArray => [...prevSkillsArray, skillsFilter]);

      interestsFilterInput.value = '';
      //this.setState({reload:!this.state.reload});
    }
  };

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
      <Layout></Layout>
      <div className='topBar'>
        <div className='header'>Connect</div>
          <div class="topnav">
                <Link to='/profileList'>Individual</Link>
                <Link to='/projectsList'>Projects</Link>
                <Link to ="/matched">Matched</Link>
          </div>      
        </div>
      
      <div className="backgroundCards">
     
        <div className='filterBar'>
      
            <label className="filterTitle">FILTERS</label>
            <br></br>
              <label className="filterName">Name</label>
              <input type="text" id="nameFilterInput" placeholder="Enter in Name Filters.." onKeyUp = {addNameFilter}/>
              <br></br>
              <label className="filterName">Skills</label>
              <input type="text" id="skillsFilterInput" placeholder="Enter in Skills Filters.." onKeyUp={addSkillsFilter} />
              <br></br>
              <label className="filterName">Interests</label>
              <input type="text" id="interestsFilterInput" placeholder="Enter in Interests Filters.." onKeyUp={addInterestsFilter} />
              <br></br>
              <button className="enterFilters" onClick={() => handleFilterButtonClick()}>Enter Filters</button>
              <br></br>
              <div className= "filteredItems" id="filteredItems">Selected Filters: </div>
          </div>
            
        <div className="cards-wrap">
          <div className="items-container">   
          <div className="defaultText" id="defaultText">

          <p id="letsGetStarted">Let's Get Started!</p>  
          <p id="ConnectText"><i><b>Connect</b></i> With Your Perfect Team Today</p> 
          <button id="defaultButton" onClick={handleFilterButtonClick}>Display Participants</button>

          </div>
          

            {filteredItems.map((id, item) => {
              return <ProfileCard myObject={id}/>;
            })}
          </div>
        </div>
        
      </div>
      
      
      {/* <button onClick={() => handleFilterButtonClick()}>
          </button> */}

      <div className="items-container">

      
      </div>

    </div>


  );
}
