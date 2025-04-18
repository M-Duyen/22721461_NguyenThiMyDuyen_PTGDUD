const Footer = () => {
    return (
        <footer className="bg-gray-900 text-white py-10 px-8">
            <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-4 gap-6">

                {/* About Us */}
                <div className="col-span-2">
                    <h3 className="font-semibold text-lg text-left">About Us</h3>
                    <p className="text-gray-400 mt-2 text-left">
                        Welcome to our website, a wonderful place to explore and learn how to cook like a pro.
                    </p>
                    <div className="mt-4 flex gap-4">
                        <input
                            type="email"
                            placeholder="Enter your email"
                            className="p-2 rounded-md w-full bg-white text-black outline-none"
                        />
                        <button className="bg-pink-500 px-4 py-2 rounded-md text-white font-semibold">
                            Send
                        </button>
                    </div>

                    <div className="mt-8 pt-12 flex flex-col md:flex-row justify-between items-center text-gray-400 text-sm">
                        <div className="flex items-center space-x-2">
                            <img src="https://res.cloudinary.com/dvsg1fr4g/image/upload/v1741502630/avatar_small_giop85.png" alt="" />
                            <span>2023 Chefify Company</span>
                        </div>
                        <div className="mt-2 md:mt-0">
                            <a href="#" className="mr-4 hover:text-white">Terms of Service</a>
                            <a href="#" className="hover:text-white">Privacy Policy</a>
                        </div>
                    </div>
                </div>

                <div className="text-left pl-20">
                    {/* Learn More */}
                    <div className=" rounded-lg">
                        <h3 className="font-semibold text-lg ">Learn More</h3>
                        <ul className="mt-2 space-y-2 text-gray-400 ">
                            <li><a href="#">Our Cooks</a></li>
                            <li><a href="#">See Our Features</a></li>
                            <li><a href="#">FAQ</a></li>
                        </ul>
                    </div>

                    {/* Shop */}
                    <div>
                        <h3 className="font-semibold text-lg pt-6">Shop</h3>
                        <ul className="mt-2 space-y-2 text-gray-400">
                            <li><a href="#">Gift Subscription</a></li>
                            <li><a href="#">Send Us Feedback</a></li>
                        </ul>
                    </div>
                </div>

                {/* Recipes */}
                <div className=" text-left pl-20 ">
                    <h3 className="font-semibold text-lg">Recipes</h3>
                    <ul className="mt-2 space-y-2 text-gray-400">
                        <li><a href="#">What to Cook This Week</a></li>
                        <li><a href="#">Pasta</a></li>
                        <li><a href="#">Dinner</a></li>
                        <li><a href="#">Healthy</a></li>
                        <li><a href="#">Vegetarian</a></li>
                        <li><a href="#">Vegan</a></li>
                        <li><a href="#">Christmas</a></li>
                    </ul>
                </div>
            </div>



        </footer>
    );
};

export default Footer;
