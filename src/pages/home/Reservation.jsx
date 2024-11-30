
const Reservation = () => {
  return (
    <div className="bg-black text-white p-8 flex flex-col  justify-evenly mt-32 md:flex-row">
      <div>
        <div className="text-center mb-8">
          <h2 className="text-yellow-400 text-2xl font-bold">
            Online Reservation
          </h2>
          <p className="text-gray-400">
            Booking request
            {/* <span className="text-yellow-400 font-bold">01300318906</span> */}
          </p>
          <p className="text-gray-400">or fill out the order form</p>
        </div>

        <div className="grid grid-cols-2 gap-4 mb-8">
          <input
            type="text"
            placeholder="Your Name"
            className="w-full p-3 rounded-md border border-yellow-400 bg-transparent text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-yellow-400"
          />
          <input
            type="text"
            placeholder="Phone Number"
            className="w-full p-3 rounded-md border border-yellow-400 bg-transparent text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-yellow-400"
          />
          <input
            type="text"
            placeholder="How many person?"
            className="w-full p-3 rounded-md border border-yellow-400 bg-transparent text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-yellow-400"
          />
          <input
            type="date"
            className="w-full p-3 rounded-md border border-yellow-400 bg-transparent text-white focus:outline-none focus:ring-2 focus:ring-yellow-400"
          />
          <input
            type="time"
            className="w-full p-3 rounded-md border border-yellow-400 bg-transparent text-white focus:outline-none focus:ring-2 focus:ring-yellow-400"
          />
        </div>

        <textarea
          placeholder="Message"
          className="w-full p-3 rounded-md border border-yellow-400 bg-transparent text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-yellow-400 mb-4"
        ></textarea>

        <button className="w-full bg-yellow-400 text-black py-3 rounded-md font-bold hover:bg-yellow-500 transition">
          Submit
        </button>
      </div>
      <div className="mt-8 text-left">
        <h4 className="text-lg font-semibold">Contact Us</h4>
        <p className="text-gray-400">Booking Request</p>
        <h3 className="text-yellow-400 text-xl font-bold">01882343242</h3>
        <p className="text-gray-400">
          Location: <br />
          Uttara Sector 14 <br />
          Lunch Time <br /> Monday to Sunday 11 AM - 2:30 PM <br />
          Dinner Time <br /> Monday to Sunday 5 PM - 10 PM
        </p>
      </div>
    </div>
  )
}

export default Reservation
