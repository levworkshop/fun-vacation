// import './App.css';
import { Route, Routes } from 'react-router-dom';
import Header from './components/Header';
import Home from './pages/Home';
import Order from './pages/Order';
import Vacations from './pages/Vacations';

function App() {
    return (
        <>
            <Header />

            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="order" element={<Order />} />
                <Route path="vacations" element={<Vacations />} />
            </Routes>
        </>
    );
}

export default App;
