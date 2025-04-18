import './App.css';
import RecipeCard from './components/RecipeCard';
import Headers from './components/Header';
import Footer from './components/Footer';
import { useEffect, useState } from 'react';
import MenuChange from './components/MenuChange';

function App() {
    const [users, setUsers] = useState([]);

    useEffect(() => {
        fetch('https://67cd2e86dd7651e464ed8f72.mockapi.io/ThisSummerRecipes')
            .then((response) => response.json())
            .then((data) => {
                setUsers(
                    data.map((user) => ({
                        id: user.id,
                        name: user.name,
                        image: user.image,
                    })),
                ); // Đảm bảo dữ liệu hợp lệ
                setLoading(false);
            })
            .catch((error) => {
                console.error('Error fetching users:', error);
                setLoading(false);
            });
    }, []);

    return (
        <>
            <div className=" shadow-2xl border-1 border-gray-200 rounded-lg">
                <Headers />
                <div
                    className="flex justify-start items-center min-h-screen bg-cover bg-center mt-1"
                    style={{
                        backgroundImage: `url(https://res.cloudinary.com/dvsg1fr4g/image/upload/v1744527323/Image_73_xotzvt.png)`,
                    }}
                >
                    <RecipeCard />
                </div>
                <MenuChange className="flex-2/3" array={users} />

                {/* <Footer /> */}
            </div>
        </>
    );
}

export default App;
