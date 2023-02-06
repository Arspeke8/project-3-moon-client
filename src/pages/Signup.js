import React from "react";
import { useState } from "react";
import {useMutation} from "@apollo/client"
import { ADD_USER } from "../utils/mutation";
import "./Signup.css";
import auth from "../utils/auth";

export const Signup = () => {
  const [user, setUser] = useState({ email: "", username: "", password: "" });
  const [signup]= useMutation(ADD_USER)
  const onChange = (event) => {
    console.log("changingstate")
    setUser({ ...user, [event.target.name]: event.target.value });
  };

  const onClick =async (event) => {
    event.preventDefault();
    console.log(user);
    if(!user.email||!user.username||!user.password){
      return
    }
    try {
      // const result=await signup({variables:user})
      auth.login()
      
    } catch (error) {
      
    }
  };
  return (
    <div id="signup">
    <div className="signup-page" >
      <div className="">
        <div className="row">
          <div className="col-lg-7 offset-lg-1">
            <h3 className="mb-3">Sign Up</h3>
            <div className="bg-white shadow rounded">
              <div className="row">
                <div className="col pe-0">
                  <div className="form-left h-100 py-5 px-5">
                    <form action="" className="row g-4">
                      <div className="col-12">
                        <label>
                          Email<span className="text-danger">*</span>
                        </label>
                        <div className="input-group">
                          <div className="input-group-text">
                            <i className="bi bi-person-fill"></i>
                          </div>
                          <input
                          name="email"
                         
                            type="text"
                            className="form-control"
                            placeholder="Enter Email"
                            onChange = {onChange}
                          />
                        </div>
                        
                        <label>
                          Username<span className="text-danger">*</span>
                        </label>
                        <div className="input-group">
                          <div className="input-group-text">
                            <i className="bi bi-person-fill"></i>
                          </div>
                          <input
                          name="username"
                         
                            type="text"
                            className="form-control"
                            placeholder="Enter Username"
                            onChange = {onChange}
                          />
                        </div>
                      </div>

                      <div className="col-12">
                        <label>
                          Password<span className="text-danger">*</span>
                        </label>
                        <div className="input-group">
                          <div className="input-group-text">
                            <i className="bi bi-lock-fill"></i>
                          </div>
                          <input
                          name="password"
                            type="text"
                            className="form-control"
                            placeholder="Enter Password"
                            onChange = {onChange}
                          />
                        </div>
                      </div>

                      <div className="col-sm-6">
                        <div className="form-check">
                          <input
                            className="form-check-input"
                            type="checkbox"
                            id="inlineFormCheck"
                          />
                      
                        </div>
                      </div>

                      <div className="col-12">
                        <button
                          type="signup"
                          className="btn btn-primary px-4 float-end mt-4"
                          onClick={onClick} 
                        >
                          Signup
                        </button>
                      </div>
                    </form>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>

   
      
  </div>
);
};

