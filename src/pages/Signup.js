import "./Signup.css"

export const Signup = () => {
    return (<div id="signup">
        


    <div class="well">
      <h3 class="signup">Sign up</h3>
        <div class="input-group signup">
          <span class="input-group-addon"><i class="glyphicon glyphicon-user"></i></span>
          <input id="email" type="text" class="form-control" name="email" value="" placeholder="email"/>
        </div>
        <div class="input-group signup">
          <span class="input-group-addon"><i class="glyphicon glyphicon-user"></i></span>
          <input id="username" type="text" class="form-control" name="username" value="" placeholder="Username"/>
        </div>

        <div class="input-group signup">
          <span class="input-group-addon"><i class="glyphicon glyphicon-lock"></i></span>
          <input id="password" type="password" class="form-control" name="password" value="" placeholder="Password"/>
        </div>

        <button type="submit" class="btn btn-primary signup" id="submit">Signup</button>
 
    </div>



    </div>)
}