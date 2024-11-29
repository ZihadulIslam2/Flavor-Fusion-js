import { Outlet } from 'react-router-dom'
import Footer from './components/Footer'
import Navbar from './components/Navbar'


function App() {
  return (
    <>
      <Navbar />
      <main className='min-h-screen'>
        <Outlet />
      </main>
      <Footer />
    </>
  )
}

export default App
