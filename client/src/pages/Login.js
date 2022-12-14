import React, { useState } from "react";
import { Link, Navigate } from "react-router-dom";
import { useMutation } from "@apollo/client";
import { LOGIN } from "../utils/mutations";

import Auth from "../utils/auth";

const Login = (props) => {
  const [formState, setFormState] = useState({ email: "", password: "" });
  const [login, { error, data }] = useMutation(LOGIN);


  const handleChange = (event) => {
    const { name, value } = event.target;

    setFormState({
      ...formState,
      [name]: value,
    });
  };

  // submit form
  const handleFormSubmit = async (event) => {
    event.preventDefault();
    console.log(formState);
    try {
      const { data } = await login({ variables: { ...formState } });

      Auth.login(data.login.token);
    } catch (e) {
      console.error(e);
    }


    setFormState({
      email: "",
      password: "",
    });

    // if(Auth.loggedIn()) {
    //   navigate('/coinflip')
    // }
  };

  if (Auth.loggedIn()) {
    return <Navigate replace to="/coinflip" />;
  } else {
  return (
    <main className=" mb-4">
      <div className=" col-12 col-lg-10">
        <div className="card">
          <h4 className="card-header">Login</h4>
          <div className="card-body">
            {/* code that delivers message to user if they are loggged in and find themselves on the login page */}
            {data ? (
            
              <p>
                Login successful, proceed to {""}
                <Link to="/">the homepage.</Link>
              </p>
            ) : (
              // login form
              <form className='login-form' onSubmit={handleFormSubmit}>
                <input
                  className="form-input"
                  placeholder="Username"
                  name="username"
                  type="username"
                  value={formState.username}
                  onChange={handleChange}
                />
                <input
                  className="form-input"
                  placeholder="****"
                  name="password"
                  type="password"
                  value={formState.password}
                  onChange={handleChange}
                />
                <button className="btn btn-block btn-primary" type="submit">
                  Submit
                </button>
              </form>
            )}
            {/* {error && (
              <div className="my-3 p-3 bg-danger text-white">
                {error.message}
              </div>
            )} */}

            {/* signup link that takes you to signup page */}
            <div>
            <p>
                Need to sign up? {""}
                <Link to="/signup">click here!</Link>
              </p>
            </div>

          </div>
        </div>
      </div>
    </main>
  );

};
};

export default Login;
