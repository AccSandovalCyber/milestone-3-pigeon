import React from 'react'
import { useState } from 'react';
import { Link } from 'react-router-dom';


function CreateUser() {
    const [email, setUserEmail] = useState('');
    const [username, setUsername] = useState('');
    const [password, setUserPassword] = useState('');

    const handleSubmit = () => {

    };

    return (
        <div className='formContainer' >
            <div className="signContainer">
            <h1>Pigeon</h1>
            <h2>Sign up today</h2>
            <label htmlFor="email">Email: </label>
                <br />
                {/* https://developer.mozilla.org/en-US/docs/Web/HTML/Element/input */}
                <input
                    type="text"
                    placeholder='Email'
                    id="email"
                    value={email}
                    onChange={ev => setUserEmail(ev.target.value)}
                />
                <br />
                <label htmlFor="username">Username: </label>
                <br />
                <input
                    type="text"
                    placeholder='Username'
                    id="username"
                    value={username}
                    onChange={ev => setUsername(ev.target.value)}
                />
                <br />
                <label htmlFor="password">Password: </label>
                <br />
                <input
                    type="password"
                    placeholder='Password'
                    id="password"
                    value={password}
                    onChange={ev => setUserPassword(ev.target.value)}
                />
                <br />
                {/* will handle fetch from firebase/backend once set up correctly */}
                <button className="btn" onClick={handleSubmit}>
                    Submit
                </button>
                <p>
                If you have an account, welcome back -> <Link to="/login">Log in here</Link>
                </p>
                </div>
            </div>

    );
}
export default CreateUser;
