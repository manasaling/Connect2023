import React from 'react';
import ProfileList from './ProfileList';
import './SideBar.css';

const SideBar = () => {


    const skillsArray = [];
    

    const addFilterName = (event) => {
        if (event.key == 'Enter') {
            //const nameFilterInput = document.getElementById("nameFilterInput");
            const skillsFilterInput = document.getElementById("skillsFilterInput");
            const filteredItemsDiv = document.getElementById("filteredItems");
            const skillsFilter = skillsFilterInput.value;
            // const majorFilter = majorFilterInput.value;
            // const skillsFilter = skillsFilterInput.value;
            // const interestsFilter = interestsFilterInput.value;
    
            const filteredItem = document.createElement('div');
            filteredItem.innerText = `${skillsFilter}`;
            filteredItemsDiv.appendChild(filteredItem);

            skillsArray.push(skillsFilter);
    
            // Clear the input fields after adding the filter
            skillsFilterInput.value = '';
            // majorFilterInput.value = '';
            // skillsFilterInput.value = '';
            // interestsFilterInput.value = '';
        }
        }

        const renderPageAgain = () => {

            console.log("we are in render");
            const filterArr = [];
            filterArr.push(skillsArray);

                          

            
            return (<ProfileList myObject={filterArr}> </ProfileList>);

            
        }



    // document.addEventListener('DOMContentLoaded', function() {

    //       // code to run when the element is clicked
    //       const nameFilterInput = document.getElementById('nameFilterInput');
    //       const majorFilterInput = document.getElementById('majorFilterInput');
    //       const skillsFilterInput = document.getElementById('skillsFilterInput');
    //       const interestsFilterInput = document.getElementById('interestsFilterInput');
    //       const filteredItemsDiv = document.getElementById('filteredItems');
      
    //       nameFilterInput.addEventListener('keyup', addFilterName);
    //     //   majorFilterInput.addEventListener('keyup', addFilter);
    //     //   skillsFilterInput.addEventListener('keyup', addFilter);
    //     //   interestsFilterInput.addEventListener('keyup', addFilter);
      
    //       function addFilterName(event) {
    //       if (event.key == 'Enter') {
    //           const nameFilter = nameFilterInput.value;
    //           const majorFilter = majorFilterInput.value;
    //           const skillsFilter = skillsFilterInput.value;
    //           const interestsFilter = interestsFilterInput.value;
      
    //           const filteredItem = document.createElement('div');
    //           filteredItem.innerText = `Name: ${nameFilter}, Major: ${majorFilter}, Skills: ${skillsFilter}, Interests: ${interestsFilter}`;
    //           filteredItemsDiv.appendChild(filteredItem);
      
    //           // Clear the input fields after adding the filter
    //           nameFilterInput.value = '';
    //           majorFilterInput.value = '';
    //           skillsFilterInput.value = '';
    //           interestsFilterInput.value = '';
    //       }
    //       }

    //   });




  return (
    <div>
        Name 
        <input type="text" id="nameFilterInput" placeholder="Enter in Name Filters.."></input>
        Major 
        <input type="text" id="majorFilterInput" placeholder="Enter in Major Filters.."></input>
        Skils 
        <input type="text" id="skillsFilterInput" placeholder="Enter in Skills Filters.." onKeyUp={addFilterName}></input>
        Interests 
        <input type="text" id="interestsFilterInput" placeholder="Enter in Interests Filters.."></input>


        <button id="filterButton" onClick={renderPageAgain}>Enter Filters</button>

        <div id="filteredItems">initial</div>

    </div>

    
  );
}

export default SideBar;