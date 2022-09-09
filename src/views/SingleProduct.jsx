import Featured from "../components/Featured"
import Navbar from "../components/Navbar"
import Footer from "../components/Footer"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faShoppingBag } from '@fortawesome/free-solid-svg-icons'
import { useParams } from 'react-router-dom';
import { useState, useEffect } from "react"
import axios from "axios"
import { addProduct } from "../redux/cartSlice"
import { useDispatch } from "react-redux"

const SingleProduct = () => {

    const params = useParams();
    const productId = params.id;

    const [ product, setProduct ] = useState();
    const [ quantity, setQuantity ] = useState(1);
    const dispatch = useDispatch();

    useEffect(() => {
      const getProduct = async () => {
        try {
            const res = await axios.get(`${import.meta.env.VITE_BACKEND_URL}/api/products?id=${productId}`)
            setProduct(res.data[0])
        } catch (error) {
            console.log(error)
        }
      }
      getProduct();
    }, [productId]);
    
    const handleQuantity = (e) => {
        setQuantity(e.target.value)
    };
    
    const handleClick = () => {
        dispatch(addProduct({product, quantity, price: product.price*quantity}));
    }
    
  return (
    <div>
        <Featured/>
        <Navbar/>
        <div className="flex max-w-[100%]">
            <div className="flex-1 p-4">
                <img className="w-full h-[85%] object-cover rounded-lg" src="https://www.kindpng.com/picc/m/22-223525_womens-fashion-transparent-background-hd-png-download.png" alt="" />
            </div>
            <div className="flex-1 flex-col p-4 m-4">
                <h2 className="text-xl sm:text-3xl md:text-4xl font-medium mb-2">{product?.title}</h2>
                <p className="text-md sm:text-lg md:text-xl font-light mb-2">{product?.description}</p>
                <p className="text-xl sm:text-2xl md:text-3xl font-bold mb-2">$ {product?.price}</p>
                <label htmlFor="" className="tex-md sm:text-lg mr-4 mb-2">Select quantity</label>
                <select onChange={handleQuantity} defaultValue={"default"} name="" id="" className='text-black/50 border-2 border-transparent rounded-md hover:border-black/50'>
                    <option value="default" disabled>Quantity</option>
                    <option value="1">1</option>
                    <option value="2">2</option>
                    <option value="3">3</option>
                    <option value="4">4</option>
                </select>
                <button onClick={handleClick} className='mt-2 justify-end block tex-md sm:text-lg bg-blue-300 text-black/80 p-2 rounded-md hover:bg-blue-400 hover:text-black ease-out duration-150'>
                    Add to cart
                    <FontAwesomeIcon icon={faShoppingBag} className="ml-2"/>
                </button>
            </div>
        </div>
        <Footer/>
    </div>
  )
}

export default SingleProduct