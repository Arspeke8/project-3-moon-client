import { useState } from "react";
import {useMutation} from "@apollo/client"
import { LOGIN_USER } from "../utils/mutation";
import auth from "../utils/auth";

import "./Login.css";

  const Login = () => {
  const [user, setUser] = useState({ username: "", password: "" });
  const [login]= useMutation(LOGIN_USER)
  const onChange = (event) => {
    console.log("changingstate")
    setUser({ ...user, [event.target.name]: event.target.value });
  };

  const onClick =async (event) => {
    event.preventDefault();
    console.log(user);
    if(!user.username||!user.password){
      return
    }
    try {
      // const result=await login({variables:user})
      // auth.login()
      auth.login(login.token)
      
    } catch (error) {
      
    }
  };
  return (
    <div id="login">
      <div className="login-page">
        <div className="">
          <div className="row justify-content-start">
            <div className="col-lg-7 offset-lg-1">
              <h3 className="mb-3">Log In</h3>
              <div className="bg-white shadow rounded">
                <div className="row">
                  <div className="col pe-0">
                    <div className="form-left h-100 py-5 px-5">
                      <section className="row g-4">
                        <div className="col-12">
                          <label>
                            Username<span className="text-danger">*</span>
                          </label>
                          <div className="input-group">
                            <div className="input-group-text">
                              <i className="bi bi-person-fill"></i>
                            </div>
                            <input
                           name = "username"
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
                            <label
                              className="form-check-label"
                              htmlFor="inlineFormCheck"
                            >
                              Remember me
                            </label>
                          </div>
                        </div>

                        <div className="col-sm-6">
                          <div href="#" className="float-end text-primary">
                            Forgot Password?
                          </div>
                        </div>

                        <div className="col-12">
                          <button
                            type="submit"
                            className="btn btn-primary px-4 float-end mt-4"
                            onClick={onClick}
                          >
                            Login
                          </button>
                        </div>
                      </section>
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
export default Login