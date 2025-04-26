import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHome, faSearch } from '@fortawesome/free-solid-svg-icons';

const Navbar = () => {
    return (
        <nav className="bg-gray-300 text-blue-900">
            <div className="container mx-auto flex items-center justify-between px-4 py-2">
                {/* Menu trái */}
                <div className="flex items-center space-x-4">
                    {/* Icon Home */}
                    <a href="#" className="p-2 hover:bg-gray-400 rounded">
                        <FontAwesomeIcon icon={faHome} size="lg" />
                    </a>

                    {/* Các mục menu */}
                    <div className="flex items-center space-x-6 font-bold text-sm md:text-base">
                        <div className="relative group">
                            <a href="#" className="hover:text-blue-700">
                                GIỚI THIỆU
                            </a>
                        </div>
                        <div className="relative group">
                            <a href="#" className="hover:text-blue-700">
                                ĐÀO TẠO
                            </a>
                        </div>
                        <div className="relative group">
                            <a href="#" className="hover:text-blue-700">
                                TUYỂN SINH
                            </a>
                        </div>
                        <div className="relative group">
                            <a href="#" className="hover:text-blue-700">
                                NGHIÊN CỨU
                            </a>
                        </div>
                        <div className="relative group">
                            <a href="#" className="hover:text-blue-700">
                                SINH VIÊN
                            </a>
                        </div>
                        <div className="relative group">
                            <a href="#" className="hover:text-blue-700">
                                GIẢNG VIÊN
                            </a>
                        </div>
                        <div className="relative group">
                            <a href="#" className="hover:text-blue-700">
                                VĂN BẰNG
                            </a>
                        </div>
                    </div>
                </div>

                {/* Ô tìm kiếm bên phải */}
                <div className="flex items-center border rounded bg-white overflow-hidden">
                    <input
                        type="text"
                        placeholder="Tìm kiếm..."
                        className="px-2 py-1 focus:outline-none"
                    />
                    <button className="px-2 text-gray-600">
                        <FontAwesomeIcon icon={faSearch} />
                    </button>
                </div>
            </div>
        </nav>
    );
};

export default Navbar;
