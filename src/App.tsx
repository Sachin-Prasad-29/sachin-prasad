import { BrowserRouter, Route, Routes } from 'react-router-dom';
import AdminPage from './pages/AdminPage';
import MainPage from './pages/MainPage';
import './scss/style.scss';

const App: React.FC = () => {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<MainPage />}></Route>
                <Route path="/admin" element={<AdminPage />} />
            </Routes>
        </BrowserRouter>
    );
};

export default App;
