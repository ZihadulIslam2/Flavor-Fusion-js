
const TopFoods = () => {
    const TotFoodsCatagory = [  
      {
        categoryName: 'Breakfast',
        categoryImagePath:
          'assets/fresh-pasta-with-hearty-bolognese-parmesan-cheese-generated-by-ai (1).jpg',
      },
      {
        categoryName: 'Lunch',
        categoryImagePath: 'assets/peakpx.jpg',
      },
      {
        categoryName: 'Dinner',
        categoryImagePath: 'assets/pic11.jpeg',
      },
    ]


  return (
    <div>
      <div className="text-center ">
        <h3 className="mt-32 text-primary text-2xl">FLAVORS FOR ROYALTY</h3>
        <h1 className="mt-16 text-4xl text-white md:text-7xl">
          We Offer Top Notch
        </h1>
        <p className="mt-16 text-2xl font-bold text-primary">
          "Indulge in an exquisite culinary journey,
          <br /> where flavors dance on your palate,
          <br /> embracing your senses with every bite."
        </p>
      </div>
      {/* card order */}
      <div className="flex justify-center mt-32 flex-col md:flex-row">
        {TotFoodsCatagory.map((category, index) => (
          <div className="card bg-base-100 w-96 shadow-xl" key={index}>
            <figure className="px-10 pt-10">
              <img
                src={category.categoryImagePath}
                alt={category.categoryName}
                className="rounded-xl"
              />
            </figure>
            <div className="card-body items-center text-center">
              <h2 className="card-title">{category.categoryName}</h2>
              {/* <p>If a dog chews shoes whose shoes does he choose?</p> */}
              <div className="card-actions">
                <button className="cursor-pointer text-lg  text-white btn btn-warning">
                  Order Now
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}

export default TopFoods