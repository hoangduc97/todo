import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import Loading from '../../../components/loading/loading.component';
import '../auth.scss';

const Signin = (props) => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [paswordValid, setPasswordValid] = useState(true);

    const handleEmail = (e) => setEmail(e.target.value);
    const handlePassword = (e) => setPassword(e.target.value);
    const handleSubmit = (e) => {
        e.preventDefault();
        if (!passwordValidate()) {
            setPasswordValid(false);
        } else {
            const user = {
                email: email,
                password: password,
            };
            props.login(user);
        }
    };
    const passwordValidate = () => {
        return password.length >= 6;
    };
    const showPasswordValid = 'auth__input' + (paswordValid ? '' : ' invalid');
    return (
        <React.Fragment>
            {props.loading ? (
                <Loading />
            ) : (
                <div className="signin auth">
                    <form onSubmit={handleSubmit}>
                        <input
                            className="auth__input"
                            type="email"
                            value={email}
                            onChange={handleEmail}
                            placeholder="email"
                            required
                        />
                        <input
                            className={showPasswordValid}
                            type="password"
                            value={password}
                            onChange={handlePassword}
                            placeholder="password"
                            required
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
                        <span className="auth__error">{props.err && props.err.message}</span>
                    </form>
                </div>
            )}
        </React.Fragment>
    );
};

export default Signin;
