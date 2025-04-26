import React from 'react'
import coVN from '../assets/coVN.png'
import coEN from '../assets/co.png'
import logoIUH from '../assets/logoIUH.png';

const Header = () => {
    return (
        <div className="header-container">
            {/* Top navigation bar */}
            <div className="top-nav">
                <div className="container">
                    <div className="left-links">
                        <a href="#" className="nav-link">
                            <i className="icon-monitor"></i> E-OFFICE
                        </a>
                        <a href="#" className="nav-link">
                            <i className="icon-mail"></i> EMAIL
                        </a>
                        <a href="#" className="nav-link">
                            <i className="icon-book"></i> THƯ VIỆN - THÔNG TIN
                        </a>
                    </div>
                    <div className="right-links">
                        <a href="#" className="nav-link">
                            KẾT NỐI
                        </a>
                        <span className="separator">|</span>
                        <a href="#" className="nav-link">
                            LIÊN HỆ
                        </a>
                        <a href="#" className="flag-link">
                            <img
                                src={coVN}
                                alt="Tiếng Việt"
                                className="flag"
                            />
                        </a>
                        <a href="#" className="flag-link">
                            <img
                                src={coEN}
                                alt="English"
                                className="flag"
                            />
                        </a>
                    </div>
                </div>
            </div>

            {/* University info section */}
            <div className="university-info">
                <div className="container">
                    <div className="logo-section">
                        <img
                            src={logoIUH}
                            alt="IUH Logo"
                            className="university-logo"
                        />
                    </div>
                    <div className="university-title ">
                        <h2 className="ministry">BỘ CÔNG THƯƠNG</h2>
                        <h1 className="university-name">
                            ĐẠI HỌC CÔNG NGHIỆP TP. HỒ CHÍ MINH
                        </h1>
                        <p className="university-slogan">
                            Đổi mới tư duy, làm giàu thêm tri thức - đời sống
                        </p>
                    </div>
                </div>
            </div>

            {/* Main navigation */}
            <div className="main-nav">
                <div className="container">
                    <div className="nav-items">
                        <a href="#" className="home-icon">
                            <i className="icon-home"></i>
                        </a>
                        <div className="dropdown">
                            <a href="#" className="nav-item">
                                GIỚI THIỆU <i className="icon-chevron-down"></i>
                            </a>
                        </div>
                        <div className="dropdown">
                            <a href="#" className="nav-item">
                                ĐÀO TẠO <i className="icon-chevron-down"></i>
                            </a>
                        </div>
                        <div className="dropdown">
                            <a href="#" className="nav-item">
                                TUYỂN SINH <i className="icon-chevron-down"></i>
                            </a>
                        </div>
                        <a href="#" className="nav-item">
                            NGHIÊN CỨU
                        </a>
                        <a href="#" className="nav-item">
                            SINH VIÊN
                        </a>
                        <a href="#" className="nav-item">
                            GIẢNG VIÊN
                        </a>
                        <a href="#" className="nav-item">
                            VĂN BẰNG
                        </a>
                        <div className="search-box">
                            <input type="text" placeholder="Tìm kiếm" />
                            <button type="submit">
                                <i className="icon-search"></i>
                            </button>
                        </div>
                    </div>
                </div>
            </div>

            {/* Banner image */}
            <div className="banner">
                <div className="banner-content">
                    <div className="vr-text">
                        <span className="blue-text">Trải nghiệm</span> KHÔNG
                        GIAN THỰC TẾ ẢO
                        <div className="university-vr-name">
                            ĐẠI HỌC CÔNG NGHIỆP THÀNH PHỐ HỒ CHÍ MINH
                        </div>
                    </div>
                    <div className="qr-section">
                        <img
                            src="/qr-code.png"
                            alt="QR Code"
                            className="qr-code"
                        />
                        <div className="vr-url">HTTPS://VR.IUH.EDU.VN</div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Header;
