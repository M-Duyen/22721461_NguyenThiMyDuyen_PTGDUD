export default function Header() {
    const array = ["What to cook", "Rexipes", "Ingredients", "Occasions", "About Us"]
    return (

        <div className="flex justify-around p-4 border-b">
            <div className="flex-1 flex items-center justify-center space-x-2">
                <img src="https://res.cloudinary.com/dvsg1fr4g/image/upload/v1741502630/avatar_small_giop85.png" alt="" />
                <div>
                    <img 
                        className="absolute w-6 mt-2 ml-2"
                        src="https://res.cloudinary.com/dvsg1fr4g/image/upload/v1741502634/search_peqxkd.png" alt="Search" />
                    <input type="text"
                        placeholder="What would you like to cook?"
                        className="bg-gray-200 p-2 rounded-lg w-72 pl-8"
                    />
                </div>
            </div>
            <div className="flex-1 flex items-center justify-center ">
                <ul>
                    {array.map((item, index) => (
                        <li key={index} className="inline-block p-2 text-gray-500"><a href="#">{item}</a></li>
                    ))}
                </ul>

            </div>
            <div className="flex-2 flex items-center justify-center space-x-2">
                <div className="text-pink-500 bg-pink-100 p-2 rounded-lg flex flex-row space-x-2">
                    <img
                        className="w-6"
                        src="https://res.cloudinary.com/dvsg1fr4g/image/upload/v1741502629/archive_check_as3w6v.png" alt="" />
                    <button >
                        Your Recipe Box
                    </button>
                </div>

                <img
                    className="w-14"
                    src="https://res.cloudinary.com/dvsg1fr4g/image/upload/v1741502630/avatar_gxge3o.png" alt="" />
            </div>
        </div>



    )

}