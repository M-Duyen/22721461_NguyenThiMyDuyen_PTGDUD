import React from 'react';
import coVN from '../assets/coVN.png';
import coEN from '../assets/co.png';

const Header = () => {
    return (
        <header className="w-full bg-[#1e1b4b] text-white">
            <div className="container mx-auto px-4 flex items-center justify-between h-12">
                <div className="flex items-center space-x-6">
                    <a
                        href="/e-office"
                        className="flex items-center space-x-1 text-sm"
                    >
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            width="16"
                            height="16"
                            viewBox="0 0 24 24"
                            fill="none"
                            stroke="currentColor"
                            strokeWidth="2"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                        >
                            <rect
                                x="2"
                                y="3"
                                width="20"
                                height="14"
                                rx="2"
                                ry="2"
                            ></rect>
                            <line x1="8" y1="21" x2="16" y2="21"></line>
                            <line x1="12" y1="17" x2="12" y2="21"></line>
                        </svg>
                        <span>E-OFFICE</span>
                    </a>

                    <a
                        href="/email"
                        className="flex items-center space-x-1 text-sm"
                    >
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            width="16"
                            height="16"
                            viewBox="0 0 24 24"
                            fill="none"
                            stroke="currentColor"
                            strokeWidth="2"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                        >
                            <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"></path>
                            <polyline points="22,6 12,13 2,6"></polyline>
                        </svg>
                        <span>EMAIL</span>
                    </a>

                    <a
                        href="/library"
                        className="flex items-center space-x-1 text-sm"
                    >
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            width="16"
                            height="16"
                            viewBox="0 0 24 24"
                            fill="none"
                            stroke="currentColor"
                            strokeWidth="2"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                        >
                            <path d="M2 3h6a4 4 0 0 1 4 4v14a3 3 0 0 0-3-3H2z"></path>
                            <path d="M22 3h-6a4 4 0 0 0-4 4v14a3 3 0 0 1 3-3h7z"></path>
                        </svg>
                        <span>THƯ VIỆN - THÔNG TIN</span>
                    </a>
                </div>

                <div className="flex items-center space-x-4">
                    <div className="flex items-center space-x-2 text-sm">
                        <a href="/connect">KẾT NỐI</a>
                        <span>|</span>
                        <a href="/contact">LIÊN HỆ</a>
                    </div>

                    <div className="flex items-center space-x-2">
                        <a href="/vi" className="block">
                            <img
                                src={coVN}
                                alt="Vietnamese flag"
                                width={30}
                                height={20}
                                className="border border-gray-300"
                            />
                        </a>
                        <a href="/en" className="block">
                            <img
                                src={coEN}
                                alt="English flag"
                                width={30}
                                height={20}
                                className="border border-gray-300"
                            />
                        </a>
                    </div>
                </div>
            </div>
        </header>
    );
};

export default Header;
