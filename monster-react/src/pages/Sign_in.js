import React from 'react';

const Sign_in = () => {
  return (
    <div><div className="login">
    <h2>Sign in</h2>
    <form >
      <div className="input-wrapper">
        <input
          id="userName"
          name="userName"
          type="text"
          placeholder="Email address"
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


      {/* <Link to="/sign_in">Sign in</Link> */}
        <button className="login-button" type="submit">
          Sign in
        </button>
    </form>
  </div></div>
  );
};

export default Sign_in;