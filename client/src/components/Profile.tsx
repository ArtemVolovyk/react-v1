import React, {FC, useContext, useState} from 'react';
import {Context} from '../index';
import {observer} from "mobx-react-lite";
import { useNavigate } from 'react-router-dom';
import {Link} from 'react-router-dom';
import '../styles/Profile.css';

const Profile: FC = () => {
    const {store} = useContext(Context);
    const navigate = useNavigate();

    const [title, setTitle] = useState('');
    const [description, setDescription] = useState('');

    const gotoMain = () => {
        navigate('/');
    }
    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        try {
            const response = await fetch('http://localhost:5000/api/articles', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({ title, description }),
            });
            if (response.ok) {
                alert('Article submitted successfully');
                setTitle('');   
                setDescription('');
            } else {
                alert('Failed to submit article');
            }
        } catch (error) {
            console.error('Error submitting article:', error);
            alert('Error submitting article');
        }
    }

    return (
        <>
        <div className="header-container">
                <div className="header">
                    <h1>Header</h1>
                    <div className='header-links'>
                        <Link to="/">Home</Link>
                        <Link to="/about">About</Link>
                        <Link to="/contact">Contact</Link>
                    </div>
                    <div className='header-input'>
                        <input type="text" placeholder='Search here'/>
                        <button>Search</button>
                    </div>
                </div>
                <div className='profile-image'>
                    <img src="https://www.pngkey.com/png/full/114-1149878_setting-user-avatar-in-specific-size-without-breaking.png" alt=""/>
                </div>
                <div className='header-buttons'>
                        <button onClick={gotoMain}>Home Page</button>
                        <button onClick={() => store.logout()}>Logout</button>
                </div>
            </div>
        <div>
            <h1>{store.isAuth ? `You're authorized ${store.user.email.replace(/@.*/, '')}` : 'Authorize!'}</h1>
            <h1>{store.user.isActivated ? 'Account is verified' : 'Verify your account!'}</h1>
            <button onClick={() => store.logout()}>Logout</button>
            <form onSubmit={handleSubmit}>
                <div>
                    <label>Title:</label>
                    <input type="text" 
                        value={title}
                        onChange={(e) => setTitle(e.target.value)}
                        required
                    />
                </div>
                <div>
                    <label>Description</label>
                    <input type="text" 
                        value={description}
                        onChange={(e) => setDescription(e.target.value)}
                        required
                    />
                </div>
                <button type='submit'>Submit</button>
            </form>
        </div>
        </>
    );
}

export default observer(Profile);