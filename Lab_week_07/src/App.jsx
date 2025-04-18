import './App.css';

import { BrowserRouter, Routes, Route, NavLink } from 'react-router-dom';
import Sidebar from './component/Sidebar';
import Header from './component/Header';

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
            </div>
        </div>
    );
}

export default function App() {
    return (
        <>
            <AppContent />
        </>
    );
}
