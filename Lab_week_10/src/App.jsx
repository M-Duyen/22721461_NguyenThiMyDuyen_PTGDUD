import './App.css';
import Banner from './components/Banner';
import Footer from './components/Footer';
import Header from './components/Header';
import Navbar from './components/Navbar';

function App() {
    return (
        <>
        <Header />
        <div>
          <Navbar />
          <Banner />
        </div>
        <h1>Content</h1>
        <Footer />
        </>
    );
}

export default App;
