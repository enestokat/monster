import React from 'react';
import {Link} from 'react-router-dom';

const Login = () => {
  return (
    <div className="login">
        <h2>Login</h2>
        <form >
          <div className="input-wrapper">
            <input
              id="userName"
              name="userName"
              type="text"
              placeholder="User Name"
            />
          </div>


          <div className="input-wrapper">
            <input
              id="password"
              name="password"
              type="password"
              placeholder="Password"
            />
          </div>


          <Link to="/sign_in">Don't have an account? Sign in</Link>
            <button className="login-button" type="submit">
              Submit
            </button>
        </form>
      </div>
  );
};

export default Login;