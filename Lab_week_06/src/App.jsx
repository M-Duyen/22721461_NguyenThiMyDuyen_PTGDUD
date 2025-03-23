import './App.css';
import Header from './components/Header';
import Footer from './components/Footer';
import DishList from './components/DishList';
import { useState } from 'react';

function App() {
  const [selectedDish, setSelectedDish] = useState(null);

  return (
    <div>
      <Header />
      <DishList onSelectDish={setSelectedDish} />
      <Footer />
    </div>
  );
}

export default App;
