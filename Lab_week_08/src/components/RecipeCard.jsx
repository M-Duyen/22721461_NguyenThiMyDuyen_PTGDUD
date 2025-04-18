import React from 'react';

const RecipeCard = () => {
    return (
        <div className="flex flex-col justify-center items-center bg-white rounded-lg shadow-md p-6 w-96 relative left-1/5 transform -translate-x-1/2 border-pink-200 border-2 border-dashed">
            {/* Nhãn "Recipe of the day" */}
            <div className="absolute -top-4 left-1/3 bg-yellow-400 text-black px-2 py-1 rounded-md text-xs font-semibold z-10">
                Recipe of the day
            </div>

            <h2 className="text-xl font-semibold mb-2 mt-8 text-pink-400">
                Salad Caprese
            </h2>
            <p className="text-gray-600 h-34 text-sm">
                Classic Italian Salad Caprese ripe tomatoes, fresh mozzarella,
                herbs, olive oil and balsamic vinegar create a refreshing dish
                for lunch or appetizer.
            </p>
            <div className="flex flex-col items-center mb-4 justify-center gap-y-1.5">
                {/* Hình ảnh đại diện (có thể là một icon hoặc ảnh nhỏ) */}
                <div className="w-10 h-10 bg-gray-200 rounded-full mr-2 flex items-center justify-center">
                    {/* Thay thế bằng hình ảnh hoặc icon nếu có */}
                    <img
                        src="https://res.cloudinary.com/dvsg1fr4g/image/upload/v1741502630/avatar_gxge3o.png"
                        alt=""
                    />
                </div>
                <div>
                    <span className="text-sm font-medium ">Salad Caprese</span>
                </div>
            </div>
            <button className="bg-pink-600 hover:bg-pink-700 text-white p-3 rounded-xl flex flex-row items-center justify-center gap-x-2">
                View Now
                <img
                    className="w-5 h-5"
                    src="https://res.cloudinary.com/dvsg1fr4g/image/upload/v1744529088/arrow-right-solid_tdi46v.svg"
                    alt=""
                />
            </button>
        </div>
    );
};
export default RecipeCard;
