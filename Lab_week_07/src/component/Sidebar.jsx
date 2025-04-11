import { NavLink } from 'react-router-dom';

const Sidebar = () => {
    const linkClass = ({ isActive }) =>
        `flex items-center p-3 rounded-lg mt-2 transition duration-300 ${
            isActive
                ? 'bg-pink-500 text-white'
                : 'text-gray-500 hover:bg-pink-500 hover:text-white'
        }`;

    return (
      <div className="border-r border-gray-200 w-72 p-4 bg-white">
            <img
                src="https://res.cloudinary.com/duongofji/image/upload/v1744188613/Image_1858_frjwpk.png"
                alt="logo"
                className="object-contain mb-8"
            />

            <NavLink to="/dashboard" className={linkClass}>
                <img
                    src="https://res.cloudinary.com/duongofji/image/upload/v1744193358/Squares1_p1bgkp.jpg"
                    alt=""
                />
                <p className="ml-3">Dashboard</p>
            </NavLink>

            <NavLink to="/projects" className={linkClass}>
                <img
                    src="https://res.cloudinary.com/duongofji/image/upload/v1744188611/Folder_x3cfac.png"
                    alt=""
                />
                <p className="ml-3">Projects</p>
            </NavLink>

            <NavLink to="/teams" className={linkClass}>
                <img
                    src="https://res.cloudinary.com/duongofji/image/upload/v1744188613/Groups_fwim6e.png"
                    alt=""
                />
                <p className="ml-3">Teams</p>
            </NavLink>

            <NavLink to="/analytics" className={linkClass}>
                <img
                    src="https://res.cloudinary.com/duongofji/image/upload/v1744188612/Pie_chart_glsklk.png"
                    alt=""
                />
                <p className="ml-3">Analytics</p>
            </NavLink>

            <NavLink to="/messages" className={linkClass}>
                <img
                    src="https://res.cloudinary.com/duongofji/image/upload/v1744188614/Chat_jnllfs.png"
                    alt=""
                />
                <p className="ml-3">Message</p>
            </NavLink>

            <NavLink to="/integrations" className={linkClass}>
                <img
                    src="https://res.cloudinary.com/duongofji/image/upload/v1744188614/Code_f14bka.png"
                    alt=""
                />
                <p className="ml-3">Integrations</p>
            </NavLink>

            <div className="text-center m-5 bg-sky-100 mt-10 p-3 pt-6 rounded-lg">
                <img
                    src="https://res.cloudinary.com/duongofji/image/upload/v1744188612/Group_wrjk6h.png"
                    alt=""
                />
                <p className="font-bold text-xl mt-2">V2.0 is available</p>
                <button className="text-blue-500 border w-full rounded-lg h-10 mt-3 hover:bg-blue-500 hover:text-white transition duration-300">
                    Try now
                </button>
            </div>
        </div>
    );
};

export default Sidebar;
