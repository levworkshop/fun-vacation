import { useState, useEffect } from 'react';
import { Route, Routes, useNavigate } from 'react-router-dom';
import { ToastContainer } from 'react-toastify';
import './App.css';
import AdminOnly from './auth/AdminOnly';
import Login from './auth/Login';
import RouteGuard from './auth/RouteGuard';
import Signup from './auth/Signup';
import { setToken } from './auth/tokenMgmt';
import Header from './components/Header';
import Edit from './pages/Edit';
import Home from './pages/Home/Home';
import Order from './pages/Order';
import Vacations from './pages/Vacations/Vacations';
import { postRequest } from './services/apiService';

interface ILoginData {
    email: string;
    password: string;
}

function App() {
    const [userName, setUserName] = useState('');

    const navigate = useNavigate();

    // useEffect(() => {
    //     const name = localStorage.getItem('user');
    //     if (!name) return;
    //     setUserName(name);
    // }, []);

    function handleLogout() {
        localStorage.clear();
        setUserName('');
        navigate('/login');
    }

    function login(data: ILoginData) {
        const res = postRequest(
            'users/login',
            data,
            false
        );
        if (!res) return;

        res.then(response => response.json())
            .then(json => {
                setToken(json.token);
                localStorage.setItem('admin', json.isAdmin);
                // localStorage.setItem('user', json.name);
                setUserName(json.name);
                navigate('/vacations');
            })
    }

    return (
        <>
            <Header
                userName={userName}
                handleLogout={handleLogout}
            />
            <ToastContainer />

            <Routes>
                <Route
                    path='/'
                    element={<Home />}
                />
                <Route
                    path='/order'
                    element={<Order />}
                />
                <Route
                    path='/vacations'
                    element={
                        <RouteGuard>
                            <Vacations />
                        </RouteGuard>
                    }
                />
                <Route
                    path='/edit/:id'
                    element={
                        <RouteGuard>
                            <Edit />
                        </RouteGuard>
                    }
                />
                <Route
                    path='/signup'
                    element={<Signup />}
                />
                <Route
                    path='/login'
                    element={<Login handler={login} />}
                />
                <Route
                    path='/admin'
                    element={<AdminOnly />}
                />
            </Routes>
        </>
    );
}

export default App;
