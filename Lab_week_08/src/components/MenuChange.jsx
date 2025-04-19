import '../App.css';

export default function ItemsImage({ array }) {
    if (!Array.isArray(array) || array.length === 0) {
        return <p className="text-center text-gray-500">No users available</p>;
    }

    return (
        <div>
            
            <div className="flex justify-center flex-wrap gap-6 p-4">
                {array.map((user, index) => (
                    <div key={index} className="flex flex-col space-y-2 border border-gray-100 p-2 rounded-lg shadow-md h-80">
                        <img className="items-center w-full rounded-xl"
                            src={user.image}
                            alt={user.name}  // Fixed the typo here
                        />
                        <div className="flex flex-row space-x-2 justify-between items-center">
                            <p className="text-lg font-bold text-gray-700 text-left w-42">{user.name}</p>
                            <img
                                className="items-right w-10 h-10"
                                src="https://res.cloudinary.com/dvsg1fr4g/image/upload/v1741502631/Icon_Button_73_tvmzsm.png"
                                alt="Save"  // Fixed the typo here
                            />
                        </div>
                        <span className="text-sm text-pink-500 bg-pink-100 p-1 rounded-lg w-24">
                            {Math.floor(Math.random() * 50) + 1} minutes
                        </span>
                    </div>
                ))}
            </div>
        </div>


    );
}
