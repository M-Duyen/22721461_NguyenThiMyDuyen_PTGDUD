import '../App.css';

export default function ItemsImage({ array }) {
    if (!Array.isArray(array) || array.length === 0) {
        return <p className="text-center text-gray-500">No users available</p>;
    }

    return (
        <div>
            <div className="flex justify-center flex-wrap gap-6 p-4">
                {array.map((editorPick, index) => (
                    <div
                        key={index}
                        className="flex flex-row  border border-gray-100 p-2 rounded-lg shadow-md h-62 justify-around gap-4"
                    >
                        <div className="flex flex-col ">
                            <img
                                className="items-center w-50 h-56 rounded-xl"
                                src={editorPick.image}
                                alt={editorPick.food_name} // Fixed the typo here
                            />
                        </div>

                        <div className="flex flex-col space-y-4">
                            <div className="flex flex-row justify-between items-center">
                                <p className="text-lg font-bold text-gray-700 text-left w-84">
                                    {editorPick.food_name}
                                </p>
                                <img
                                    className="items-right w-10 h-10"
                                    src="https://res.cloudinary.com/dvsg1fr4g/image/upload/v1741502631/Icon_Button_73_tvmzsm.png"
                                    alt="Save"
                                />
                            </div>
                            <div className="text-sm w-[5vw] -mt-[1vw] ">
                                {Math.floor(Math.random() * 50) + 1} minutes
                            </div>
                            <div className="flex flex-row space-x-2 items-center">
                                <img
                                    className="items-right w-12 h-12"
                                    src={editorPick.ava}
                                    alt="User Avatar"
                                />
                                <p className="text-sm font-medium text-gray-700 text-left w-42">
                                    {editorPick.name}
                                </p>
                            </div>
                            <div className="flex flex-row space-x-2 items-center">
                                <p className="text-sm text-gray-700 text-left w-[20vw]">
                                    {editorPick.description}
                                </p>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
}
