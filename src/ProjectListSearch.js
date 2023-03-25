import React from 'react';
import Layout from './Layout'
import { Link } from 'react-router-dom'
import './MatchedProfiles.css';
import ProjectCard from './ProjectCard';
import { API,graphqlOperation } from 'aws-amplify';
import {getUsers, listUsers} from './graphql/queries';
import { useState, useEffect } from 'react';
import SideBar from './SideBar';
import './cardFilter.css'
import companyPicture from './images/fashionCompany.png';


async function fetchUser() {

  const userMap = new Map();
  let curr_user = '';
  try {

      /*
    hard coding the projects data:
    needs project name, project category, 
  */

    const userData1 = {name: "Textbook Find", interests: "Education Technology", skills: ["Figma", "Program Manager"], logo: "textbookLogo.jpg", description: "Helping students find textbooks more easily at a lower cost."};
    const userData2 = {name: "Friends Together", interests: "Social", skills: ["App Development"], logo: "friendsLogo.jpg", description: "Finding your best friends through an IOS app"};
    const userData3 = {name: "Matching Clothes", interests: "Fashion", skills: ["Machine Learning", "Figma"], logo: "fashionCompany.png", description: "A way to tell you what to wear with what you have!"};

    userMap.set(1, userData1);
    userMap.set(2, userData2);
    userMap.set(3, userData3);

  }
   catch (err) {
      console.log("error fetching project: ", err);
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
  let selectedInterestsFilters = []; // this is category

  
  const [filteredItems, setFilteredItems] = useState(all_user);
  

  const handleFilterButtonClick = () => {
    filterItems();
    document.getElementById('filteredItems').innerHTML = "Selected Filters: ";
  };

  const addNameFilter = (event) => {
    if (event.key === 'Enter') {
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
            if (userData.interests != null && !alreadyAdded) {
              
                  if (selectedInterestsFilters.includes((userData.interests).toLowerCase())) {
                    tempItems.push(userData);
                    alreadyAdded = true;
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
      <body onLoad="handleFilterButtonClick()"></body>
        <div className='filterBar'>
            Project Name
            <input type="text" id="nameFilterInput" placeholder="Enter in Project Name.." onKeyUp = {addNameFilter}/>
            <br></br>
            Skills Needed
            <input type="text" id="skillsFilterInput" placeholder="Enter in Skills Needed Filters.." onKeyUp={addSkillsFilter} />
            <br></br>
            Category of Project
            <input type="text" id="interestsFilterInput" placeholder="Enter in Project Category Filters.." onKeyUp={addInterestsFilter} />
            <br></br>
            <button onClick={() => handleFilterButtonClick()}>Enter Filters</button>
            <br></br>
            <div id="filteredItems">Selected Filters: </div>

        </div>
        <div className="items-container">      
          {filteredItems.map((id, item) => {
            return <ProjectCard myObject={id}/>;
          })}
        </div>
      </div>
      
      
      {/* <button onClick={() => handleFilterButtonClick()}>
          </button> */}

      <div className="items-container">

      
      </div>
    </div>
  );
}
