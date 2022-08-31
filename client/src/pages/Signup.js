import React, { useState } from 'react';
import { Link } from 'react-router-dom';

import { useMutation } from '@apollo/client';
import { ADD_USER } from '../utils/mutations';

import Auth from '../utils/auth'

const Signup = () => {
    const [formState, setFormState] = useState({
        username: '',
        email: '',
        password: '',
    });
    const [addUser, { error, data }] = useMutation(ADD_USER);

    const handleChange = (event) => {
        const { name, value } = event.target;

        setFormState({
            ...formState,
            [name]: value,
        });
    };

    const handleFormSubmit = async (event) => {
        event.preventDefault();
        console.log(formState);

        try {
            const { data } = await addUser({
                variables: { ...formState },
            });

            Auth.login(data.addUser.token);
        } catch (e) {
            console.error(e);
        }
    };

    return (
      <div className='col-12 col-lg-10'>
        <div className='card'>
            <h4 className='card-header'> Sign Up</h4>
            <div className='card-body'>
            {/* code for if a logged in user ends up on the signup page */}
            {data ? (
                <p>
                    All signed up! Click{''}
                    <Link to='/coinflip'> here to log your good deed for the day.</Link>
                </p>
            ) : (
                <form onSubmit={handleFormSubmit}>
                    <input
                        className='form-input'
                        placeholder='Username'
                        name='name'
                        type='text'
                        value={formState.name}
                        onChange={handleChange}
                    />
                    <input
                        className='form-input'
                        placeholder='Email'
                        name='email'
                        type='email'
                        value={formState.email}
                        onChange={handleChange}
                    />
                    <input
                        className='form-input'
                        placeholder='*****'
                        name='password'
                        type='password'
                        value={formState.password}
                        onChange={handleChange}
                    />
                    <button
                        className='btn btn-block btn-primary'
                        style={{ cursor: 'pointer' }}
                        type='submit'
                    >Submit</button>
                </form>
            )}
            </div>
        </div>
      </div>  
    )
}

export default Signup;