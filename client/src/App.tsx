import React, {useEffect, useState} from 'react';
import LoginForm from "./components/LoginForm";
import {useContext} from "react";
import {Context} from "./index";
import {observer} from "mobx-react-lite";
import {IUser} from "./models/IUser";
import UserService from "./services/UserService";
import './styles/LoginForm.css';


function App() {
    const {store} = useContext(Context);
    const [users, setUsers] = useState<IUser[]>([]);
    useEffect(() => {
        if (localStorage.getItem('token')) {
            store.checkAuth()
        }
    }, []);

    async function getUsers() {
        try {
            const response = await UserService.fetchUsers();
            setUsers(response.data);
        } catch (e) {
            console.log(e);
        }
    }

    if(store.isLoading){
        return <div>Loading...</div>
    }

    if (!store.isAuth){
        return (
            <LoginForm/>
        );
    }

  return (
    <div>
        <h1>{store.isAuth ? `You're authorized ${store.user.email}` : 'Authorize!'}</h1>
        <h1>{store.user.isActivated ? 'Account is verified' : 'Verify your account!'}</h1>
        <button onClick={() => store.logout()}>Logout</button>
        <div>
            <button onClick={getUsers}>Receive users</button>
        </div>
        {users.map(user =>
            <div key={user.email}>{user.email}</div>
        )}
    </div>
  );
}

export default observer(App);
