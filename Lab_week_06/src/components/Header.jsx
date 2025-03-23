import logo from '../assets/logo.png';
import Menu from './Menu';
import user from '../assets/user.svg';

export default function Header() {

    return (
        <div className="flex flex-row justify-between p-2 bg-[#2cce88] text-white">
            <div className="flex-1 flex items-center gap-6">
                <img
                    className="w-20 h-20 rounded-full"
                    src={logo}
                    alt="logo"
                />
                <input
                    placeholder='Tìm kiếm'
                    className='border border-gray-200 w-80 h-8 rounded-md hover:border-white  outline-0 p-2 '
                    type="text" name="" id="" />

            </div>
            <div className='flex-1'>
                <Menu />
            </div>
            <div className='flex'>
                <div className="flex items-center h-full gap-4 justify-end">
                    <img
                        className='w-7 h-7 ' 
                        src={user} alt="user" />

                    <button className="bg-red-400 hover:bg-red-700 text-white font-bold py-2 px-4 rounded ">
                        Book Table
                    </button>
                </div>
            </div>


        </div>
    )
}