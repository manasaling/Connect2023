import React, { useState } from "react";
import EventCode from "./EventCode";
import IndividualProfile from "./IndividualProfile";
import './Login.css'
import PersonalProfile from "./ProfileCard";
import { Navigate } from "react-router-dom";
import ConnectLogo from './images/connectlogo2.png'
import './App.css'


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
    }, 
    {
      username: "sarahpike",
      password: "pms123!"
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
      <div>
        <img src={ConnectLogo} alt="Connect Logo" id="connectLogo"></img>


        <><div class="login-wrap">
        <div class="login-html">
          <div class="welcome">
            <label class="connect">Welcome to Connect!</label>
            <br/>
            <label class="tagline">Let's turn your passion into reality</label>
          </div>
          
          <form onSubmit={handleSubmit}>
            <div class="login-form">
              <div class="sign-in-htm">
                <div class="group">
                  <label for="user" class="label">Username</label>
                  <input id="user" type="text" class="input" name ="uname" required/>
                  {renderErrorMessage("uname")}
                </div>
                <div class="group">
                  <label for="pass" class="label">Password</label>
                  <input id="pass" type="password" class="input" data-type="password" name = "pass" required />
                  {renderErrorMessage("pass")}
                </div>
                <div class="forgotpw">
                  <div class="foot-lnk">
                    <a href="/signup">Don't have an Account? Create One.</a>
                  </div>
                  
                </div>
                <div class="group">
                  <input type="submit" class="button" value="Login" />
                </div>
                <div class="hr"></div>
                <div class="group">
                  <input id="check" type="checkbox" class="check" checked="false" />
                  <label for="check"><span class="icon"></span> Keep me Signed in</label>
                </div>
              </div>
            </div>
          </form>
        </div>
      </div></>
      </div>
      
      
      );

    return ( 
        <div className="login">
          
           {/* <div className="title">connect</div> */}
           {/* <img src={ConnectLogo} alt="Connect Logo" id="connectLogo"></img> */}
           {isSubmitted ? <EventCode/> : renderForm }
            

        </div>
     );
}
 
export default Login;