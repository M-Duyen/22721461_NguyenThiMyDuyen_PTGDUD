// NewsSection Component
const NewsSection = ({ title, viewAllText, children }) => {
    return (
        <div className="mb-6">
            <div className="flex justify-between items-center border-b border-red-500 pb-1 mb-4">
                <h2 className="text-blue-800 font-bold text-xl">{title}</h2>
                <a
                    href="#"
                    className="bg-gray-300 text-gray-700 px-2 py-0.5 text-sm hover:bg-gray-400"
                >
                    {viewAllText || 'xem tất cả'}
                </a>
            </div>
            <div className="space-y-3">{children}</div>
        </div>
    );
};

// NewsItem Component
const NewsItem = ({ title, date, isNew, icon = '►' }) => {
    return (
        <div className="flex items-start">
            <span className="text-red-600 mr-2 mt-1">{icon}</span>
            <div>
                <a href="#" className="hover:text-blue-600">
                    {title}
                    {isNew && (
                        <span className="inline-block ml-2 bg-red-600 text-white text-xs px-1 rounded-sm">
                            new
                        </span>
                    )}
                </a>
                <span className="text-gray-500 text-sm ml-2">{date}</span>
            </div>
        </div>
    );
};

// SidebarItem Component
const SidebarItem = ({ title }) => {
    return (
        <div className="border-b border-gray-300">
            <a
                href="#"
                className="flex justify-between items-center py-3 px-4 hover:bg-gray-200"
            >
                <span className="font-medium text-gray-800">{title}</span>
                <span className="text-gray-500">›</span>
            </a>
        </div>
    );
};

// NewsWithImage Component
const NewsWithImage = ({ imageUrl, imageAlt, children }) => {
    return (
        <div>
            <div className="mb-4">
                <img
                    src={imageUrl || '/placeholder.svg'}
                    alt={imageAlt}
                    className="w-full h-auto border border-gray-300"
                />
            </div>
            <div className="space-y-3">{children}</div>
        </div>
    );
};

// Main UniversityNews Component
const UniversityNews = () => {
    return (
        <div className="flex flex-col md:flex-row gap-6 max-w-7xl mx-auto">
            {/* Sidebar */}
            <div className="w-full md:w-1/4">
                <div className="bg-blue-700 text-white py-3 px-4 font-bold text-center text-xl">
                    CƠ CẤU TỔ CHỨC
                </div>
                <div className="bg-gray-200">
                    <SidebarItem title="LÃNH ĐẠO" />
                    <SidebarItem title="CÁC PHÒNG BAN" />
                    <SidebarItem title="CÁC KHOA" />
                    <SidebarItem title="CÁC VIỆN" />
                    <SidebarItem title="CÁC TRUNG TÂM" />
                    <SidebarItem title="CÁC PHÂN HIỆU" />
                    <SidebarItem title="ĐOÀN THỂ" />
                </div>
            </div>

            {/* Main Content */}
            <div className="w-full md:w-3/4">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    {/* Announcements Section */}
                    <NewsSection title="THÔNG BÁO" viewAllText="xem tất cả">
                        <NewsItem
                            title="Thông báo v/v kế hoạch nghỉ hè đối với sinh viên năm 2025"
                            date="24-04-2025"
                            isNew={true}
                        />
                        <NewsItem
                            title="Thông báo tuyển chọn nam sinh tốt nghiệp đại học cho các trường quân đội..."
                            date="21-04-2025"
                            isNew={true}
                        />
                    </NewsSection>

                    {/* Admissions Section */}
                    <NewsSection title="TUYỂN SINH" viewAllText="xem tất cả">
                        <NewsItem
                            title="Thông báo tuyển sinh đào tạo liên thông từ trình độ cao đẳng lên trình..."
                            date="28-03-2025"
                        />
                        <NewsItem
                            title="Thông báo v/v tuyển sinh đại học văn bằng hai, đợt 1 năm 2025"
                            date="20-03-2025"
                        />
                    </NewsSection>

                    {/* News Section */}
                    <NewsSection
                        title="TIN TỨC - SỰ KIỆN"
                        viewAllText="xem tất cả"
                    >
                        <NewsWithImage
                            imageUrl="/news-image-1.jpg"
                            imageAlt="IUH bế mạc thành công đợt đánh giá chất lượng cấp trường"
                        >
                            <NewsItem
                                title="IUH bế mạc thành công đợt đánh giá chất lượng cấp trường theo tiêu chuẩn..."
                                date="26-04-2025"
                                isNew={true}
                            />
                            <NewsItem
                                title="AVEVA tài trợ gói phần mềm trị giá 180.000 đô Mỹ cho Đại học Công nghiệp..."
                                date="25-04-2025"
                                isNew={true}
                            />
                        </NewsWithImage>
                    </NewsSection>

                    {/* International Cooperation Section */}
                    <NewsSection
                        title="HỢP TÁC QUỐC TẾ"
                        viewAllText="xem tất cả"
                    >
                        <NewsWithImage
                            imageUrl="/news-image-2.jpg"
                            imageAlt="Sôi nổi loạt hoạt động Tuần lễ giao lưu văn hóa, khoa học sinh viên quốc tế"
                        >
                            <NewsItem
                                title="Sôi nổi loạt hoạt động Tuần lễ giao lưu văn hóa, khoa học sinh viên quốc..."
                                date="24-03-2025"
                            />
                            <NewsItem
                                title="Đại học Công nghiệp TP. HCM tham gia dự án Green Edu Seeds của quỹ Erasmus"
                                date="19-03-2025"
                            />
                        </NewsWithImage>
                    </NewsSection>
                </div>
            </div>
        </div>
    );
};

export default UniversityNews;
