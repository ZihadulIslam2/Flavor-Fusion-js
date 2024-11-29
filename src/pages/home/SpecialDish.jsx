const SpecialDish = () => {
  return (
    <div className="mt-32 flex flex-col md:flex-row justify-evenly ">
      <div>
        <img
          className="max-h-[70%]"
          src="assets/special-dish-banner.jpg"
          alt="special-dish-banner"
        />
      </div>
      <div>
        <div>
          <img src="" alt="" />
          <p className="mt-32 text-primary text-2xl">SPECIAL DISH</p>
        </div>
        <div>
          <h1 className="mt-16 text-4xl text-red-700 md:text-5xl">
            Lobster Tortellini
          </h1>
          <p className="mt-16">
            Lobster tortellini is a luxurious and exquisite pasta dish that
            <br />
            tantalizes the taste buds with its harmonious blend of flavors and
            <br />
            textures.
            <br /> Each bite unveils a delicate pasta pillow, expertly crafted
            and filled
            <br /> with
            <br /> a sumptuous mixture of succulent lobster meat,
            <br /> fragrant herbs, and creamy cheeses. The velvety richness
            <br />
            of the lobster
          </p>
          <h3 className="mt-4">$40.00</h3>
          <h3 className="mt-4 text-primary text-2xl">$20.00</h3>
          <button className="mt-16 cursor-pointer text-lg text-white btn btn-warning">
            See Main Menu
          </button>
        </div>
      </div>
    </div>
  )
}

export default SpecialDish
