import React, { useState } from "react";
import { Link } from "react-router-dom";
import { useMutation } from "@apollo/client";
import { login } from "../utils/mutations";

import Auth from "../utils/";

const Login = (props) => {
  const [formState, setFormState] = useState({ email: "", password: ""});
  const [login, {error, data}] = useMutation(login);


  const handleChange = (event) => {
    const { name, value } event.target;

    setFormState({ ...formState, [name]: value});
  };

  const handleFormSubmit = async(event) => {
    event.preventDefault();
    try{
      const {data} = await login({variables: { ...formState}});

      Auth.login(data.login.token);
    } catch (e) {
      console.error(e);
    }

    setFormState({
      email: "", password: "",
    });
  };

  return (
    <main className="flex-row justify-center mb-4" >
      <div className="col-12 col-lg-10">
        <div className="card">
          <h4 className="card-header bg-dark text-light p-2">Login</h4>
          <div className="card-body">
            {data ? (<p>Login successful, proceed to {""}<Link to="/">the homepage.</Link></p>
            ) : ( <form onSubmit={handleFormSubmit}>
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
                placeholder="********"
                name="password"
                type="password"
                value={formState.password}
                onChange={handleChange}
                />
              <button
                className="btn btn-block btn-primary"
                type="submit"
                >Submit</button>
            </form>
          )}

          {error && (
            <div className="my-3 p-3 bg-danger text-white">
              {error.message}
            </div>
          )}
          </div>
        </div>
      </div>
    </main>
  )
};

export default Login;