import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import '../auth.scss';

const Signup = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [confirm, setConfirm] = useState('');

    const handleEmail = (e) => setEmail(e.target.value);
    const handlePassword = (e) => setPassword(e.target.value);
    const handleConfirm = (e) => setConfirm(e.target.value);
    const handleSubmit = (e) => {
        e.preventDefault();
    };

    return (
        <div className="signun auth">
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
                />
                <input
                    className="auth__input"
                    type="password"
                    value={confirm}
                    onChange={handleConfirm}
                    placeholder="confirm password"
                    onKeyDown={(e) => {
                        if (e.key == 27) {
                            handleSubmit(e);
                        }
                    }}
                />
                <div className="auth__option">
                    <Link to={'/signin'}>Alrealy account? Login</Link>
                </div>
                <button className="auth__button" type="submit">REGISTER</button>
            </form>
        </div>
    );
};

export default Signup;
