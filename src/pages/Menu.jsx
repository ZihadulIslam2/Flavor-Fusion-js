import { useGetAllFoodsQuery } from '../redux/features/foodsApiSlice'

const MenuPage = () => {
  const { data, error, isLoading } = useGetAllFoodsQuery()

  if (isLoading) return <p className="text-center text-white">Loading...</p>

  if (error) {
    return (
      <p className="text-center text-red-500">
        Error fetching data: {error.data?.message || error.status}
      </p>
    )
  }

  return (
    <div className="bg-gray-900 text-white min-h-screen p-6">
      <h1 className="text-4xl font-bold text-yellow-400 text-center mb-10">
        Food Menu Here
      </h1>
      {data?.length === 0 ? (
        <p className="text-center text-gray-400">No menu items available</p>
      ) : (
        <div className="grid gap-6 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
          {data?.map((item) => (
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
      )}
    </div>
  )
}

export default MenuPage
