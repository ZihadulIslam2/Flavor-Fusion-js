const About = () => {
  return (
    <>
      <div className="flex flex-col justify-center items-center my-32 text-center text-white">
        <p className="text-sm uppercase text-yellow-500">Why Choose Us</p>
        <h1 className="text-4xl font-bold mt-4">Our Strength</h1>
        <div className="flex flex-wrap justify-evenly gap-8 mt-28 w-full px-4 md:px-0">
          {/* Card 1 */}
          <div className="flex flex-col items-center space-y-4">
            <img
              src="/assets/features-icon-1.png"
              alt="Hygenic Food"
              className="w-16"
            />
            <p className="text-lg font-semibold">Hygenic Food</p>
            <p className="text-sm text-gray-400 max-w-[180px]">
              Lorem ipsum dolor sit amet, consectetur adipisicing.
            </p>
          </div>
          {/* Card 2 */}
          <div className="flex flex-col items-center space-y-4 max-w-[180px]">
            <img
              src="/assets/features-icon-2.png"
              alt="Fresh Environment"
              className="w-16"
            />
            <p className="text-lg font-semibold">Fresh Environment</p>
            <p className="text-sm text-gray-400 max-w-[180px]">
              Lorem ipsum dolor sit amet, consectetur adipisicing.
            </p>
          </div>
          {/* Card 3 */}
          <div className="flex flex-col items-center space-y-4">
            <img
              src="/assets/features-icon-3.png"
              alt="Skilled Chefs"
              className="w-16"
            />
            <p className="text-lg font-semibold">Skilled Chefs</p>
            <p className="text-sm text-gray-400  max-w-[180px]">
              Lorem ipsum dolor sit amet, consectetur adipisicing.
            </p>
          </div>
          {/* Card 4 */}
          <div className="flex flex-col items-center space-y-4">
            <img
              src="/assets/features-icon-4.png"
              alt="Event & Party"
              className="w-16"
            />
            <p className="text-lg font-semibold">Event & Party</p>
            <p className="text-sm text-gray-400  max-w-[180px]">
              Lorem ipsum dolor sit amet, consectetur adipisicing.
            </p>
          </div>
        </div>
      </div>
      <div className="my-10">
        <img src="/assets/shape-8.png" alt="" />
      </div>
    </>
  )
}

export default About
