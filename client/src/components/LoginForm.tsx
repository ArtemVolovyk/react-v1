import React, {FC, useState} from 'react';

const LoginForm: FC = () => {
    const [email, setEmail] = useState<string>('');
    const [password, setPassword] = useState<string>('');
    return (
        <div>
            <input
                onChange={(e) => setEmail(e.target.value)}
                value={email}
                type="text"
                placeholder='email'
            />
            <input
                onChange={(e) => setPassword(e.target.value)}
                value={email}
                type="Password"
                placeholder='Password'
            />
            <button>Login</button>
            <button>Registration</button>
        </div>
    );
};

export default LoginForm;