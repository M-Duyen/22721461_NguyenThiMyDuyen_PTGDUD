import { useEffect, useState } from 'react'
import './App.css'
import './index.css'
import MenuChange from './components/ImageItem'
import Header from './components/Header'

interface User {
  id: string
  name: string
  image: string
}

function App() {
  const [users, setUsers] = useState<User[]>([])
  const [loading, setLoading] = useState<boolean>(true)




  useEffect(() => {
    fetch('https://67cd2e86dd7651e464ed8f72.mockapi.io/User')
      .then((response) => response.json())
      .then((data: any[]) => {
        setUsers(data.map(user => ({ id: user.id, name: user.name, image: user.image })))  // Đảm bảo dữ liệu hợp lệ
        setLoading(false)
      })
      .catch((error) => {
        console.error("Error fetching users:", error)
        setLoading(false)
      })
  }, [])

  return (
    <>

      <Header />
      {loading ? (
        <p className="text-center text-gray-500">Loading...</p>
      ) : (
        <MenuChange array={users} />
      )}
    </>
  )
}

export default App
