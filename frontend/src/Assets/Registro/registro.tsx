import React from 'react';
import './registroStyle.css';

const Form = () => {
  return (
    <div className="form">
      <div className="title">Welcome</div>
      <div className="subtitle">Let's create your account!</div>

      <div className="input-container ic1">
        <input placeholder="" type="text" className="input" id="firstname" />
        <div className="cut" />
        <label className="iLabel" htmlFor="firstname">First name</label>
      </div>

      <div className="input-container ic2">
        <input placeholder="" type="text" className="input" id="lastname" />
        <div className="cut" />
        <label className="iLabel" htmlFor="lastname">Last name</label>
      </div>

      <div className="input-container ic2">
        <input placeholder="" type="text" className="input" id="email" />
        <div className="cut cut-short" />
        <label className="iLabel" htmlFor="email">Email</label>
      </div>

      <button className="submit" type="submit">Submit</button>
    </div>
  );
};

export default Form;