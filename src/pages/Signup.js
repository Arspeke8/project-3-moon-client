import { useState } from "react";
import {useMutation} from "@apollo/client"
import "./Signup.css";
import { ADD_USER } from "../utils/mutation";

export const Signup = () => {
  const [user, setUser] = useState({ email: "", username: "", password: "" });
  const [signup]= useMutation(ADD_USER)
  const onChange = (event) => {
    setUser({ ...user, [event.target.name]: event.target.value });
  };

  const onSubmit =async (event) => {
    event.preventDefault();
    console.log(user);
    if(!user.email||!user.username||!user.password){
      return
    }
    try {
      const result=await signup({variables:user})

      
    } catch (error) {
      
    }
  };
  return (
    <div id="signup">
      <form class="well" onSubmit={onSubmit}>
        <h3 class="signup">Sign up</h3>
        <div class="input-group signup">
          <span class="input-group-addon">
            <i class="glyphicon glyphicon-user"></i>
          </span>
          <input
            onChange={onChange}
            id="email"
            type="text"
            class="form-control"
            name="email"
            value={user.email}
            placeholder="email"
          />
        </div>
        <div class="input-group signup">
          <span class="input-group-addon">
            <i class="glyphicon glyphicon-user"></i>
          </span>
          <input
            onChange={onChange}
            id="username"
            type="text"
            class="form-control"
            name="username"
            value={user.username}
            placeholder="Username"
          />
        </div>

        <div class="input-group signup">
          <span class="input-group-addon">
            <i class="glyphicon glyphicon-lock"></i>
          </span>
          <input
            onChange={onChange}
            id="password"
            type="password"
            class="form-control"
            name="password"
            value={user.password}
            placeholder="Password"
          />
        </div>

        <button type="submit" class="btn btn-primary signup" id="submit">
          Signup
        </button>
      </form>
    </div>
  );
};
