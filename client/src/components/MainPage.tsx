import React, {FC, useContext, useState} from 'react';
import {Context} from '../index';
import {observer} from "mobx-react-lite";
import '../styles/MainPage.css';
import { BrowserRouter as Router, Route, Routes, Link } from "react-router-dom";
import { useNavigate } from 'react-router-dom';

const MainPage: FC = () => {
    const {store} = useContext(Context);
    const navigate = useNavigate();

    const setPage = (page: string) => {
        navigate(page);
    }

    return (
        <React.Fragment>
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
                <div className='header-buttons'>
                        <button onClick={() => setPage('/profile')}>Profile</button>
                        <button onClick={() => store.logout()}>Logout</button>
                </div>
            </div>

            <div className='sidebar-container'>
                <div className='sidebar'>
                    <h1>Sidebar</h1>
                    <div className='sidebar-links'>
                        <a href="#">Home</a>
                        <a href="#">About</a>
                        <a href="#">Contact</a>
                    </div>
                </div>
                <div className="content">
                    <h1>Content</h1>
                    <div className="shop-items">
                        <div className="shop-item">
                            <img src="" alt="Item 1" />
                            <h2>Item 1</h2>
                            <p>Description for Item 1</p>
                        </div>
                        <div className="shop-item">
                            <img src="" alt="Item 2" />
                            <h2>Item 2</h2>
                            <p>Description for Item 2</p>
                        </div>
                        <div className="shop-item">
                            <img src="" alt="Item 3" />
                            <h2>Item 3</h2>
                            <p>Description for Item 3</p>
                        </div>
                        <div className="shop-item">
                            <img src="" alt="Item 4" />
                            <h2>Item 4</h2>
                            <p>Description for Item 4</p>
                        </div>
                    </div>
                </div>
            </div>
                
            {/*<div>
                <h1>{store.isAuth ? `You're authorized ${store.user.email}` : 'Authorize!'}</h1>
                <h1>{store.user.isActivated ? 'Account is verified' : 'Verify your account'}</h1>
            </div>*/}
        </React.Fragment>
    );
    
}

export default observer(MainPage);
