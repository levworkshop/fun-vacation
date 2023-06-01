// import './App.css';
import { Route, Routes } from 'react-router-dom';
import Header from './components/Header';
import Home from './pages/Home';
import Order from './pages/Order';
import Vacations from './pages/vacations/Vacations';
import { ToastContainer } from 'react-toastify';
import Edit from './pages/vacations/Edit';
import SignUp from './auth/SignUp';
import Login from './auth/Login';
import RouteGuard from './auth/RouteGuard';
import UserManager from './pages/UserManger';
import AdminGuard from './auth/AdminGuard';
import Checkout from './pages/Checkout';
import { createContext, useState } from 'react';
import FacebookButton from './components/FacebookButton';
import SocialButton from './components/SocialButton';

interface Context {
    admin: boolean
    setAdmin: Function
    userName: string
    setUserName: Function
}

export const AppContext = createContext<Context | null>(null);

function App() {
    const [admin, setAdmin] = useState(false);
    const [userName, setUserName] = useState('');

    return (
        <>
            <AppContext.Provider value={{
                admin,
                setAdmin,
                userName,
                setUserName
            }}>
                <Header />
                <ToastContainer
                    position="top-right"
                    theme="dark"
                />

                <Routes>
                    <Route path="/" element={<Home />} />
                    <Route path="order" element={<Order />} />
                    <Route
                        path="vacations"
                        element={
                            <RouteGuard>
                                <Vacations />
                            </RouteGuard>
                        }
                    />
                    <Route
                        path="edit/:id"
                        element={
                            <RouteGuard>
                                <Edit />
                            </RouteGuard>
                        }
                    />
                    <Route
                        path="users"
                        element={
                            <AdminGuard>
                                <UserManager />
                            </AdminGuard>
                        }
                    />
                    <Route path="checkout" element={<Checkout />} />
                    <Route path="signup" element={<SignUp />} />
                    <Route path="login" element={<Login />} />
                </Routes>
            </AppContext.Provider>

            <div
                className="p-4 d-flex align-items-center justify-content-center"
            >
                <div className="col-6">
                    <h4 className="rounded-pill bg-light p-4">
                        Spread the News
                    </h4>

                    <FacebookButton
                        icon={<i className="bi bi-facebook me-2" />}
                    />

                    <FacebookButton
                        icon={<img src="https://cdn.pixabay.com/photo/2017/10/29/01/22/icon-facebook-2898664_640.png" width={16} alt="Share on Facebook"
                        />}
                    />

                    <SocialButton
                        text="Facebook"
                        url="https://facebook..."
                        icon={<i className="bi bi-facebook me-2" />}
                    />

                </div>

            </div>
        </>
    );
}

export default App;
