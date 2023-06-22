import { topProducts } from "../assets/data"
import { faHeart } from '@fortawesome/free-regular-svg-icons'
import { faMagnifyingGlass, faCartShopping } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { useEffect, useState } from "react";
import axios from 'axios';
import { Link } from "react-router-dom";

const TopProducts = ({ category, filter }) => {

  const [ products, setProducts ] = useState([]);
  const [ filteredProducts, setFilteredProducts ] = useState([]);

  useEffect( () => {
    const getProducts = async () => {
      try {
        const res = await axios.get( category 
          ? `${import.meta.env.VITE_BACKEND_URL}/api/products?category=${category}` 
          : `${import.meta.env.VITE_BACKEND_URL}/api/products`);
        setProducts(res.data);
      } catch (error) {
        console.log(error);
      }
    }
    getProducts();
  }, [category]);

  useEffect(() => {
    category &&
      setFilteredProducts(
        products.filter((product) =>
          Object.entries(filter).every(([key, value]) => product[key] == value)
        )
      );
  }, [products, category, filter]);

  return (
    <>
      <div className="flex flex-wrap gap-2 justify-center mt-10 mb-10">
        {category ?
         filteredProducts.slice(0, 6).map((product) => {
          return (
            <div key={product?.id} className="relative flex flex-1 justify-center min-w-[150px] max-w-[200px] bg-blue-100/30 rounded-md gap-1 transform transition-all hover:scale-105">
              <img src={product?.image} alt="" className="object-cover"></img>
              <div className="absolute flex justify-center w-full h-full gap-3 self-center items-center text-center text-white/80 text-lg opacity-0 hover:opacity-100">
                <Link to={`/products/${product._id}`}>
                  <FontAwesomeIcon icon={faMagnifyingGlass} className="w-5 h-5 p-2 hover:cursor-pointer bg-blue-300/70 rounded-xl"/>
                </Link>
              </div>
            </div> 
          )
        })
        :
        topProducts.slice(0,6).map((product) => {
          return (
            <div key={product?.id} className="relative flex flex-1 justify-center min-w-[150px] max-w-[200px] bg-blue-100/30 rounded-md gap-1 transform transition-all hover:scale-105">
              <img src={product?.image} alt="" className="object-contain"></img>
              <div className="absolute flex justify-center w-full h-full gap-3 self-center items-center text-center text-white/80 text-lg opacity-0 hover:opacity-100">
                <Link to={`/products/${product.id}`}>
                  <FontAwesomeIcon icon={faMagnifyingGlass} className="w-5 h-5 p-2 hover:cursor-pointer bg-blue-300/70 rounded-xl"/>
                </Link>
              </div>
            </div> 
          )
        })
      }
      </div>
    </>
  )
}

export default TopProducts