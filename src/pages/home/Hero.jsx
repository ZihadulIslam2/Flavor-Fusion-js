import { motion } from 'framer-motion'

const Hero = () => {
  const text = 'EVERY FLAVOR TELLS A STORY'

  // Split the text into individual letters
  const letters = text.split('')

  return (
    <div className="flex flex-col items-center">
      <h1 className="mt-32 text-primary text-2xl">Delightful Experience</h1>

      <h1 className="mt-16 text-4xl text-center text-white md:text-7xl">
        {letters.map((letter, index) => (
          <motion.span
            key={index}
            initial={{ scale: 1 }} // Initial size
            animate={{ scale: 1.5 }} // Increase size
            transition={{
              duration: 1, // Time for one cycle
              repeat: Infinity, // Loop forever
              repeatType: 'loop', // Smooth loop
              delay: index * 0.2, // Stagger each letter
            }}
            style={{
              display: 'inline-block',
              marginRight: letter === ' ' ? '0.5em' : '0', // Space for spaces
            }}
          >
            {letter}
          </motion.span>
        ))}
      </h1>

      <h3 className="mt-16 text-2xl text-center font-black text-primary">
        come with family & feel the mouthwatering food
      </h3>
      <button className="bg-red-700 text-white font-bold rounded-full mt-16 text-3xl px-8 py-4 shadow-lg transform transition-transform duration-300 hover:scale-110 hover:shadow-2xl hover:bg-transparent hover:border-primary hover:border-2">
        Book a Table
      </button>
    </div>
  )
}

export default Hero
