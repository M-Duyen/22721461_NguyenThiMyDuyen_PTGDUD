import './App.css';
import RecipeCard from './components/RecipeCard';
import Headers from './components/Header';
import Footer from './components/Footer';
import { useEffect, useState } from 'react';
import MenuChange from './components/MenuChange';
import EditorPick from './components/EditorPick';
function App() {
    const [thisSummerRecipes, setThisSummerRecipes] = useState([]);
    const [recipesWithVideos, setRecipesWithVideos] = useState([]);
    const [editorPick, setEditorPick] = useState([]);

    useEffect(() => {
        fetch('https://67cd2e86dd7651e464ed8f72.mockapi.io/ThisSummerRecipes')
            .then((response) => response.json())
            .then((data) => {
                const firstFourUsers = data.slice(0, 4);
                const lastFourUsers = data.slice(4, 8);

                setThisSummerRecipes(
                    firstFourUsers.map((user) => ({
                        id: user.id,
                        name: user.name,
                        image: user.image,
                    })),
                );
                setRecipesWithVideos(
                    lastFourUsers.map((user) => ({
                        id: user.id,
                        name: user.name,
                        image: user.image,
                    })),
                );
            })
            .catch((error) => {
                console.error('Error fetching data:', error);
            });
    }, []);
    useEffect(() => {
        fetch('https://67cd2e86dd7651e464ed8f72.mockapi.io/User')
            .then((response) => response.json())
            .then((data) => {
                const lastFourUsers = data.slice(0, 4);

                setEditorPick(
                    lastFourUsers.map((editor) => ({
                        id: editor.id,
                        name: editor.name,
                        image: editor.image,
                        ava: editor.ava,
                        food_name: editor.food_name,
                        description: editor.description,
                    })),
                );
            })
            .catch((error) => {
                console.error('Error fetching data:', error);
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
                <div>
                    <h1 className="text-3xl font-bold font-serif mt-[5vw] text-pink-500 ">
                        This Summer Recipes
                    </h1>
                    <p className=" font-serif mt-[1vw] text-gray-500 mb-[2vw]">
                        We have all your Independence Day sweets covered.
                    </p>
                </div>
                <MenuChange className="flex-2/3" array={thisSummerRecipes} />
                <div>
                    <h1 className="text-3xl font-bold font-serif mt-[5vw] text-pink-500 ">
                        Recipes With Videos
                    </h1>
                    <p className=" font-serif mt-[1vw] text-gray-500 mb-[2vw]">
                        Cooking Up Culinary Creations with Step-by-Step Videos
                    </p>
                </div>
                <MenuChange className="flex-2/3" array={recipesWithVideos} />
                <div>
                    <h1 className="text-3xl font-bold font-serif mt-[5vw] text-pink-500 ">
                        Editor's pick
                    </h1>
                    <p className=" font-serif mt-[1vw] text-gray-500 mb-[2vw]">
                        Curated Culinary Delights: Handpicked Favorites by Our
                        Expert Editors!
                    </p>
                </div>
                <EditorPick className="flex-2/3 mb-[10vw]" array={editorPick} />

                <Footer />
            </div>
        </>
    );
}

export default App;
