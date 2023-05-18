// import './App.css';
import { Route, Routes } from 'react-router-dom';
import Header from './components/Header';
import Home from './pages/Home';
import Order from './pages/Order';
import Vacations from './pages/Vacations';
import { ToastContainer } from 'react-toastify';

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
            </Routes>
        </>
    );
}

export default App;
