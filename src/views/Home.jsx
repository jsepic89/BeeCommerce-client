import Navbar from '../components/Navbar'
import Featured from '../components/Featured'
import Slider from '../components/Slider'
import Categories from '../components/Categories'
import TopProducts from '../components/TopProducts'
import Footer from '../components/Footer'

const Home = () => {
  return (
    <div>
        <div className='h-vh'>
          <Featured/>
          <Navbar/>
          <Slider/>
          <Categories/>
          <h1 className="text-black font-black text-2xl sm:text-5xl mt-8 mb-2 text-center uppercase">BEST SELLERS:</h1>
          <TopProducts/>
        </div>
        
        <Footer/>
    </div>
  )
}

export default Home