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

function App() {
    return (
        <>
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
        </>
    );
}

export default App;
