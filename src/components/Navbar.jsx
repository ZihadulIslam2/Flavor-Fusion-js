import { useState } from 'react'
import { Link } from 'react-router-dom'
const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false)

  const toggleMenu = () => {
    setIsOpen(!isOpen)
  }

  return (
    <nav className="flex justify-between items-center px-6 py-4 shadow-md">
      <h1 className="text-2xl font-bold text-white">
        <Link to="http://localhost:5173/">
          Flavor <span className="text-red-700">Fusion</span>
        </Link>
      </h1>
      <div className="hidden md:flex">
        <ul className="flex space-x-6 items-center">
          <li className="cursor-pointer text-lg  text-white">
            <Link to="http://localhost:5173/">Home</Link>
          </li>
          <li className="cursor-pointer text-lg  text-white">
            <Link to="http://localhost:5173/menu">Menu</Link>
          </li>
          <li className="cursor-pointer  text-lg  text-white">
            <Link to="http://localhost:5173/about">About Us</Link>
          </li>
          <li className="cursor-pointer text-lg  text-white btn btn-warning">
            <Link to="http://localhost:5173/login">Login</Link>
          </li>
          <li className="cursor-pointer text-lg  text-red-700 btn bg-white">
            <Link to="http://localhost:5173/signup">Sign Up</Link>
          </li>
        </ul>
      </div>
      <div className="md:hidden">
        <button onClick={toggleMenu} className="focus:outline-none">
          {isOpen ? 'Close' : 'Menu'}
        </button>
      </div>
      {isOpen && (
        <div className="absolute top-16 right-0 w-full bg-white shadow-lg md:hidden">
          <ul className="flex flex-col space-y-2 px-4 py-2">
            <li className="cursor-pointer">Home</li>
            <li className="cursor-pointer">Menu</li>
            <li className="cursor-pointer">About Us</li>
            <li className="cursor-pointer">Login</li>
            <li className="cursor-pointer">Sign Up</li>
          </ul>
        </div>
      )}
    </nav>
  )
}

export default Navbar
