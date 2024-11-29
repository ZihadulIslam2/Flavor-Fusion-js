// import { useEffect, useState } from "react"

// const Menu = () => {
//     const [data, setData] = useState(null)

//   useEffect(()=>{
//     fetch('menu.json').then((response) => {
//       if (!response.ok) {
//         throw new Error(`HTTP error! status: ${response.status}`)
//       }
//       return response.json();
//     })
//     .then((jsonData)=> setData(jsonData))
//     .catch((error)=> console.log(error))
//   },[])

//   return (
//     <div>Menu</div>
//   )
// }

// export default Menu


import  { useEffect, useState } from 'react'

const MenuPage = () => {
  const [menuItems, setMenuItems] = useState([])

  // Fetch menu.json data from the public folder
  useEffect(() => {
    fetch('/menu.json')
      .then((response) => {
        if (!response.ok) {
          throw new Error('Failed to fetch menu data')
        }
        return response.json()
      })
      .then((data) => setMenuItems(data))
      .catch((error) => console.error(error))
  }, [])

  return (
    <div className="bg-gray-900 text-white min-h-screen p-6">
      <h1 className="text-4xl font-bold text-yellow-400 text-center mb-10">
        Food Menu Here
      </h1>
      <div className="grid gap-6 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
        {menuItems.map((item) => (
          <div
            key={item._id}
            className="bg-gray-800 rounded-lg shadow-lg overflow-hidden"
          >
            <img
              src={item.foodPicture}
              alt={item.foodName}
              className="w-full h-48 object-cover"
            />
            <div className="p-4">
              <h2 className="text-xl font-semibold mb-2">{item.foodName}</h2>
              <p className="text-gray-400 text-sm mb-4">{item.details}</p>
              <button className="w-full bg-yellow-400 text-black py-2 rounded font-semibold hover:bg-yellow-500 transition duration-300">
                Order Now
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}

export default MenuPage
