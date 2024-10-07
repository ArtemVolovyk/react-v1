import React, {FC, useContext, useState} from 'react';
import {Context} from '../index';
import {observer} from "mobx-react-lite";
import '../styles/LoginForm.css';

const LoginForm: FC = () => {
    const [email, setEmail] = useState<string>('');
    const [password, setPassword] = useState<string>('');
    const [confirmPassword, setConfirmPassword] = useState<string>('');
    const {store} = useContext(Context);

    const handleRegistration = () => {
        if (password !== confirmPassword) {
            alert('Passwords do not match');
            return;
        }
        store.registration(email, password);
    }

    return (
        <div className="login-form-container">
            <div className="login-form">
                <input
                    onChange={(e) => setEmail(e.target.value)}
                    value={email}
                    type="text"
                    placeholder='email'
                    className="login-input"
                />
                <input
                    onChange={(e) => setPassword(e.target.value)}
                    value={password}
                    type="Password"
                    placeholder='Password'
                    className="login-input"
                />
                <input
                    onChange={(e) => setConfirmPassword(e.target.value)}
                    value={confirmPassword}
                    type="password"
                    placeholder='Confirm password'
                    className="login-input"
                />
                <button onClick={() => store.login(email, password)} className="login-button">Login</button>
                <button onClick={handleRegistration} className="register-button">Registration</button>
            </div>
        </div>
    );
};

export default observer(LoginForm);