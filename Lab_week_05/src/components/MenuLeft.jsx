export default function MenuLeft() {
    return (
        <div className="flex flex-2/3 flex-col border border-gray-200 rounded-lg h-2/3">
            <div className=" border-b border-gray-200">
                <div className="flex flex-row space-x-2 p-4">
                    <img
                        className="w-10 h-10"
                        src="https://res.cloudinary.com/dvsg1fr4g/image/upload/v1741502632/List_1_sehhlv.png" alt="" />
                    <span className="text-3xl font-bold text-gray-700 text-left w-42">
                        FILTERS
                    </span>
                </div>
                <div className="flex flex-row justify-between items-center space-y-2 mt-2 p-4 pb-0">
                    <h4
                        className="font-semibold text-xl"
                    >Type</h4>
                    <img
                        src="https://res.cloudinary.com/dvsg1fr4g/image/upload/v1741502632/Chevron_up_large_1_u6j3ig.png" alt="" />

                </div>
                <div className="grid grid-cols-2 gap-4 mt-4 p-4 pt-0">
                    <div className="flex flex-row space-x-2">
                        <input

                            class="custom-checkbox"
                            type="checkbox" />
                        <label>Pan-fried</label>
                    </div>
                    <div className="flex flex-row space-x-2">
                        <input
                            class="custom-checkbox"
                            type="checkbox" />
                        <label>Stir-fried</label>
                    </div>
                    <div className="flex flex-row space-x-2">
                        <input
                            class="custom-checkbox"
                            type="checkbox" />
                        <label>Grilled</label>
                    </div>
                    <div className="flex flex-row space-x-2">
                        <input
                            class="custom-checkbox"
                            type="checkbox" />
                        <label>Roasted</label>
                    </div>
                    <div className="flex flex-row space-x-2">
                        <input
                            class="custom-checkbox"
                            type="checkbox" />
                        <label>Sauteed</label>
                    </div>
                    <div className="flex flex-row space-x-2">
                        <input
                            class="custom-checkbox"
                            type="checkbox" />
                        <label>Baked</label>
                    </div>
                    <div className="flex flex-row space-x-2">
                        <input
                            class="custom-checkbox"
                            type="checkbox" />
                        <label>Steamed</label>
                    </div>
                    <div className="flex flex-row space-x-2">
                        <input
                            class="custom-checkbox"
                            type="checkbox" />
                        <label>Stewed</label>
                    </div>

                </div>
            </div>

            <div className="border-b border-gray-200">
                <div className="flex flex-row justify-between items-center space-y-2 mt-2 p-4 pb-0">
                    <h4
                        className="font-semibold text-xl"
                    >Time</h4>
                    <img
                        src="https://res.cloudinary.com/dvsg1fr4g/image/upload/v1741502632/Chevron_up_large_1_u6j3ig.png" alt="" />

                </div>
                <div className="p-4 ">
                    <div className="flex flex-row space-x-8 pl-12">
                        <label> 30 minutes</label>
                        <label> 50 minutes</label>
                    </div>
                    <img src="https://res.cloudinary.com/dvsg1fr4g/image/upload/v1741502634/Slider_1_s82vch.png" alt="" />

                </div>
            </div>

            <div className="border-b border-gray-200">
                <div className="flex flex-row justify-between items-center space-y-2 mt-2 p-4 pb-0">
                    <h4
                        className="font-semibold text-xl"
                    >Rating</h4>
                    <img
                        src="https://res.cloudinary.com/dvsg1fr4g/image/upload/v1741502632/Chevron_up_large_1_u6j3ig.png" alt="" />

                </div>
                <div className="p-4 ">
                    <div className="flex flex-row space-x-2 space-y-2">
                        <input
                            class="custom-checkbox"
                            type="checkbox" name="" id="" />
                        <img

                            className="w-36 h-5"
                            src="https://res.cloudinary.com/dvsg1fr4g/image/upload/v1741502633/Rating_13_mnxtrj.png" alt="" />
                    </div>
                    <div className="flex flex-row space-x-2 space-y-2">
                        <input
                            class="custom-checkbox"
                            type="checkbox" name="" id="" />
                        <img
                            className="w-36 h-5"
                            src="https://res.cloudinary.com/dvsg1fr4g/image/upload/v1741502633/Rating_12_dd2riz.png" alt="" />
                    </div>
                    <div className="flex flex-row space-x-2 space-y-2">
                        <input
                            class="custom-checkbox"
                            type="checkbox" name="" id="" />
                        <img
                            className="w-36 h-5"
                            src="https://res.cloudinary.com/dvsg1fr4g/image/upload/v1741502633/Rating_14_zaxouy.png" alt="" />
                    </div>
                    <div className="flex flex-row space-x-2 space-y-2">
                        <input
                            class="custom-checkbox"
                            type="checkbox" name="" id="" />
                        <img
                            className="w-36 h-5"
                            src="https://res.cloudinary.com/dvsg1fr4g/image/upload/v1741502633/Rating_15_ppdg3x.png" alt="" />
                    </div>
                    <div className="flex flex-row space-x-2 space-y-2">
                        <input

                            class="custom-checkbox"
                            type="checkbox" name="" id="" />
                        <img

                            className="w-36 h-5"
                            src="https://res.cloudinary.com/dvsg1fr4g/image/upload/v1741502632/Rating_11_olikvg.png" alt="" />
                    </div>
                </div>


            </div>
            <div className="p-4 pt-8 pb-8">
                <button
                    className="bg-pink-500 text-white p-2 rounded-lg w-72 hover:bg-pink-600 transition"
                >Apply
                </button>
            </div>





        </div>
    )
}