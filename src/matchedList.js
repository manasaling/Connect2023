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
import TestPC from './TestPC';

let filtersNone = true;

async function fetchUser() {

  const userMap = new Map();
  let curr_user = '';
  try {

      /*
    hard coding the projects data:
    needs project name, project category, 
  */

    const userData1 = {name: "Jay Sharma", university: "Boston University", skills: ["Java", "Python", "UI/UX"], interests: ["Skiing", "Waterpolo"], image: "JaySharma.JPG"};
    const userData2 = {name: "Pranati Dani", university: "University of Washington", skills: ["Java", "React", "UI/UX"], interests: ["Dance"], image: "friendsLogo.jpg"};
    const userData3 = {name: "Sahana Sasikumar", university: "University of California", skills: ["Design", "Figma", "UI/UX"], interests: ["Education"], image: "fashionCompany.png"};
    const userData4 = {name: "Saloni Ramya", university: "Seattle University", skills: ["React", "Python", "Backend"], interests: ["Dance"], image: "connectedconvo.jpg"};




    userMap.set(1, userData1);
    userMap.set(2, userData2);
    userMap.set(3, userData3);
    userMap.set(4, userData4);


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
        {/* <div className='header'>Connect</div> */}
          <div class="topnav">
                <Link to='/profileListTotal'>Individual</Link>
                <Link to='/projectsList'>Projects</Link>
                <Link to='/matchedList'>Matched</Link>
                
          </div>      
        </div>
      
      <div className="backgroundCards">
  
        <div className='filterBar'>
        <label className="filterTitle">FILTERS</label>
            <br></br>
              <label className="filterName"> Name</label>
              <input type="text" id="nameFilterInput" placeholder="Enter in Participant Name.." onKeyUp = {addNameFilter}/>
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

          <p id="letsGetStarted">Who is your perfect match?</p>  
          <p id="ConnectText"><i><b>Connect</b></i> With the List we Carefully Curated for YOU</p> 
          <br></br>
          <button id="defaultButton" onClick={handleFilterButtonClick} >Display Connect's Matches </button>

          </div>
          

            {filteredItems.map((id, item) => {
              return <TestPC myObject={id}/>;
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