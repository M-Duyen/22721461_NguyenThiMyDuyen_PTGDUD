import './App.css';
import Banner from './components/Banner';
import BranchSection from './components/BranchSection ';
import Footer from './components/Footer';
import Header from './components/Header';
import Navbar from './components/Navbar';
import UniversityNews from './components/UniversityNews';

function App() {
    return (
        <>
            <Header />
            <div>
                <Navbar />
                <Banner />
                <UniversityNews />
                <BranchSection />
            </div>

            <Footer className="mt-8" />
        </>
    );
}

export default App;
