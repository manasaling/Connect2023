import React, { useState } from "react";
import EventCode from "./EventCode";
import './Login.css'
const Login = () => {
    const [errorMessages, setErrorMessages] = useState({});
    const [isSubmitted, setIsSubmitted] = useState(false);

    const renderErrorMessage = (name) =>
        name === errorMessages.name && (
            <div className="error">{errorMessages.message}</div>
        );

    const database = [
    {
      username: "user1",
      password: "pass1"
    },
    {
      username: "user2",
      password: "pass2"
    }
  ];

  const errors = {
    uname: "invalid username",
    pass: "invalid password"
  };

    const handleSubmit = (event) => {
        event.preventDefault();

        var{uname, pass} = document.forms[0];

        const userData = database.find((user) => user.username === uname.value)

        if(userData){
            if(userData.password != pass.value){
                setErrorMessages({name: "pass", message: errors.pass})
            } else {
                setIsSubmitted(true);
            } 
        } else{
            setErrorMessages({name: "pass", message: errors.uname});
        }
    }

    const renderForm = (
        
        <div className="form">
          <h1>login</h1>
          <div className="chicken">
            <br></br>
            
          <form onSubmit={handleSubmit}>
          <br></br>
            <div className="input-container">
              <label className="label">username </label>
              <input className="input-box"type="text" name="uname" required />
              {renderErrorMessage("uname")}
            </div>
            <div className="input-container">
              <label className="label">password </label>
              <input className="input-box" type="password" name="pass" required />
              {renderErrorMessage("pass")}
            </div>
            <div className="button-container">
              <input className = "button" type="submit" />
            </div>
            <br></br>
          </form>
          </div>
        </div>
      );

    return ( 
        <div className="login">
           <div className="title">connect</div>
           {isSubmitted ? <EventCode/> : renderForm}
        </div>
     );
}
 
export default Login;