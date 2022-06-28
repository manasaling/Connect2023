import './Questions.css'
import React, { useState } from "react";
import EventCode from './EventCode';
const Questions = () => {
    const [isSubmitted, setIsSubmitted] = useState(false);

    const handleSubmit = event => {
        event.preventDefault();
        setIsSubmitted(true);
      };

      const renderForm = (
        <div className="content-questions">
            <h3>Fill this out first!</h3>
            <form onSubmit={handleSubmit}>
            <div className="questions">
              <div className="question-label">
                <label className="label-userinfo">name</label>
                <label className="label-userinfo">email</label>
                <label className="label-userinfo">experience</label>
                <label className="label-userinfo">short bio</label>
                <label className="label-userinfo">project track</label>
                <label className="label-userinfo">skills</label>
              </div>
              
              <div className="question-input">
                <input className="input-box-userinfo"type="text" name="uname" required />
                <input className="input-box-userinfo" type="text" name="email" required />
                <input className="input-box-userinfo" type="text" name="experience" required />
                <input className="input-box-userinfo" type="text" name="bio" required />
                  
                <div className="checkboxes">
                      <input className="input-checkbox-userinfo" type="checkbox" name="project-track"/>
                      <label className="label-checkbox-userinfo">AI</label>

                      <input className="input-checkbox-userinfo" type="checkbox" name="project-track"/>
                      <label className="label-checkbox-userinfo">Medicine</label>
                    
                      <input className="input-checkbox-userinfo" type="checkbox" name="project-track"/>
                      <label className="label-checkbox-userinfo">Climate</label>
                   
                      <input className="input-checkbox-userinfo" type="checkbox" name="project-track"/>
                      <label className="label-checkbox-userinfo">Education</label>
                 
                      <input className="input-checkbox-userinfo" type="checkbox" name="project-track"/>
                      <label className="label-checkbox-userinfo">Not Sure</label>
                  </div>

                  <div className="checkboxes">
                    <input className="input-checkbox-userinfo" type="checkbox" name="project-track"/>
                    <label className="label-checkbox-userinfo">UI/UX</label>

                    <input className="input-checkbox-userinfo" type="checkbox" name="project-track"/>
                    <label className="label-checkbox-userinfo">Java</label>

                    <input className="input-checkbox-userinfo" type="checkbox" name="project-track"/>
                    <label className="label-checkbox-userinfo">Business</label>

                    <input className="input-checkbox-userinfo" type="checkbox" name="project-track"/>
                    <label className="label-checkbox-userinfo">Cloud Tech</label>

                    <input className="input-checkbox-userinfo" type="checkbox" name="project-track"/>
                    <label className="label-checkbox-userinfo">Other</label>
                  </div>
              </div>
            </div>


            <div className="button-container-userinfo">
              <input className = "button-userinfo" type="submit" />
            </div>
          </form>
        </div>
      )
    return ( 

      <div className="questions">
        <div className="title"></div>
       {isSubmitted ? <EventCode/> : renderForm}
       
   </div>
        
     );
}
 
export default Questions;