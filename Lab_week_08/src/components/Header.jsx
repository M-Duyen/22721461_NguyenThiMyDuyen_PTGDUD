import '../App.css';
export default function Header() {
    const array = ["What to cook", "Rexipes", "Ingredients", "Occasions", "About Us"]
    return (
        <div className="flex p-4 border-b border-gray-200">
            <div className="flex items-center justify-center space-x-2 ">
                <img
                    src="https://res.cloudinary.com/dvsg1fr4g/image/upload/v1741502630/avatar_small_giop85.png"
                    alt=""
                />
                <div>
                    <img
                        className="absolute  mt-[0.8vw] ml-[0.8vw]"
                        src="https://res.cloudinary.com/dvsg1fr4g/image/upload/v1741502634/search_peqxkd.png"
                        alt="Search"
                    />
                    <input
                        type="text"
                        placeholder="What would you like to cook?"
                        className="bg-gray-200 p-2 rounded-lg w-52 pl-8"
                    />
                </div>
            </div>
            <div className="flex-1 items-center justify-center mt-2">
                <ul>
                    {array.map((item, index) => (
                        <li
                            key={index}
                            className="inline-block p-2 text-gray-500"
                        >
                            <a href="#">{item}</a>
                        </li>
                    ))}
                </ul>
            </div>
            <div className="flex items-center justify-center space-x-2">
                <button className="text-pink-500 bg-pink-200 p-2 rounded-2xl pl-3 pr-3">
                    Login
                </button>

                <button className="text-white bg-pink-500 p-2 rounded-2xl pl-3 pr-3">
                    Subscribe
                </button>
            </div>
        </div>
    );

}