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
                <Route path="vacations" element={<Vacations />} />
                <Route path="edit/:id" element={<Edit />} />
                <Route path="signup" element={<SignUp />} />
                <Route path="login" element={<Login />} />
            </Routes>
        </>
    );
}

export default App;
