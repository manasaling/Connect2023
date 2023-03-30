import React, { useState } from "react";
import UserHome from "./UserHome";
import './EventCode.css'
import ProfileList from "./ProfileList";
import ProfileListSearch from "./ProfileListSearch";
import Layout from './Layout.js'
const EventCode = () => {
    const [errorMessages, setErrorMessages] = useState({});
    const [isSubmitted, setIsSubmitted] = useState(false);

    const renderErrorMessage = (eventCode) =>
       
        eventCode === errorMessages.name && (
            <div className="error">{errorMessages.message}</div>
        );

    const database = [
    {
      eventcode: "event1"
    },
    {
      eventcode: "event2"
    }
  ];

  

  const errors = {
    ecode: "invalid code",
  };

    const handleSubmit = (event) => {
        event.preventDefault();
        var{ecode} = document.forms[0];
        const userData = database.find((user) => user.eventcode === ecode.value)
        if(userData){
            if(userData.eventcode != ecode.value){
                setErrorMessages({name: "ecode", message: errors.ecode})
            } else {
                setIsSubmitted(true);
            } 
        } 
    }


    const renderForm = (
      <><div class="login-wrap">
      <div class="login-html">
        <div class="welcome">
          <label class="connect">Welcome to Connect!</label>
          <br/>
          <label class="tagline">Let's turn your passion into reality!</label>
        </div>
        
        <form onSubmit={handleSubmit}>
          <div class="login-form">
            <div class="sign-in-htm">
              <br></br>
              <br></br>
              <div class="group">
                <label for="user" class="label">Event Code</label>
                <input id="user" type="text" class="input" name ="ecode" required/>
                {renderErrorMessage("ecode")}
                
              </div>
              <br></br>
              <br></br>
              <div class="group">
                <button type="submit" class="button">Submit</button>
                
              </div>
              <div class="hr"></div>
              
            </div>
          </div>
        </form>
      </div>
      </div></>
    );
    
    

    return ( 
      
        <div className="content">
          <Layout></Layout>
           {isSubmitted ? <ProfileListSearch/>  : renderForm}
        </div>
     );
}
 
export default EventCode
