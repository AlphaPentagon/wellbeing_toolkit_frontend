import React, { useState } from "react";
import "./wellBeingForm.css";

function WellbeingForm({ handleclick, isclicked }) {
  const [feedbackSent, setFeedbackSent] = useState(false);

  function handleSubmit(e) {
    e.preventDefault();
    const data = new FormData(e.target);
    let formObject = {};
    for (const [name, value] of data) {
      formObject[name] = value;
    }
    formObject.score = Number(formObject.score);
    postFeedback(formObject);
    setFeedbackSent(true);
  }

  async function postFeedback(formObject) {
    const response = await fetch("http://localhost:3001/feedback", {
      method: "POST",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
      },
      body: JSON.stringify(formObject),
    });
    const data = await response.json();
    console.log(data);
  }

  return (
    <form className="wellbeing-form" onSubmit={handleSubmit}>
      <div className="close">
        <button
          onClick={() => {
            handleclick(isclicked);
          }}
        >
          x
        </button>
      </div>
      <h2>Wellbeing Check-in</h2>
      {!feedbackSent && (
        <div>
          <div className="formInputContainer">
            <label htmlFor="name">Name: </label>
            <input
              required
              className="formItem"
              type="text"
              id="name"
              name="name"
              placeholder="Your name..."
            ></input>
          </div>
          <div className="formInputContainer">
            <label htmlFor="coach">Enablement coach: </label>
            <select required className="formItem" id="coach" name="coach">
              <option value="" selected disabled hidden>
                Select
              </option>
              <option value="Rikiah Williams">Rikiah Williams</option>
              <option value="Victoriah Meah">Victoriah Meah</option>
              <option value="Jessica Roach">Jessica Roach</option>
            </select>
          </div>
          <fieldset required className="formItem">
            <legend className="wellbeingCheckText">
              How would you rate your wellbeing today?
            </legend>
            <label htmlFor="score1">😢</label>
            <input type="radio" id="score1" name="score" value="1"></input>
            <label htmlFor="score2"></label>
            <input type="radio" id="score2" name="score" value="2"></input>
            <label htmlFor="score3"></label>
            <input
              type="radio"
              id="score3"
              name="score"
              value="3"
              defaultChecked
              required
            ></input>
            <label htmlFor="score4"></label>
            <input type="radio" id="score4" name="score" value="4"></input>
            <input type="radio" id="score5" name="score" value="5"></input>
            <label htmlFor="score5">😄</label>
          </fieldset>
          <input className="submit" type="submit" value="Submit"></input>
        </div>
      )}
      {feedbackSent && (
        <div>
          <p className="thankyouText">
            Thank You! Your wellbeing scores have been sent to your enablement
            coach for review.
          </p>
        </div>
      )}
    </form>
  );
}

// if feedbackSent is true
// show "Thank You! Your wellbeing scores have been sent to your enablement coach for review"

export default WellbeingForm;
