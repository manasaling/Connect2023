import React, { useState } from "react";
import EventCode from "./EventCode";
import Questions from "./Questions";
import './SignUp.css'
const SignUp = () => {

    const [isSubmitted, setIsSubmitted] = useState(false);
    const [errorMessages, setErrorMessages] = useState({});
    const [questionSubmit, setQuestionSubmit] = useState(false);

    const renderErrorMessage = (name) =>
    name === errorMessages.name && (
        <div className="error">{errorMessages.message}</div>
    );

    const handleSubmit = event => {
        event.preventDefault();
        var{email, uname, pass, checkpass} = document.forms[0];
        if(pass.value != checkpass.value){
            setErrorMessages({message: "passwords don't match"})
        }else if(!email.value.includes("@")){
            setErrorMessages({name: "email", message: "enter valid email"})
        }else{
            setIsSubmitted(true);
        }
      };

      const renderForm = (

        <><div class="login-wrap">
        <div class="login-html">
          <div class="welcome">
            <label class="connect">Create an Account</label>
          </div>
          
          <form onSubmit={handleSubmit} action= "info.php" method= "post">
            <div class="login-form">
              <div class="sign-in-htm">
                <div class="group">
                  <label for="email" class="label">Email</label>
                  <input id="email" type="text" class="input" name ="email" required/>
                  {renderErrorMessage("email")}
                </div>
                <div class="group">
                  <label for="uname" class="label">Username</label>
                  <input id="uname" type="text" class="input" data-type="uname" name = "uname" required />
                </div>
                <div class="group">
                  <label for="pass" class="label">Password</label>
                  <input id="pass" type="password" class="input" name ="pass" required/>
                  {renderErrorMessage("pass")}
                </div>
                <div class="group">
                  <label for="pass" class="label">Retype Password</label>
                  <input id="pass" type="password" class="input" data-type="checkpass" name = "checkpass" required />
                </div>
                <div class="group">
                  <button type="submit" class="button">Sign Up</button>
                </div>
                <div class="hr"></div>
                
              </div>
            </div>
          </form>
        </div>
      </div><div className="form">
          <h1>login</h1>
          <div className="chicken">
            <br></br>

            <form onSubmit={handleSubmit} action= "info.php" method= "post">
              <br></br>
              <div className="input-container">
                <label className="label">username </label>
                <input className="input-box" type="text" name="uname" required />
                {renderErrorMessage("uname")}
              </div>
              <div className="input-container">
                <label className="label">password </label>
                <input className="input-box" type="password" name="pass" required />
                {renderErrorMessage("pass")}
              </div>
              <div className="button-container">
                <input className="button" type="submit" />
              </div>
              <br></br>
            </form>
          </div>
        </div></>
      );

        
        <div className="form">
            <h1>signup</h1>
          <form onSubmit={handleSubmit} action= "info.php" method= "post">
            <div className="input-container">
                <div className="signup-label-container">
                    <label className="signup-label">email</label>
                    <label className="signup-label">username</label>
                    <label className="signup-label">password</label>
                    <label className="signup-label">retype password</label>
                </div>
                <div className="signup-input-container">
                    <input className="input-box"type="text" name="email" required /> 
                    {renderErrorMessage("email")}
                    <input className="input-box"type="text" name="uname" required />
                    <input className="input-box"type="password" name="pass" required />
                    {renderErrorMessage("pass")}
                    <input className="input-box"type="password" name="checkpass" required />
                    {renderErrorMessage("checkpass")}
                </div>
                
            </div>

            <div className="button-container">
                    <input className = "button" type="submit" />
                </div>

            {/*<div className="input-container">
              <label className="signup-label">email</label>
              <input className="input-box"type="text" name="email" required />
              {renderErrorMessage("email")}
            </div>
            <div className="input-container">
              <label className="signup-label">username</label>
              <input className="input-box"type="text" name="uname" required />
            </div>
            <div className="input-container">
              <label className="signup-label">password</label>
              <input className="input-box"type="password" name="pass" required />
            </div>
            <div className="input-container">
              <label className="signup-label">retype password</label>
              <input className="input-box"type="password" name="checkpass" required />
              {renderErrorMessage("pass")}
            </div>
            <div className="button-container">
              <input className = "button" type="submit" />
      </div> */}
          </form>
      </div>


    return ( 
        <div className="signup">
             <div className="title">connect</div>
            {isSubmitted ? <Questions/> : renderForm}
            {setQuestionSubmit === true}
            {questionSubmit? <EventCode/> : <h1></h1>}
            
        </div>
     );
}
 
export default SignUp;