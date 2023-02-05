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
    <div className="signup-page bg-light" >
      <div className="container">
        <div className="row">
          <div className="col-lg-10 offset-lg-1">
            <h3 className="mb-3">Sign Up</h3>
            <div className="bg-white shadow rounded">
              <div className="row">
                <div className="col-md-7 pe-0">
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
                         
                            type="text"
                            className="form-control"
                            placeholder="Enter Email"
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
                         
                            type="text"
                            className="form-control"
                            placeholder="Enter Username"
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
                            type="text"
                            className="form-control"
                            placeholder="Enter Password"
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

