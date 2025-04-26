import React from 'react';
import image from '../assets/image.png'; // <-- Thay đổi đường dẫn hình ảnh nếu cần

const BranchSection = () => {
    return (
        <div className="bg-blue-800 p-4 text-white">
            <div className="container mx-auto flex gap-4">
                {/* Phân hiệu Quảng Ngãi */}
                <div className="flex-1">
                    <h3 className="font-bold mb-2 uppercase text-sm">
                        Phân hiệu Quảng Ngãi
                    </h3>
                    <img
                        src={image} // <-- thay link hình thật
                        alt="Phân hiệu Quảng Ngãi"
                        className="w-full h-auto"
                    />
                </div>

                {/* Cơ sở Thanh Hóa */}
                <div className="flex-1">
                    <h3 className="font-bold mb-2 uppercase text-sm">
                        Cơ sở Thanh Hóa
                    </h3>
                    <img
                        src={image} // <-- thay link hình thật
                        alt="Cơ sở Thanh Hóa"
                        className="w-full h-auto"
                    />
                </div>

                {/* Video và Hình ảnh */}
                <div className="flex-1 relative">
                    <div className="flex justify-between items-center mb-2">
                        <h3 className="font-bold uppercase text-sm">
                            Video và Hình ảnh
                        </h3>
                        <button className="bg-gray-300 text-gray-700 text-xs px-2 py-1 rounded hover:bg-gray-400">
                            xem tất cả
                        </button>
                    </div>
                    <div className="relative">
                        <img
                            src={image} 
                            alt="Video"
                            className="w-full h-auto"
                        />
                        {/* Play Icon */}
                        <div className="absolute inset-0 flex items-center justify-center">
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                className="h-12 w-12 text-white opacity-80"
                                viewBox="0 0 24 24"
                                fill="currentColor"
                            >
                                <path d="M8 5v14l11-7z" />
                            </svg>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default BranchSection;
