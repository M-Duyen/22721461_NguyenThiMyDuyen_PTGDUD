import { useEffect, useState } from "react";

export default function DishList() {
    const [dishes, setDishes] = useState([]);
    const [selectedDish, setSelectedDish] = useState(null);

    useEffect(() => {
        const url = "data/data_dish.json";

        console.log("🔍 Fetching data from:", url);

        fetch(url)
            .then((res) => {
                if (!res.ok) {
                    throw new Error(`HTTP error! Status: ${res.status}`);
                }
                return res.json();
            })
            .then((data) => {
                console.log("✅ Dữ liệu nhận được:", data);
                setDishes(data);
            })
            .catch((err) => {
                console.error("❌ Lỗi khi fetch dữ liệu:", err);
            });
    }, []);

    return (
        <div className="flex flex-col items-center p-4">
            {/* Danh sách món ăn */}
            <div className="flex flex-wrap gap-4 justify-center">
                {dishes.length === 0 ? (
                    <p className="text-gray-500">Đang tải dữ liệu...</p>
                ) : (
                    dishes.map((dish) => (
                        <button
                            key={dish.id}
                            className="border-0 p-4 rounded-md shadow-md hover:shadow-gray-400 w-60 cursor-pointer"
                            onClick={() => setSelectedDish(dish)}
                        >
                            <img
                                src={dish.image}
                                alt={dish.name}
                                className="w-full h-40 object-cover rounded-md"
                            />
                            <h3 className="text-lg font-bold mt-2">{dish.name}</h3>
                            <p className="text-red-500">{dish.price}</p>
                        </button>
                    ))
                )}
            </div>

            {/* Hiển thị chi tiết món ăn */}
            {selectedDish && (
                <div className="fixed top-0 left-0 w-full h-full flex justify-center items-center bg-[rgba(0,0,0,0.5)]">
                    <div className="bg-white p-6 rounded-lg shadow-lg w-96">
                        <h2 className="text-xl font-bold">{selectedDish.name}</h2>
                        <img
                            src={selectedDish.image}
                            alt={selectedDish.name}
                            className="w-full h-40 object-cover rounded-md mt-2"
                        />
                        <p className="text-gray-700 mt-2">{selectedDish.description}</p>
                        <p className="text-red-500 font-bold mt-2">{selectedDish.price}</p>
                        <button
                            className="mt-4 px-4 py-2 bg-red-500 text-white rounded-md"
                            onClick={() => setSelectedDish(null)}
                        >
                            Đóng
                        </button>
                    </div>
                </div>
            )}
        </div>
    );
}
