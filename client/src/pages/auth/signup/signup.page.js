import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import Loading from '../../../components/loading/loading.component';
import '../auth.scss';

const Signup = (props) => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [confirm, setConfirm] = useState('');
    const [paswordValid, setPasswordValid] = useState(true);
    const [confirmValid, setConfirmValid] = useState(true);

    const handleEmail = (e) => setEmail(e.target.value);
    const handlePassword = (e) => setPassword(e.target.value);
    const handleConfirm = (e) => setConfirm(e.target.value);
    const handleSubmit = (e) => {
        e.preventDefault();
        if (!passwordValidate()) {
            setPasswordValid(false);
        }
        if (!confirmValidate()) {
            setConfirmValid(false);
        }
        if (passwordValidate() && confirmValidate()) {
            const user = {
                email: email,
                password: password,
            };
            props.register(user);
        }
    };
    const passwordValidate = () => {
        return password.length >= 6;
    };
    const confirmValidate = () => {
        return confirm === password;
    };

    const showPasswordValid = 'auth__input' + (paswordValid ? '' : ' invalid');
    const showConfirmValid = 'auth__input' + (confirmValid ? '' : ' invalid');
    return (
        <React.Fragment>
            {props.loading ? (
                <Loading />
            ) : (
                <div className="signun auth">
                    <form onSubmit={handleSubmit}>
                        <input
                            className='auth__input'
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
                        />
                        <input
                            className={showConfirmValid}
                            type="password"
                            value={confirm}
                            onChange={handleConfirm}
                            placeholder="confirm password"
                            required
                            onKeyDown={(e) => {
                                if (e.keyCode == 13) {
                                    handleSubmit(e);
                                }
                            }}
                        />
                        <div className="auth__option">
                            <Link to={'/signin'}>Alrealy account? Login</Link>
                        </div>
                        <button className="auth__button" type="submit">
                            REGISTER
                        </button>
                        <span className="auth__error">{props.err && props.err.message}</span>
                    </form>
                </div>
            )}
        </React.Fragment>
    );
};

export default Signup;
