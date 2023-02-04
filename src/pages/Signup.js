import React from "react";
// import { useState } from "react";
// import {useMutation} from "@apollo/client"
import "./Signup.css";
// import { ADD_USER } from "../utils/mutation";

export const Signup = () => {
  // const [user, setUser] = useState({ email: "", username: "", password: "" });
  // const [signup]= useMutation(ADD_USER)
  // const onChange = (event) => {
  //   setUser({ ...user, [event.target.name]: event.target.value });
  // };

  // const onSubmit =async (event) => {
  //   event.preventDefault();
  //   console.log(user);
  //   if(!user.email||!user.username||!user.password){
  //     return
  //   }
  //   try {
  //     const result=await signup({variables:user})

      
  //   } catch (error) {
      
  //   }
  // };
  return (
    <div id="signup">
      <form className="well">
        <h3 className="signup">Sign up</h3>
        <div className="input-group signup">
          <span className="input-group-addon">
            <i className="glyphicon glyphicon-user"></i>
          </span>
          <input
           
            id="email"
            type="text"
            className="form-control"
            name="email"
           
            placeholder="email"
          />
        </div>
        <div className="input-group signup">
          <span className="input-group-addon">
            <i className="glyphicon glyphicon-user"></i>
          </span>
          <input
          
            id="username"
            type="text"
            className="form-control"
            name="username"
            
            placeholder="Username"
          />
        </div>

        <div className="input-group signup">
          <span className="input-group-addon">
            <i className="glyphicon glyphicon-lock"></i>
          </span>
          <input
           
            id="password"
            type="password"
            className="form-control"
            name="password"
           
            placeholder="Password"
          />
        </div>

        <button type="submit" className="btn btn-primary signup" id="submit">
          Signup
        </button>
      </form>
    </div>
  );
};
