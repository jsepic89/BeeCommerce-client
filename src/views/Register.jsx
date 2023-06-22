import { Link } from 'react-router-dom'
import beeLogo from '../images/beeLogo.png'

const Register = () => {
  return (
    <div className='flex flex-col items-center justify-center h-[70vh] sm:h-[80vh]'>
      <Link to={'/'}>
        <img src={beeLogo} className='w-[40px]'/>
      </Link>
      <div className="w-[70%] sm:w-[50%] h-fit p-4  bg-zinc-400/50 min-w-fit rounded-md border-2 border-slate-400">
          <div className="flex flex-col w-full h-full justify-center items-center">
            <h1 className="mb-4 text-xl sm:text-2xl md:text-3xl">Create an account</h1>
            <form action="" className="flex flex-col gap-4 justify-center w-[60%]">
                <input type="text" placeholder="Username" className='p-2 text-black/50 border-2 border-transparent rounded-md hover:border-black/50'/>
                <input type="text" placeholder="Email" className='p-2 text-black/50 border-2 border-transparent rounded-md hover:border-black/50'/>
                <input type="password" placeholder="Password" className='p-2 text-black/50 border-2 border-transparent rounded-md hover:border-black/50'/>
                <input type="password" placeholder="Confirm Password" className='p-2 text-black/50 border-2 border-transparent rounded-md hover:border-black/50'/>
                <button className='sm:w-[80%] sm:self-center mt-2 text-md sm:text-lg md:text-xl bg-black text-white px-8 py-2 rounded-md'>Sign Up</button>
            </form>
            <p className='mt-2'>Or <Link to={'/login'} className='text-blue-600 hover:text-blue-800 font-medium'>login</Link> if you have an account.</p>
          </div>
      </div>
    </div>
  )
}

export default Register