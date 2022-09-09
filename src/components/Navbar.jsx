import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {faMagnifyingGlass, faShoppingCart} from '@fortawesome/free-solid-svg-icons'
import beeLogo from '../images/beeLogo.png'
import { useDispatch, useSelector } from 'react-redux'
import { Link, useNavigate } from 'react-router-dom'
import { logout } from '../redux/userSlice'

const Navbar = () => {
    const user = useSelector((state) => state.user.user)
    const cart = useSelector(state => state.cart.quantity);
    const navigate = useNavigate();
    const dispatch = useDispatch();

    const handleLogout = () => {
        setTimeout(() => {
            dispatch(logout())
        }, 400);
        
        navigate('/');
    }

  return (
    <header className='min-w-fit'>
        <div className='text-white flex sm:flex-row sm:justify-between bg-zinc-900 p-3 w-screen min-w-fit flex-wrap items-center gap-x-10 mx-0 my-0 justify-center'>
            <Link to={'/'}>
                <div className='flex gap-2 items-center'>
                    <img src={beeLogo} className="w-8"/>
                    <p className='text-xl p-2'>BeeCommerce</p>
                </div>
            </Link>
            <div className='w-[75%] sm:w-auto border-2 border-transparent rounded-md hover:shadow-md hover:border-white/80 bg-slate-400 p-2 flex hover:cursor-pointer font-thin items-center gap-2 min-w-0'>
                <input id="searchBox" type="text" className='border-none flex-1 bg-slate-400 focus:outline-0 placeholder:text-white/80 min-w-0' placeholder='Search'/>
                <FontAwesomeIcon icon={faMagnifyingGlass}/>
            </div>
            <div>
                <ul className='flex gap-2'>
                    <Link to={'/cart'}>
                        <li className='hover:bg-slate-400 p-2 rounded-md cursor-pointer'><FontAwesomeIcon icon={faShoppingCart}/> {`(${cart})`}</li>
                    </Link>
                    { user ?
                        
                        <li onClick={handleLogout} className='hover:bg-slate-400 p-2 rounded-md cursor-pointer'>Logout</li>
                        
                            :
                        <>
                            <Link to={'/signup'}>
                                <li className='hover:bg-slate-400 p-2 rounded-md cursor-pointer'>Register</li>
                            </Link>
                            <Link to={'/login'}>
                                <li className='hover:bg-slate-400 p-2 rounded-md cursor-pointer'>Login</li>
                            </Link>
                        </>
                    }


                </ul>
            </div>
        </div>
    </header>
  )
}

export default Navbar