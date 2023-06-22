import Navbar from '../components/Navbar'
import Featured from '../components/Featured'
import TopProducts from '../components/TopProducts'
import Footer from '../components/Footer'
import { useParams } from 'react-router-dom';
import { useState } from 'react'

const Products = () => {

  //useParams hook returns an object, so in order to access the actual category, I first assign the object to an intermediate variable
  //then within that variable, I access the actual param I'm looking for
  const params = useParams();
  const category = params.category;

  const [ filter, setFilter ] = useState({});

  const handleFilter = (e) => {
    setFilter({
      ...filter,
      [e.target.name]: e.target.value
    })
  };
  
  return (
    <div>
      <Featured/>
      <Navbar/>
      <h2 className='text-black font-black text-2xl sm:text-3xl mt-8 mb-2 text-left ml-5 uppercase'>Search through our catalog: </h2>
      <div className='flex flex-row gap-2 text-center justify-around text-lg sm:text-xl h-screen'>
        <div className='flex gap-2 items-center mt-2'>
          <label htmlFor="">Category</label>
          <select onChange={handleFilter} defaultValue={"default"} name="category" id="" className='text-black/50 border-2 border-transparent rounded-md hover:border-black/50'>
            <option value={"default"} disabled>Choose a category</option>
            <option value="electronics">Electronics</option>
            <option value="jewelry">Jewelry</option>
            <option value="mensClothing">Men's clothing</option>
            <option value="womensClothing">Women's clothing</option>
          </select>
        </div>
        <div className='flex gap-2 items-center'>
          <label htmlFor="">Price</label>
          <select onChange={handleFilter} defaultValue={"default"} name="price" id="" className='text-black/50 border-2 border-transparent rounded-md hover:border-black/50'>
            <option value={"default"} disabled>Filter price</option>
            <option value="20">{"< $20"}</option>
            <option value="50">{"$20 to $50"}</option>
            <option value="51">{"> $50"}</option>
          </select>
        </div>
      </div>
      <TopProducts category={category} filter={filter}/>
      <Footer/>
    </div>
  )
}

export default Products