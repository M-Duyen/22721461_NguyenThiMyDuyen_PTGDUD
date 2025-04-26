import React from 'react'
import banner from '../assets/banner.png'
const Banner = () => {
    return (
        <div className="banner">
            <div className="banner-content">
                <div className="left-section">
                    <div className="graduate-image">
                        <img src="/graduate.png" alt="Graduate Student" />
                    </div>
                </div>
                <div className="center-section">
                    <div className="admission-info">
                        <div className="admission-year">
                            <img
                                src={banner}
                                alt="Tuyển sinh sau đại học 2025"
                            />
                        </div>
                        <div className="admission-dates">
                            <img
                                src="/admission-dates.png"
                                alt="Đợt 1: Tháng 05/2025, Đợt 2: Tháng 10/2025"
                            />
                        </div>
                    </div>
                    
                </div>
                <div className="right-section">
                    <div className="admission-announcement">
                        <img
                            src="/admission-announcement.png"
                            alt="Xét tuyển"
                        />
                    </div>
                    <div className="programs-offered">
                        <div className="masters-programs">
                            <img
                                src="/masters-programs.png"
                                alt="900 chỉ tiêu trình độ thạc sĩ"
                            />
                        </div>
                        <div className="phd-programs">
                            <img
                                src="/phd-programs.png"
                                alt="150 chỉ tiêu trình độ tiến sĩ"
                            />
                        </div>
                    </div>
                    <div className="program-list">
                        <img
                            src="/program-list.png"
                            alt="Danh sách các ngành đào tạo"
                        />
                    </div>
                </div>
            </div>
            <div className="contact-bar">
                <div className="phone-contact">
                    <i className="icon-phone"></i>
                    <span>(028) 3940 390 (100)</span>
                </div>
                <div className="email-contact">
                    <i className="icon-email"></i>
                    <span>tsd@iuh.edu.vn</span>
                </div>
                <div className="website-contact">
                    <span>tgs.iuh.edu.vn</span>
                </div>
            </div>
        </div>
    );
};

export default Banner;
