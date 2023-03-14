import React, { useState } from 'react';
import ProfileList from './ProfileList';
import './SideBar.css';

const SideBar = () => {
  const [skillsArray, setSkillsArray] = useState([]);
  const [filtersUpdated, setFiltersUpdated] = useState(false);

  const addFilterName = (event) => {
    if (event.key === 'Enter') {
      const skillsFilterInput = document.getElementById('skillsFilterInput');
      const filteredItemsDiv = document.getElementById('filteredItems');
      const skillsFilter = skillsFilterInput.value;

      const filteredItem = document.createElement('div');
      filteredItem.innerText = `${skillsFilter}`;
      filteredItemsDiv.appendChild(filteredItem);

      setSkillsArray(prevSkillsArray => [...prevSkillsArray, skillsFilter]);

      skillsFilterInput.value = '';
    }
  };

  const renderPageAgain = () => {
    setFiltersUpdated(true);
  };

  const filterArr = skillsArray.length > 0 ? [{ skills: skillsArray }] : [];

  return (
    <div>
      Name
      <input type="text" id="nameFilterInput" placeholder="Enter in Name Filters.." />
      Major
      <input type="text" id="majorFilterInput" placeholder="Enter in Major Filters.." />
      Skils
      <input type="text" id="skillsFilterInput" placeholder="Enter in Skills Filters.." onKeyUp={addFilterName} />
      Interests
      <input type="text" id="interestsFilterInput" placeholder="Enter in Interests Filters.." />

      <button id="filterButton" onClick={renderPageAgain}>
        Enter Filters
      </button>

      <div id="filteredItems">initial</div>

      {filtersUpdated && <ProfileList myObject={filterArr} />}
    </div>
  );
};

export default SideBar;


// import React, { useState } from 'react';
// import ProfileList from './ProfileList';
// import './SideBar.css';

// const SideBar = () => {


//     const [skillsArray, setSkillsArray] = useState([]);
    

//     const addFilterName = (event) => {
//         if (event.key == 'Enter') {
//             //const nameFilterInput = document.getElementById("nameFilterInput");
//             const skillsFilterInput = document.getElementById("skillsFilterInput");
//             const filteredItemsDiv = document.getElementById("filteredItems");
//             const skillsFilter = skillsFilterInput.value;
//             // const majorFilter = majorFilterInput.value;
//             // const skillsFilter = skillsFilterInput.value;
//             // const interestsFilter = interestsFilterInput.value;
    
//             const filteredItem = document.createElement('div');
//             filteredItem.innerText = `${skillsFilter}`;
//             filteredItemsDiv.appendChild(filteredItem);

//             // skillsArray.push(skillsFilter);
//             setSkillsArray(prevSkillsArray => [...prevSkillsArray, skillsFilter]);
    
//             // Clear the input fields after adding the filter
//             skillsFilterInput.value = '';
//             // majorFilterInput.value = '';
//             // skillsFilterInput.value = '';
//             // interestsFilterInput.value = '';
//         }
//         }

//         const renderPageAgain = () => {

//             console.log("we are in render");
//             // const filterArr = [];
//             // filterArr.push(skillsArray);

                          

            
//             // return (<ProfileList myObject={filterArr}> </ProfileList>);

//             const filterArr = skillsArray.length > 0 ? [{ skills: skillsArray }] : [];
//              return <ProfileList myObject={filterArr}/>;

            
//         }



//   return (
//     <div>
//         Name 
//         <input type="text" id="nameFilterInput" placeholder="Enter in Name Filters.."></input>
//         Major 
//         <input type="text" id="majorFilterInput" placeholder="Enter in Major Filters.."></input>
//         Skils 
//         <input type="text" id="skillsFilterInput" placeholder="Enter in Skills Filters.." onKeyUp={addFilterName}></input>
//         Interests 
//         <input type="text" id="interestsFilterInput" placeholder="Enter in Interests Filters.."></input>


//         <button id="filterButton" onClick={renderPageAgain}>Enter Filters</button>

//         <div id="filteredItems">initial</div>

//     </div>

    
//   );
// }

// export default SideBar;