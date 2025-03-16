import { useEffect, useState } from 'react';

import MenuChange from './components/ItemsImage';
import Header from './components/Header';
import MenuLeft from './components/MenuLeft';
import Footer from './components/Footer';

function App() {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    fetch('https://67cd2e86dd7651e464ed8f72.mockapi.io/User')
      .then((response) => response.json())
      .then((data) => {
        setUsers(data.map(user => ({ id: user.id, name: user.name, image: user.image }))); // Đảm bảo dữ liệu hợp lệ
        setLoading(false);
      })
      .catch((error) => {
        console.error("Error fetching users:", error);
        setLoading(false);
      });
  }, []);

  return (
    <>
      <Header />
      <div className='flex flex-row mt-16'>
        <MenuLeft className='flex-1/3' />

        <MenuChange className='flex-2/3' array={users} />

      </div>
      <Footer />
    </>
  );
}

export default App;