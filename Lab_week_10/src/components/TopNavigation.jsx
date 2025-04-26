const TopNavigation = () => {
    return (
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
                            src="/vietnam-flag.png"
                            alt="Tiếng Việt"
                            className="flag"
                        />
                    </a>
                    <a href="#" className="flag-link">
                        <img
                            src="/english-flag.png"
                            alt="English"
                            className="flag"
                        />
                    </a>
                </div>
            </div>
        </div>
    );
};

export default TopNavigation;
