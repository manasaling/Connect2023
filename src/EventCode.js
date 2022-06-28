import React, { useState } from "react";
import UserHome from "./UserHome";
import './EventCode.css'
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
        <div className="form">
            <h1 className="instructions">enter event code</h1>
          <form onSubmit={handleSubmit}>
            <div className="input-container">
              <label className="label">event code</label>
              <input className="input-box"type="text" name="ecode" required />
              {renderErrorMessage("ecode")}
            </div>
            <div className="button-container">
              <input className = "button" type="submit" />
            </div>
          </form>
        </div>
      );

    return ( 
        <div className="content">
           {isSubmitted ? <UserHome/> : renderForm}
        </div>
     );
}
 
export default EventCode
