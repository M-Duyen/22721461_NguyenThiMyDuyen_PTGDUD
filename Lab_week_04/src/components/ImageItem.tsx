export default function MenuChange({ array }: { array: { image: string; name: string }[] }) {
    if (!Array.isArray(array) || array.length === 0) {
        return <p className="text-center text-gray-500">No users available</p>;
    }

    return (
        <div className="flex justify-center flex-wrap gap-6 p-4 ">
            {array.map((user, index) => (
                <div key={index} className="flex flex-col space-y-2 border border-gray-100 p-2 rounded-lg shadow-md h-80">
                    <img className="items-center w-64"
                        src={user.image}
                        alt={user.name}
                    />
                    <div className="flex flex-rol space-x-2">
                        <p className=" text-lg font-bold text-gray-700 text-left w-52">{user.name}</p>
                        <img 
                            className="items-right w-10 h-10"
                            src="https://res.cloudinary.com/dvsg1fr4g/image/upload/v1741502631/Icon_Button_73_tvmzsm.png"
                            alt="Save" />
                    </div>
                    <span className="text-sm text-pink-500 bg-pink-100 p-1 rounded-lg w-24 mt-4">
                        {Math.floor(Math.random() *50) +1} minutes
                    </span>
                </div>
            ))}
        </div>
    );
}
