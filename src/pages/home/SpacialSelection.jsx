const SpacialSelection = () => {
  const FoodsMenu = [
    {
      menuName: 'Greek Salad',
      menuImg: '/assets/menu-1.png',
    },
    {
      menuName: 'Greek Salad',
      menuImg: '/assets/menu-2.png',
    },
    {
      menuName: 'Greek Salad',
      menuImg: '/assets/menu-3.png',
    },
    {
      menuName: 'Greek Salad',
      menuImg: '/assets/menu-4.png',
    },
    {
      menuName: 'Greek Salad',
      menuImg: '/assets/menu-5.png',
    },
    {
      menuName: 'Greek Salad',
      menuImg: '/assets/menu-6.png',
    },
    
  ]

  return (
    <div className="text-center flex flex-col items-center">
      <div>
        <p className="mt-32 text-primary text-2xl">SPECIAL SELECTION</p>
        <h2 className="mt-16 text-4xl text-white md:text-5xl">
          Delicious Menu
        </h2>
      </div>
      {/* card items category  */}

      <div className="grid grid-cols-2 gap-10 md:gap-24 mt-32 md:grid-cols-3">
        {FoodsMenu.map((menu, index) => (
          <div className="flex flex-col md:flex-row items-center " key={index}>
            <img src={menu.menuImg} alt="" />
            <div className="mt-4 ml-5 flex flex-col items-center">
              <p className="text-primary text-xl">{menu.menuName}</p>
              <p className="text-red-700 text-xl">20.00$</p>
              <p className="text-white text-sm">tomato, salad, onion</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}

export default SpacialSelection
