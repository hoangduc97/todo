import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import '../auth.scss';

const Signin = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const handleEmail = (e) => setEmail(e.target.value);
    const handlePassword = (e) => setPassword(e.target.value);
    const handleSubmit = (e) => {
        e.preventDefault();
    };

    return (
        <div className="signin auth">
            <form onSubmit={handleSubmit}>
                <input
                    className="auth__input"
                    type="email"
                    value={email}
                    onChange={handleEmail}
                    placeholder="email"
                />
                <input
                    className="auth__input"
                    type="password"
                    value={password}
                    onChange={handlePassword}
                    placeholder="password"
                    onKeyDown={(e) => {
                        if (e.key == 27) {
                            handleSubmit(e);
                        }
                    }}
                />
                <div className="auth__option">
                    <Link to={'/signup'}>Not account? Register</Link>
                    <Link to={'/forgot'}>Forgot account</Link>
                </div>
                <button className="auth__button" type="submit">
                    login
                </button>
            </form>
        </div>
    );
};

export default Signin;
