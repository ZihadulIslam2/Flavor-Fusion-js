import Hero from './Hero'
import TopFoods from './TopFoods'
import Story from './Story';
import SpecialDish from './SpecialDish';
import SpacialSelection from './SpacialSelection';
import Reservation from './Reservation';
import Navbar from '../../components/Navbar';

const Home = () => {
  return (
    <div className="min-h-screen">
      <div className="bg-hero-bg bg-cover bg-center min-h-[80vh] md:min-h-[125vh]  ">
        <Hero />
      </div>
        <TopFoods/>
        <Story/>
        <SpecialDish/>
        <SpacialSelection/>
        <Reservation/>

      </div>
  )
}

export default Home