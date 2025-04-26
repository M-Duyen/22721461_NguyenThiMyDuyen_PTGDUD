import React from 'react'
import logoIUH from '../assets/logoIUH.png'
import {
    faFacebook,
    faTwitter,
    faLinkedin,
} from '@fortawesome/free-brands-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';


const Footer = () => {
    return (
        <footer className="bg-gray-100 pt-8 pb-4 text-gray-800 text-sm">
            <div className="container mx-auto px-4">
                <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
                    {/* LIÊN HỆ */}
                    <div>
                        <h3 className="font-bold text-red-800 mb-4">LIÊN HỆ</h3>
                        <p className="font-bold mb-2">
                            ĐẠI HỌC CÔNG NGHIỆP TP. HỒ CHÍ MINH
                        </p>
                        <p className="mb-1">
                            Địa chỉ : Số 12 Nguyễn Văn Bảo, Phường 4,
                        </p>
                        <p className="mb-1">
                            Quận Gò Vấp, Thành phố Hồ Chí Minh
                        </p>
                        <p className="mb-1">
                            Điện thoại:{' '}
                            <a href="tel:02838940390" className="text-blue-600">
                                028 3894 0390
                            </a>{' '}
                            - 100
                        </p>
                        <p className="mb-1">
                            Tuyển sinh:{' '}
                            <a href="tel:02839851932" className="text-blue-600">
                                028 3985 1932
                            </a>{' '}
                            -{' '}
                            <a href="tel:02838955858" className="text-blue-600">
                                028 3895 5858
                            </a>{' '}
                            -
                        </p>
                        <p className="mb-1">
                            <a href="tel:02839851917" className="text-blue-600">
                                028 3985 1917
                            </a>
                        </p>
                        <p className="mb-1">
                            Email:{' '}
                            <a
                                href="mailto:dhcn@iuh.edu.vn"
                                className="text-blue-600"
                            >
                                dhcn@iuh.edu.vn
                            </a>
                        </p>
                    </div>

                    {/* HOẠT ĐỘNG KHÁC */}
                    <div>
                        <h3 className="font-bold text-red-800 mb-4">
                            HOẠT ĐỘNG KHÁC
                        </h3>
                        <ul className="space-y-2">
                            <li>
                                <a href="#" className="hover:text-blue-600">
                                    Hoạt động phục vụ cộng đồng
                                </a>
                            </li>
                            <li>
                                <a href="#" className="hover:text-blue-600">
                                    Sinh viên tình nguyện
                                </a>
                            </li>
                            <li>
                                <a href="#" className="hover:text-blue-600">
                                    CLB/Đội/Nhóm sinh viên
                                </a>
                            </li>
                            <li>
                                <a href="#" className="hover:text-blue-600">
                                    Kết nối doanh nghiệp
                                </a>
                            </li>
                        </ul>
                    </div>

                    {/* THÔNG TIN MỞ RỘNG */}
                    <div>
                        <h3 className="font-bold text-red-800 mb-4">
                            THÔNG TIN MỞ RỘNG
                        </h3>
                        <ul className="space-y-2">
                            <li>
                                <a href="#" className="hover:text-blue-600">
                                    Báo chí viết về IUH
                                </a>
                            </li>
                            <li>
                                <a href="#" className="hover:text-blue-600">
                                    Khám phá IUH
                                </a>
                            </li>
                            <li>
                                <a href="#" className="hover:text-blue-600">
                                    Kỹ năng mềm
                                </a>
                            </li>
                            <li>
                                <a href="#" className="hover:text-blue-600">
                                    Bộ sưu tập
                                </a>
                            </li>
                            <li>
                                <a href="#" className="hover:text-blue-600">
                                    Dịch vụ sinh viên
                                </a>
                            </li>
                        </ul>
                    </div>

                    {/* VĂN BẢN TIỆN ÍCH */}
                    <div>
                        <h3 className="font-bold text-red-800 mb-4">
                            VĂN BẢN TIỆN ÍCH
                        </h3>
                        <ul className="space-y-2">
                            <li>
                                <a href="#" className="hover:text-blue-600">
                                    Quy chế-Quy định-Quy trình
                                </a>
                            </li>
                            <li>
                                <a href="#" className="hover:text-blue-600">
                                    Ba công khai
                                </a>
                            </li>
                            <li>
                                <a href="#" className="hover:text-blue-600">
                                    Biểu mẫu đào tạo
                                </a>
                            </li>
                            <li>
                                <a href="#" className="hover:text-blue-600">
                                    Quản lý khoa học
                                </a>
                            </li>
                            <li>
                                <a href="#" className="hover:text-blue-600">
                                    Phản hồi
                                </a>
                            </li>
                        </ul>
                    </div>
                </div>

                <div className="mt-8 pt-6 border-t border-gray-300">
                    <div className="flex flex-col md:flex-row justify-between items-center">
                        <div className="flex items-center mb-4 md:mb-0">
                            <img
                                src={logoIUH}
                                alt="IUH Logo"
                                className="h-16 mr-4"
                            />
                            <div className="text-gray-600">
                                <div className="flex items-center mb-1">
                                    <svg
                                        xmlns="http://www.w3.org/2000/svg"
                                        className="h-4 w-4 mr-1"
                                        fill="none"
                                        viewBox="0 0 24 24"
                                        stroke="currentColor"
                                    >
                                        <path
                                            strokeLinecap="round"
                                            strokeLinejoin="round"
                                            strokeWidth={2}
                                            d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z"
                                        />
                                    </svg>
                                    Số lượt truy cập : 288,835,351
                                </div>
                                <div className="flex items-center mb-1">
                                    <svg
                                        xmlns="http://www.w3.org/2000/svg"
                                        className="h-4 w-4 mr-1"
                                        fill="none"
                                        viewBox="0 0 24 24"
                                        stroke="currentColor"
                                    >
                                        <path
                                            strokeLinecap="round"
                                            strokeLinejoin="round"
                                            strokeWidth={2}
                                            d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z"
                                        />
                                    </svg>
                                    Hôm nay : 21,705
                                </div>
                                <div className="flex items-center">
                                    <svg
                                        xmlns="http://www.w3.org/2000/svg"
                                        className="h-4 w-4 mr-1"
                                        fill="none"
                                        viewBox="0 0 24 24"
                                        stroke="currentColor"
                                    >
                                        <path
                                            strokeLinecap="round"
                                            strokeLinejoin="round"
                                            strokeWidth={2}
                                            d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"
                                        />
                                        <path
                                            strokeLinecap="round"
                                            strokeLinejoin="round"
                                            strokeWidth={2}
                                            d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z"
                                        />
                                    </svg>
                                    Đang xem : 66
                                </div>
                            </div>
                        </div>

                        <div className="flex items-center">
                            <span className="mr-2">Chia sẻ</span>
                            <a href="#" className="mx-1">
                                <FontAwesomeIcon
                                    icon={faFacebook}
                                    size="2x"
                                    className="text-blue-600"
                                />
                            </a>
                            <a href="#" className="mx-1">
                                <FontAwesomeIcon
                                    icon={faTwitter}
                                    size="2x"
                                    className="text-blue-400"
                                />
                            </a>
                            <a href="#" className="mx-1">
                                <FontAwesomeIcon
                                    icon={faLinkedin}
                                    size="2x"
                                    className="text-blue-700"
                                />
                            </a>
                        </div>
                    </div>
                </div>

                <div className="mt-6 text-center text-xs text-gray-600">
                    <p>
                        © Bản quyền 2015 - Đại học Công nghiệp Thành phố Hồ Chí
                        Minh
                    </p>
                    <p>
                        Mọi hành động sử dụng nội dung đăng tải trên Website
                        iuh.edu.vn phải có sự đồng ý bằng văn bản của Đại học
                        Công nghiệp Thành phố Hồ Chí Minh.
                    </p>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
