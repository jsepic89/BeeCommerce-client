import React from 'react'
import { useSelector } from 'react-redux'
import { Link } from 'react-router-dom'
import Featured from '../components/Featured'
import Footer from '../components/Footer'
import Navbar from '../components/Navbar'

const Cart = () => {

    const cart = useSelector(state => state.cart)

  return (
    <div>
        <Featured/>
        <Navbar/>
        <div className='p-5'>
            <h2 className="text-xl sm:text-3xl md:text-4xl font-medium mb-4 text-center">Items in your cart:</h2>
            <div className='flex flex-col sm:flex-row gap-2 justify-around'>
                <div id='info' className='flex flex-col gap-3 self-center'>
                    {cart.products.map(product => (                        
                        <div key={product.product._id} id='product' className='flex'>
                            <div id='productDetail' className='flex gap-5'>
                                <img src="https://static.wixstatic.com/media/2cd43b_70674f11a01e43f19366ee72aee4b8bb~mv2.png/v1/fit/w_473,h_383,q_90/2cd43b_70674f11a01e43f19366ee72aee4b8bb~mv2.png" alt="" className='max-w-[120px] h-fit'/>
                                <div className='mt-2'>
                                    <p className="text-md sm:text-lg md:text-2xl font-light mb-2">Product: {product.product.title}</p>
                                    <p className="text-sm sm:text-md md:text-xl font-light mb-2">Category: {product.product.category}</p>
                                    <p className="text-sm sm:text-md md:text-xl font-light mb-2">Quantity: {product.quantity} 
                                    <select defaultValue={"default"} name="" id="" className='text-black/50 border-2 border-transparent rounded-md hover:border-black/50 block'>
                                        <option value="default" disabled>Quantity</option>
                                        <option value="">1</option>
                                        <option value="">2</option>
                                        <option value="">3</option>
                                        <option value="">4</option>
                                    </select>
                                    </p>
                                    <p className="text-md sm:text-lg md:text-xl font-light mb-2">Price: $ {product.price}</p>
                                </div>

                            </div>
                        </div>                            
                ))}
                    
                </div>
                <div id='summary' className='flex flex-col gap-2 w-[80vw] sm:w-[30vw] border-2 p-2 rounded-md self-center sm:self-start bg-slate-100'>
                    <p className="text-xl sm:text-2xl md:text-3xl font-normal mb-2 text-center">Your order</p>
                    <p className="text-lg sm:text-xl md:text-2xl font-light mb-2">Subtotal: $ {cart.totalPrice}</p>
                    <p className="text-lg sm:text-xl md:text-2xl font-light mb-2">Discount:</p>
                    <p className="text-xl sm:text-2xl md:text-3xl font-bold mb-2">Total: $ {cart.totalPrice}</p>

                </div>
            </div>
            <div className='flex items-center justify-center gap-2'>
                <Link to={'/products'}>
                    <button className='mt-2 justify-end block tex-md sm:text-lg border-2 border-slate-300 text-black/80 p-2 rounded-md bg-slate-100 hover:bg-slate-400 hover:text-black ease-out duration-150'>Continue shopping</button>
                </Link>
                <button className='mt-2 justify-end block tex-md sm:text-lg bg-green-400 text-black/80 p-2 rounded-md hover:bg-green-600 hover:text-black ease-out duration-150'>Checkout</button>
            </div>
        </div>
        <Footer/>
    </div>
  )
}

export default Cart