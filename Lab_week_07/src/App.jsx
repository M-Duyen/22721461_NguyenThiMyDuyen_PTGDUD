import './App.css';
import Dashboard from './component/Dashboard';
import Projects from './pages/Projects';
import Teams from './pages/Teams';
import Analytics from './pages/Analytics';
import Message from './pages/Message';
import Integrations from './pages/Integrations';

import { BrowserRouter, Routes, Route, NavLink } from 'react-router-dom';
import Sidebar from './component/SideBar';
import Header from './component/Header';

// Component wrapper vì useLocation không dùng trực tiếp trong App khi dùng Router ngoài
function AppContent() {
    return (
        <div className="grid grid-cols-10 container mx-auto shadow-2xl items-stretch">
            <div className=" grid col-span-2 p-5 border-r-gray-200 ">
                <Sidebar />
            </div>

            <div className="self-start grid col-span-8">
                <div className="grid grid-cols-2 h-20 pt-5.5 border-b border-b-gray-200">
                    <Header />
                </div>
                <Routes>
                    <Route path="/dashboard" element={<Dashboard />} />
                    <Route path="/projects" element={<Projects />} />
                    <Route path="/teams" element={<Teams />} />
                    <Route path="/analytics" element={<Analytics />} />
                    <Route path="/messages" element={<Message />} />
                    <Route path="/integrations" element={<Integrations />} />
                </Routes>
            </div>
        </div>
    );
}

export default function App() {
    return (
        <BrowserRouter>
            <AppContent />
        </BrowserRouter>
    );
}
